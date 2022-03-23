import React, { useState } from 'react'
import BooksResponse from '../models/books/BooksResponse'
import services from "../services/index"

export default function useGetBooksBySearchTerm() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(undefined)
    const [data, setData] = useState<BooksResponse | null>(null)


    const getBooksBySearchTerm = async (searchTerm: string) => {
        try {
            setLoading(true)
            const res = await services.bookService.getBooksBySearchTerm(searchTerm)
            setData(res);
            setLoading(false)

        }
        catch (err) {
            setLoading(false)
            setData(null)
            console.error("api error issues")
        }

    }

    return { getBooksBySearchTerm, data, loading, error }
}
