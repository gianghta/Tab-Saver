import React from 'react';

const SearchBar = ({ onChangeValue }) => {
    const submitHandler = (e) => {
        e.preventDefault();
    }

    return (
        <form className="m-2" onSubmit={submitHandler}>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    id="search-link"
                    aria-describedby="emailHelp"
                    placeholder="Search..."
                    onChange={onChangeValue}

                />
                <small id="searchHelp" className="form-text text-muted">Type in link to search</small>
            </div>
        </form>
    );
};

export default SearchBar;