const request = require('supertest');
import booksRouter from '../../index'
jest.useRealTimers()
jest.setTimeout(10000)
var server = request.agent(booksRouter);

describe("Books Api service", () => {
    describe("Given search term", () => {

        it("should respond with a 200 status code", async () => {

            const res = await server
                .get('/api/books')
                .query({
                    searchTerm: "java",
                }).send();

            expect(res.statusCode).toEqual(200)

        });


    })
})