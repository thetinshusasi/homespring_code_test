import * as express from "express";
import booksRouter from "./books";

const rootRouter = express.Router();

rootRouter.use("/books", booksRouter)

export default rootRouter;
