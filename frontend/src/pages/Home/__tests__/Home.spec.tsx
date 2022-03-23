
import React from 'react';
import Home from '../index';
import BooksProvider, { BooksContextProps } from '../../../providers/BooksProvider';
import { fireEvent, getAllByText, render } from '@testing-library/react';

// has to be defined like this cannot be global

describe('Home Component', () => {
    let props;

    beforeEach(() => {
        props = {};
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
                <Home />
            </BooksProvider>
        );
        expect(container).toMatchSnapshot();
    });

    it('>> renders component and contains search component', async () => {
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
                <Home />
            </BooksProvider>
        );

        expect(getByText('Filter your results'))


    });


});
