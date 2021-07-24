// import './SearchInput.css';

import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';

import { useCallback, useEffect, useState } from "react";
import { Icon } from '@material-ui/core';

function SearchInput({ filterItems, setResult }) {
    const onChange = useCallback((event) => {
        setResult(filterItems(event.target.value))
    }, [filterItems, setResult])
    return (
        <div className="search-input">
            <Input
                id="input-with-icon-adornment"
                placeholder="search"
                onChange={onChange}
                startAdornment={
                    <InputAdornment position="start">
                        <Icon >search</Icon>
                    </InputAdornment>
                }
            />
        </div>
    );
}

export default SearchInput;
