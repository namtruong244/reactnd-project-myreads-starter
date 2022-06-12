import React from "react";
import PropsTypes from "prop-types";
import BooksAPI from "../../services/BooksAPI";

const Book = (props) => {

    /**
     * @description Update state of book to server
     * @param event Value from select input
     */
    const bookStateChangeHandler = (event) => {
        BooksAPI.update(props.bookInfo.id, event.target.value);
    }

    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${props.bookInfo.imageLinks.smallThumbnail}")` }}></div>
                    <div className="book-shelf-changer">
                        <select value={props.bookInfo.shelf || "none"} onChange={bookStateChangeHandler}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{props.bookInfo.title}</div>
                <div className="book-authors">{props.bookInfo.authors}</div>
            </div>
        </li>
    )
}

Book.prototype = {
    bookInfo: PropsTypes.object.isRequired
}

export default Book;
