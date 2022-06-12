import React from "react";
import BookShelf from "../../components/BookShelf/BookShelf";
import SearchButton from "../../components/Button/SearchButton/SearchButton";
import PropsTypes from "prop-types";

const ReadingBook = ({books, onChange}) => {
    const currentlyReading = [],
        wantToRead = [],
        read = []

    /**
     * @description Set data for each state of book
     * @param books Data fetch from server
     */
    books.forEach(book => {
        eval(`${book.shelf}.push(book)`);
    })

    const changeShelfOfBookHandler = (bookInfo, shelfValue) => {
        onChange(bookInfo, shelfValue);
    }

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <BookShelf title={"Currently Reading"} books={currentlyReading} onChangeBookShelf={changeShelfOfBookHandler}/>
                <BookShelf title={"Want to Read"} books={wantToRead} onChangeBookShelf={changeShelfOfBookHandler}/>
                <BookShelf title={"Read"} books={read} onChangeBookShelf={changeShelfOfBookHandler}/>
            </div>
            <SearchButton/>
        </div>
    )
}

ReadingBook.prototype = {
    books: PropsTypes.array,
    onChange: PropsTypes.func
}

export default ReadingBook;
