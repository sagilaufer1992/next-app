import './SearchInput.css';

import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';

import { useCallback } from "react";
import { Icon } from '@material-ui/core';

function SearchInput({ callback }) {
    const onChange = useCallback((changeEvent) => callback(changeEvent.target.value), [callback])

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
