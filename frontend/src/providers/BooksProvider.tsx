import React, { useEffect, useState } from "react";
import useGetBooksBySearchTerm from "../hooks/useGetBooksBySearchTerm";
import Book from "../models/books/Book"

export interface BooksContextProps {
    books: Book[] | undefined,
    startIndex: number,
    kind: string,
    totalItems: number,
    error: any,
    loading: boolean,
    getBooksBySearchTerm: (val: string) => void
}
interface BooksProviderProps {
    children: React.ReactNode;
}
export const BooksContext = React.createContext<BooksContextProps>({
    books: undefined,
    error: false,
    getBooksBySearchTerm: () => { },
    kind: "",
    loading: false,
    startIndex: 0,
    totalItems: 0

});

const BooksProvider = ({ children }: BooksProviderProps) => {
    const { data, error, getBooksBySearchTerm, loading } = useGetBooksBySearchTerm();
    const { items: books = undefined, startIndex = 0, kind = "", totalItems = 0 } = data || {}

    const [value, setValue] = useState({
        books,
        error,
        getBooksBySearchTerm,
        loading,
        startIndex,
        totalItems,
        kind
    })

    useEffect(() => {
        const { items: books = undefined, startIndex = 0, kind = "", totalItems = 0 } = data || {}
        setValue({
            books,
            error,
            loading,
            startIndex,
            totalItems,
            kind,
            getBooksBySearchTerm

        })


    }, [data, loading, error])


    return (
        <BooksContext.Provider
            value={value}
        >
            {children}
        </BooksContext.Provider>
    );
};

export default BooksProvider;
