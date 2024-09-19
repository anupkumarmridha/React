import React, { useLayoutEffect, useRef } from 'react';

const SearchInput = ({ searchTerm, setSearchTerm }) => {
    const searchRef = useRef();
    
    useLayoutEffect(() => {
        searchRef.current.focus();
    }, []);

    return (
      <div className="flex justify-center">
      <input
        ref={searchRef}
        className='m-3 form-control form-control-md w-1/3'
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      </div>
    );
};

export default SearchInput;