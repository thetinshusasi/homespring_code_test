import Book from "./book";

export default interface BooksResponse {
    kind: string;
    totalItems: number;
    items: Book[];
    startIndex: number;
}



