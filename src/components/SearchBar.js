import React from 'react';

const SearchBar = () => {
    return (
        <form className="m-2">
            <div className="form-group">
                <input type="search" className="form-control" id="search-link" aria-describedby="emailHelp" placeholder="Search..." />
                <small id="searchHelp" className="form-text text-muted">Type in link to search</small>
            </div>
        </form>
    );
};

export default SearchBar;