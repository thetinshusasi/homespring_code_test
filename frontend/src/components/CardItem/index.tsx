import { ListItem, Avatar, Typography } from '@material-ui/core'
import { Rating } from '@material-ui/lab'
import React from 'react'
import Book from '../../models/books/Book';
import useStyles from './style';

export interface ICardItem {
    book: Book
}
export default function CardItem({ book }: ICardItem) {
    const classes = useStyles();
    const { authors = [], averageRating = 0, categories = [], description = null, imageLinks = null, pageCount = 0, publishedDate, publisher, title } = book.volumeInfo

    return (
        <ListItem className={classes.listItem} >
            <div className={classes.avatarContainer}>
                <Avatar src={imageLinks?.smallThumbnail || ""} variant='square' className={classes.large} />
                <div>
                    <Typography variant="subtitle2" gutterBottom>
                        {authors.join(", ")}
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom>
                        {categories.join(", ")}
                    </Typography>
                </div>


            </div>
            <div className={classes.listBody}>
                <Typography variant="h6" gutterBottom>
                    {title}
                </Typography>
                <Rating name="size-large" defaultValue={averageRating} size="large" readOnly />
                <Typography variant="subtitle2" gutterBottom className={classes.subtitle}>
                    <span>{`#${pageCount}`}</span>
                    <span>{`${publishedDate?.slice(0, 4)} `}</span>
                    <span>{`${publisher}`}</span>

                    {`               `}
                </Typography>
                <Typography variant="subtitle1" gutterBottom className={classes.maxLines}>
                    {description}
                </Typography>


            </div>

        </ListItem>)
}
