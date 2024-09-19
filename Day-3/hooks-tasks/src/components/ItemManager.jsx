import React, { useState, useContext } from 'react';
import AddItem from './ui/AddItem';
import SearchInput from './ui/SearchInput';
import { useFilterAndSort } from '../hooks/useFilterAndSort';
import ItemContext from '../providers/ItemProvider';
import TableHeader from './ui/TableHeader';
import ItemList from './ui/ItemList';

const ItemManager = () => {
    const { items, dispatch } = useContext(ItemContext);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortKey, setSortKey] = useState('name');
    const [sortDirection, setSortDirection] = useState('asc');

    const filteredAndSortedItems = useFilterAndSort(items, searchTerm, sortKey, sortDirection);

    // Handle Add Item
    const handleAddItem = (item) => {
        dispatch({ type: 'ADD_ITEM', payload: item });
    };

    // Handle Remove Item
    const handleRemoveItem = (id) => {
        dispatch({ type: 'REMOVE_ITEM', payload: id });
    };

    // Handle sorting by column
    const handleSort = (key) => {
        const newSortDirection = sortKey === key && sortDirection === 'asc' ? 'desc' : 'asc';
        setSortKey(key);
        setSortDirection(newSortDirection);
    };

    // Toggle Add Item Form
    const [isAddItemFormOpen, setIsAddItemFormOpen] = useState(false);

    const toggleAddItemForm = () => {
        setIsAddItemFormOpen(!isAddItemFormOpen);
    };

    return (
        <div className='container'>
            <h1 className='text-center'>Item Manager</h1>
            <div className='d-flex justify-content-between mb-3'>
                <button 
                    className='btn btn-primary' 
                    onClick={toggleAddItemForm}
                >
                    {isAddItemFormOpen ? 'close' : 'Add Item'}
                </button>
                <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </div>
            <div className={`collapse ${isAddItemFormOpen ? 'show' : ''} mb-3`}>
                <AddItem onAdd={handleAddItem} />
            </div>
            <table className='table table-striped'>
                <TableHeader sortKey={sortKey} sortDirection={sortDirection} onSort={handleSort} />
                <ItemList items={filteredAndSortedItems} onRemove={handleRemoveItem} />
            </table>
        </div>
    );
};

export default ItemManager;