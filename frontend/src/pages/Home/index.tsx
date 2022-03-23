import { CircularProgress, Container, Grid, Paper, Typography } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import { constants } from 'buffer';
import React, { useCallback, useContext, useEffect, useState } from 'react'
import CardList from '../../components/CardList';
import RatingDropdown from '../../components/RatingDropDown'
import Search from '../../components/Search';
import Book from '../../models/books/Book';
import { BooksContext } from '../../providers/BooksProvider';
import literals from '../../utils/literals';
import useStyles from './style';
import { RATINGS } from '../../utils/constants';


export interface HomeProps {
    ratings: number[],
}

export default function Home() {
    const classes = useStyles();
    const [searchTerm, setSearchTerm] = useState("");
    const { books, error, getBooksBySearchTerm, kind, loading, startIndex, totalItems } = useContext(BooksContext);
    const [currentBooks, setCurrentBooks] = useState<Book[] | undefined>(undefined)
    const [listSlice, setListSlice] = useState<Book[] | undefined>(undefined)

    const [currentBooksCount, setCurrentBooksCount] = useState<number>(0)
    const [currentPageCount, setCurrentPageCount] = useState<number>(0)
    const [filterRating, setFilterRating] = useState<number | "">("")



    const onChange = (val: string) => {
        setSearchTerm(val)
    }

    useEffect(() => {

        setFilterRating("")
        setCurrentBooks(undefined)
        setCurrentBooksCount(0)
        setCurrentPageCount(0)
        setListSlice(undefined)


        getBooksBySearchTerm(searchTerm)
    }, [searchTerm])

    const onRatingsChange = (rating: number | "") => {

        if (!currentBooksCount) {
            setFilterRating("")
            return
        }
        setFilterRating(rating)
    }


    const onPageChange = (evt: any, page: number) => {

        const totalCount = ((page - 1) * 10) + 10
        if (totalCount < currentBooksCount) {
            setListSlice(currentBooks?.slice((page - 1) * 10, totalCount))
            return
        }
        setListSlice(currentBooks?.slice((page - 1) * 10))


    }


    useEffect(() => {
        setCurrentBooks(books)
        setCurrentBooksCount(books?.length || 0)
        setCurrentPageCount(books?.length ? Math.floor(books.length * 0.1) : 0)

        const bookLen = books?.length || 0
        if (!bookLen) {

            setListSlice(undefined)
            return
        }
        if (bookLen && bookLen < 10) {

            setListSlice(books?.slice(0))
            return
        }
        if (bookLen && bookLen >= 10) {

            setListSlice(books?.slice(0, 10))
            return
        }

    }, [loading, error, books])

    useEffect(() => {
        let bookLen
        if (filterRating) {
            const tempBooks = books?.filter(item => item.volumeInfo?.averageRating && item.volumeInfo?.averageRating >= filterRating)
            setCurrentBooks(tempBooks)
            setCurrentBooksCount(tempBooks?.length || 0)
            setCurrentPageCount(tempBooks?.length ? Math.floor(tempBooks.length * 0.1) : 0)
            bookLen = tempBooks?.length || 0
            if (!bookLen) {

                setListSlice(undefined)
                return
            }
            if (bookLen && bookLen < 10) {

                setListSlice(tempBooks?.slice(0))
                return
            }
            if (bookLen && bookLen >= 10) {

                setListSlice(tempBooks?.slice(0, 10))
                return
            }
            return
        }
        setCurrentBooks(books)
        setCurrentBooksCount(books?.length || 0)
        setCurrentPageCount(books?.length ? Math.floor(books.length * 0.1) : 0)
        bookLen = books?.length || 0
        if (!bookLen) {

            setListSlice(undefined)
            return
        }
        if (bookLen && bookLen < 10) {

            setListSlice(books?.slice(0))
            return
        }
        if (bookLen && bookLen >= 10) {

            setListSlice(books?.slice(0, 10))
            return
        }
        return

    }, [filterRating])



    return (
        <React.Fragment>
            <Container disableGutters maxWidth={false} className={classes.root}>
                <Grid container spacing={10} >
                    <Grid item md={3} xs={12} >
                        <RatingDropdown ratings={RATINGS} onSelectChange={onRatingsChange} values={filterRating} />
                    </Grid>
                    <Grid item md={8} xs={12} className={classes.searchContainer}>
                        <div>
                            <Search onChange={onChange} value={searchTerm} />
                            {loading && <div className={classes.progress}>
                                <CircularProgress />
                            </div>}
                            {searchTerm && !loading && !error ? <CardList books={listSlice} /> : null}
                            {!searchTerm && !loading && !error ? <Typography variant="h6" gutterBottom className={classes.searchTermPrompt}>
                                {literals.searchPromptMessage}
                            </Typography> : null}

                        </div>
                        {!loading && !error && currentPageCount ? <div className={classes.paginationContainer}>
                            <Pagination count={currentPageCount} variant="outlined" shape="rounded" onChange={onPageChange} />
                        </div> : null}
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment >)
}
