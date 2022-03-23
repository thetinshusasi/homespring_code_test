import { Request, Response } from "express";
import Services from "../services/index"


const getBySearchTerm = async (req: Request, res: Response) => {
    try {
        const searchTerm = req.query.searchTerm as string
        const startIndex = parseInt(req.query.searchTerm as string) || 0
        const maxResults = parseInt(req.query.searchTerm as string) || 40
        const booksResp = await Services.booksService.searchBookByTerm(searchTerm, startIndex, maxResults)
        return res.send(booksResp)

    }
    catch (err) {
        return res.status(401).send()
    }

}

export default {
    getBySearchTerm
}