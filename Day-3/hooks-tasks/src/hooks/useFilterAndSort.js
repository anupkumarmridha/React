import { useMemo } from 'react';

export const useFilterAndSort = (items, searchTerm, sortKey, sortDirection) => {
    const filteredAndSortedItems = useMemo(() => {
        let sortedItems = [...items];

        // Sorting logic
        if (sortKey) {
            sortedItems.sort((a, b) => {
                if (sortDirection === 'asc') {
                    return a[sortKey].localeCompare(b[sortKey]);
                } else {
                    return b[sortKey].localeCompare(a[sortKey]);
                }
            });
        }

        // Filtering logic
        if (searchTerm) {
            sortedItems = sortedItems.filter(item =>
                item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.description.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        return sortedItems;
    }, [items, searchTerm, sortKey, sortDirection]);

    return filteredAndSortedItems;
};
