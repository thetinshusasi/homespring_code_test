import axios, { AxiosResponse } from "axios"
import BooksResponse from "../models/books/BooksResponse"
const baseUrl = "http://localhost:3001/api/"

export const getBooksBySearchTerm = async (searchTerm: string): Promise<any> => {
    try {
        const booksRes = await axios.get<AxiosResponse<BooksResponse>>(`${baseUrl}books?searchTerm=${searchTerm}`)
            .then(res => res.data);
        return booksRes
    }
    catch (err) {
        console.error(err)
    }

}

export default {
    getBooksBySearchTerm
}