import React, { useEffect } from 'react'
import literals from "../../utils/literals"
import { toNumber } from 'lodash';
import { Grid, Typography, FormControl, InputLabel, Select, MenuItem, ListItemText, Input } from '@material-ui/core';
import useStyles from "./style"



export interface IRatingDropdownProps {
    ratings: number[],
    onSelectChange?: (rating: number | "") => void,
    values?: number | ""
}

export default function RatingDropdown({ ratings, onSelectChange, values = "" }: IRatingDropdownProps) {
    const classes = useStyles();

    const [items, setItems] = React.useState<number | "">(values);

    useEffect(() => {
        setItems(values)
    }, [values])


    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        const {
            target: { value },
        } = event;
        const tempVal = toNumber(value)
        const result = !isNaN(tempVal) ? tempVal : ""
        setItems(result)
        if (onSelectChange) onSelectChange(result)
    };


    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h6" gutterBottom component="div" className={classes.heading}>
                    {literals.filterHeading}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <div>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-outlined-label">{literals.allBooks}</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            data-testid="ratingSelect"
                            value={items}
                            onChange={handleChange}
                            multiple={false}
                            label={literals.allBooks}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {ratings.map((rating) => (
                                <MenuItem key={rating} value={rating}>
                                    <ListItemText primary={`Greater than ${rating} star`} />
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                </div>
            </Grid>
        </Grid >
    )
}
