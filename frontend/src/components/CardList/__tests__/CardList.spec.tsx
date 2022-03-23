/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable jest/valid-expect */

import React from 'react';
import CardList, { ICardList } from '../index';
import BooksProvider, { BooksContextProps } from '../../../providers/BooksProvider';
import { render } from '@testing-library/react';

// has to be defined like this cannot be global

describe('CardList Component', () => {
    let props: ICardList;

    beforeEach(() => {
        props = {
            books: [{
                id: "1",
                volumeInfo: {
                    authors: ["a1"],
                    averageRating: 5,
                    categories: ['c1'],
                    description: "desc",
                    imageLinks: {
                        smallThumbnail: "smallImage",
                        thumbnail: 'image'
                    },
                    pageCount: 10,
                    publishedDate: "2020",
                    publisher: "publisher",
                    title: "title"

                }
            }]
        };
    });

    it('>> renders component', () => {

        const contextValue: BooksContextProps = {
            books: undefined,
            error: false,
            getBooksBySearchTerm: () => { },
            kind: "",
            loading: false,
            startIndex: 0,
            totalItems: 0
        };
        const { container } = render(
            <BooksProvider value={contextValue}>
                <CardList {...props} />
            </BooksProvider>
        );
        expect(container).toMatchSnapshot();
    });

    it('>> renders component and contains all props', async () => {
        const mockFn = jest.fn()
        const contextValue: BooksContextProps = {
            books: undefined,
            error: false,
            getBooksBySearchTerm: mockFn,
            kind: "",
            loading: false,
            startIndex: 0,
            totalItems: 0
        };
        const { container, getByText } = render(
            <BooksProvider value={contextValue}>
                <CardList {...props} />
            </BooksProvider>
        );
        expect(getByText('#10'))
        expect(getByText('2020'))
        expect(getByText('publisher'))
        expect(getByText('a1'))
        expect(getByText('c1'))
        expect(getByText('title'))
        expect(getByText('desc'))





    });


});
