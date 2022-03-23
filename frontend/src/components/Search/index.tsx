import { FormControl, Input, InputAdornment } from '@material-ui/core'
import { Search as SearchIcon } from '@material-ui/icons';
import React, { ChangeEvent, useEffect, useState } from 'react'
import { useDebounce } from 'usehooks-ts'
import useStyles from './style';

export interface ISearchProps {
    value?: string,
    onChange?: (val: string) => void,
    placeholder?: string
}
export default function Search({ value = "", onChange, placeholder = "Search" }: ISearchProps) {
    const classes = useStyles();


    const [val, setVal] = useState(value);
    const debouncedValue = useDebounce<string>(val, 750)

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setVal(event.target.value)
    }

    useEffect(() => {
        if (onChange) {
            onChange(val)
        }
    }, [debouncedValue])

    return (
        <FormControl className={classes.margin}>

            <Input
                id="input-with-icon-adornment"
                data-testid="searchInp"
                startAdornment={
                    <InputAdornment position="start">
                        <SearchIcon scale={3} />
                    </InputAdornment>
                }
                onChange={handleChange}
                fullWidth
            />
        </FormControl>
    )
}
