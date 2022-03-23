import React from 'react'
import List from '@material-ui/core/List';
import Rating from '@material-ui/lab/Rating';


import useStyles from "./style"
import { Typography, Divider } from '@material-ui/core';
import CardItem from '../CardItem';
import Book from '../../models/books/Book';
import literals from '../../utils/literals';

export interface ICardList {
    books: Book[] | undefined
}
export default function CardList({ books }: ICardList) {
    const classes = useStyles();
    const content = books && books.length ? books?.map((book, index) => {
        return <span key={book.id + index}>
            <CardItem book={book} />
            <Divider variant="inset" component="li" />

        </span>
    }) : <Typography variant="h6" gutterBottom align='center'>
        {literals.noBooksMessage}
    </Typography>

    return (
        <>
            <List className={classes.root}>
                {content}
            </List >



        </>
    )

}
