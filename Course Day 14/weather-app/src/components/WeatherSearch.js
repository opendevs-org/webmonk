import React, { useEffect, useState } from "react";
import {
    CircularProgress,
    FormControl,
    Grid,
    Input,
    InputAdornment,
    InputLabel,
    Tooltip,
    Typography,
} from "@material-ui/core";
import Search from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";

import useDebounce from "../use-debounce";

const useStyles = makeStyles((theme) => ({
    error: {
        color: "red",
        padding: "10px",
    },
    search: {
        marginTop: "10px",
    },
}));

export default function WeatherSearch(props) {
    const classes = useStyles();
    const { error, onCityChange } = props;
    //NOTE: creating 2 states for search term (search input) & isSearching (to show loader while typing)
    const [searchTerm, setSearchTerm] = useState("");
    const [isSearching, setSearching] = useState(false);
    //NOTE: get the debounced query, i.e. wait 1 second after user stops typing his query
    const debouncedSearchTerm = useDebounce(searchTerm, 1000);
    const hasError = error ? true : false;

    //NOTE: function to set search input value
    const handleSearch = (event) => {
        setSearching(true);
        setSearchTerm(event.target.value);
    };

    //NOTE: useEffect hook used to call onCityChange & setSearching functions whenever we have new *DEBOUNCED* search term, i.e. a search term after waiting 1 sec of user stopping typing
    useEffect(() => {
        if (debouncedSearchTerm) {
            onCityChange(debouncedSearchTerm);
            setSearching(false);
        }
    }, [onCityChange, debouncedSearchTerm, isSearching]);

    //NOTE: startAdornment means what to append to start of input, endAdornment means what to append to the end of the input
    return (
        <div className={classes.search}>
            <Grid container alignItems="flex-end">
                <Grid item xs={12} style={{ textAlign: "center" }}>
                    <FormControl>
                        <InputLabel htmlFor="search-city">
                            Enter city name
                        </InputLabel>
                        <Input
                            id="search-city"
                            role="search"
                            type="text"
                            error={hasError}
                            onChange={handleSearch}
                            startAdornment={
                                <InputAdornment position="start">
                                    <Tooltip title="Optional: Enter a two-letter country code after the city name to make the search more precise. For example, London, GB.">
                                        <Search />
                                    </Tooltip>
                                </InputAdornment>
                            }
                            endAdornment={
                                isSearching && (
                                    <InputAdornment position="end">
                                        <CircularProgress size={20} />
                                    </InputAdornment>
                                )
                            }
                        />
                        {error && (
                            <Typography className={classes.error}>
                                {error}
                            </Typography>
                        )}
                    </FormControl>
                </Grid>
            </Grid>
        </div>
    );
}
