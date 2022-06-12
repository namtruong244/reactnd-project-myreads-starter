import React, {useCallback, useEffect, useState} from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import BooksAPI from "../../services/BooksAPI";
import BookShelf from "../../components/BookShelf/BookShelf";
import {isEmpty} from "../../utils/Util";
import PropsTypes from "prop-types";

const SearchBook = ({readingBooks, onChange}) => {
    const [books, setBooks] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
        const querySearch = setTimeout(() => {
            fetchBooks(query);
        }, 500);

        return () => clearTimeout(querySearch);
    }, [query])

    const fetchBooks = useCallback(async (query) => {
        try{
            if (isEmpty(query) === false) {
                const res = await BooksAPI.search({query});
                const data = res.books;
                readingBooks.forEach(readingBook => {
                    const index = data.findIndex(book => book.id === readingBook.id);
                    if (index !== -1){
                        data[index].shelf = readingBook.shelf;
                    }
                })
                setBooks(data);
            }else{
                setBooks([]);
            }
        }catch (e) {
            setBooks([]);
        }
    }, [query])

    const searchInputHandler = (value) => {
        setQuery(value);
    }

    const changeShelfOfBookHandler = (bookInfo, shelfValue) => {
        onChange(bookInfo, shelfValue);
    }

    return (
        <>
            <SearchBar onChange={searchInputHandler}/>
            <div style={{marginTop: '66px'}} />
            <BookShelf title={"Result of search books"} books={books} onChangeBookShelf={changeShelfOfBookHandler}/>
        </>
    )
}

SearchBook.prototype = {
    readingBooks: PropsTypes.array,
    onChange: PropsTypes.func
}

export default SearchBook;
