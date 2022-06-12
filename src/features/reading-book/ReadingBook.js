import React, {useCallback, useEffect, useState} from "react";
import BookShelf from "../../components/BookShelf/BookShelf";
import SearchButton from "../../components/Button/SearchButton/SearchButton";
import BooksAPI from "../../services/BooksAPI";


const ReadingBook = () => {
    const [books, setBooks] = useState([]);

    /**
     * @description useEffect Hook for fetch data from api
     */
    useEffect(() => {
        fetchBooks();
    }, [])

    let currentlyReading = [],
        wantToRead = [],
        read = []

    /**
     * @description Set data for each state of book
     * @param books Data fetch from server
     */
    books.forEach(book => {
        eval(`${book.shelf}.push(book)`);
    })

    const fetchBooks = useCallback(async () => {
        try{
            const res = await BooksAPI.getAll();
            setBooks(res.books);
        }catch (e) {
            setBooks([]);
        }
    }, [])

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <BookShelf title={"Currently Reading"} books={currentlyReading}/>
                <BookShelf title={"Want to Read"} books={wantToRead}/>
                <BookShelf title={"Read"} books={read}/>
            </div>
            <SearchButton/>
        </div>
    )
}

export default ReadingBook;
