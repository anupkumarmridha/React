import React from 'react';

const TableHeader = ({ sortKey, sortDirection, onSort }) => {
    return (
        <thead>
            <tr>
                <th 
                    className="col-4 border" 
                    onClick={() => onSort('name')}
                    style={{ cursor: 'pointer' }}
                >
                    Name {sortKey === 'name' ? (sortDirection === 'asc' ? '↑' : '↓') : ''}
                </th>
                <th 
                    className="col-6 border" 
                    onClick={() => onSort('description')}
                    style={{ cursor: 'pointer' }}
                >
                    Description {sortKey === 'description' ? (sortDirection === 'asc' ? '↑' : '↓') : ''}
                </th>
                <th className="col-2 border">Action</th>
            </tr>
        </thead>
    );
};

export default TableHeader;