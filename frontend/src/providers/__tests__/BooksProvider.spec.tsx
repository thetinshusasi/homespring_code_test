import { render } from '@testing-library/react';
import React, { useContext } from 'react';
import useGetBooksBySearchTerm from '../../hooks/useGetBooksBySearchTerm';

import BooksProvider, { BooksContext } from '../BooksProvider';

jest.mock('../../hooks/useGetBooksBySearchTerm');


describe('BooksProvider', () => {
    it('>> renders children and context is  available', () => {
        const mockFn = jest.fn();
        useGetBooksBySearchTerm.mockReturnValue({
            getBooksBySearchTerm: mockFn, data: [], loading: false, error: false
        });
        const TestComponent = () => {
            const value = useContext(BooksContext);
            return <div>{JSON.stringify(value)}</div>;
        };


        const { getByText, container } = render(
            <BooksProvider>
                <TestComponent />
            </BooksProvider>
        );
        expect(container).toMatchInlineSnapshot(`
<div>
  <div>
    {"error":false,"loading":false,"startIndex":0,"totalItems":0,"kind":""}
  </div>
</div>
`)

        expect(container).toBeInTheDocument()
        expect(getByText(`{"error":false,"loading":false,"startIndex":0,"totalItems":0,"kind":""}`));

    });
});
