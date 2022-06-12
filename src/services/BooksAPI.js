import axiosClient from "./axiosClient";

const BooksAPI = {
    async get(bookId) {
        return await axiosClient.get(`/books/${bookId}`)
    },
    async getAll() {
        return await axiosClient.get('/books')
    },
    async update(bookId, shelf) {
        return await axiosClient.put(`/books/${bookId}`, {shelf})
    },
    async search (query) {
        return await axiosClient.post('/search', query)
    }
}

export default BooksAPI;
