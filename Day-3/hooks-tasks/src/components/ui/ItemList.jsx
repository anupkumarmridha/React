import React from 'react';

const ItemList = ({ items, onRemove }) => {
    return (
        <tbody>
            {items.length > 0 ? (
                items.map((item) => (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.description}</td>
                        <td>
                            <button className="btn btn-danger" onClick={() => onRemove(item.id)}>Remove</button>
                        </td>
                    </tr>
                ))
            ) : (
                <tr>
                    <td colSpan="3" className="text-center">No items found</td>
                </tr>
            )}
        </tbody>
    );
};

export default ItemList;