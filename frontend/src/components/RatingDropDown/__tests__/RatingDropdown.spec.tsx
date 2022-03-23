/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable jest/valid-expect */

import React from 'react';
import RatingDropdown, { IRatingDropdownProps } from '../index';
import BooksProvider, { BooksContextProps } from '../../../providers/BooksProvider';
import { fireEvent, getByTestId, render, act } from '@testing-library/react';

// has to be defined like this cannot be global

describe('CardItem Component', () => {
    let props: IRatingDropdownProps;

    beforeEach(() => {
        props = {
            ratings: [1, 2, 3, 4],
            values: 2
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
                <RatingDropdown {...props} />
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
        const { getByText } = render(
            <BooksProvider value={contextValue}>
                <RatingDropdown {...props} />
            </BooksProvider>
        );
        expect(getByText('Filter your results'))


    });
    it('>> renders component and pm', async () => {
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
        props = {
            ...props,
            onSelectChange: mockFn
        }
        const { getByText } = render(
            <BooksProvider value={contextValue}>
                <RatingDropdown {...props} />
            </BooksProvider>
        );


        fireEvent.click(getByText('Greater than 2 star'))

    });


});
