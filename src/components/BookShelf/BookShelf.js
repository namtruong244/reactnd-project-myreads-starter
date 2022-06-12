import React from "react";
import PropsTypes from "prop-types";
import Book from "../Book/Book";

const BookShelf = (props) => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {Array.isArray(props.books) === true && props.books.map(book => <Book key={book.id} bookInfo={book}/>)}
                </ol>
            </div>
        </div>
    )
}

BookShelf.prototype = {
    title: PropsTypes.string.isRequired,
    books: PropsTypes.array
}

export default BookShelf;
