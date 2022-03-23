import axios, { AxiosResponse } from "axios"
import log from "../logger"
import BookResponse from "../models/books/BooksResponse"
const BaseUrl = `https://www.googleapis.com/books/v1/volumes?key=${process.env.GOOGLE_API_KEY}`

/// implement cache here


const searchBookByTerm = async (term: string, startIndex: number = 0, maxResults: number = 40): Promise<any> => {
    try {

        let url = `${BaseUrl}&q=${term}&startIndex=${startIndex}&maxResults=${maxResults}`
        console.log(url)
        const booksResp = await axios.get<BookResponse>(url).then<BookResponse>(res => res.data)
        const count = booksResp.totalItems
        if (count < 40) {
            return { ...booksResp, startIndex };
        }

        const promiseArr = [];
        for (let i = startIndex; i < startIndex + 10; i++) {
            if (count < (i * 40)) {
                break;
            }
            url = `${BaseUrl}&q=${term}&startIndex=${i}&maxResults=${maxResults}`
            promiseArr.push(axios.get<BookResponse>(url).then<BookResponse>(res => res.data))
        }
        const allBooksPromise = await Promise.all(promiseArr);
        let allBooksResp = booksResp
        allBooksResp.items = [];
        allBooksPromise.forEach((books: BookResponse) => {
            allBooksResp.items = [...allBooksResp.items, ...books.items]
        })
        return allBooksResp



    }
    catch (err) {
        console.log(err)
        log.error(err);
        throw err

    }
}



export default {
    searchBookByTerm
}