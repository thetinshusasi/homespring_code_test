import { Router } from 'express';
import BooksController from "../controllers/books"
let booksRouter = Router();

booksRouter.get('', BooksController.getBySearchTerm);


export default booksRouter
