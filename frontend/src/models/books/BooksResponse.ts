import Book from "./Book";

export default interface BooksResponse {
    kind: string;
    totalItems: number;
    items: Book[];
    startIndex: number;
}



