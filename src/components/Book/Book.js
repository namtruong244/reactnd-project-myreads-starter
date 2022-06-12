import React, {useState} from "react";
import PropsTypes from "prop-types";


const Book = ({bookInfo, onChange}) => {
    const [shelf, setShelf] = useState(bookInfo.shelf || "none")

    /**
     * @description Update shelf state to parent component
     * @param event Value from select input
     */
    const bookShelfChangeHandler = (event) => {
        const shelfValue = event.target.value
        onChange(bookInfo, shelfValue)
        setShelf(shelfValue);
    }

    const bookCover = (bookInfo.imageLinks && bookInfo.imageLinks.smallThumbnail) || "";

    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${bookCover}")` }}></div>
                    <div className="book-shelf-changer">
                        <select value={shelf} onChange={bookShelfChangeHandler}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{bookInfo.title}</div>
                <div className="book-authors">{bookInfo.authors || ""}</div>
            </div>
        </li>
    )
}

Book.prototype = {
    bookInfo: PropsTypes.object.isRequired
}

export default Book;
