import React, {useCallback, useEffect, useState} from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import BooksAPI from "../../services/BooksAPI";
import BookShelf from "../../components/BookShelf/BookShelf";
import {isEmpty} from "../../utils/Util";

const SearchBook = () => {
    const [books, setBooks] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
        const querySearch = setTimeout(() => {
            fetchBooks(query);
        }, 500)

        return () => clearTimeout(querySearch);
    }, [query])

    const fetchBooks = useCallback(async (query) => {
        try{
            if (isEmpty(query) === false) {
                const res = await BooksAPI.search({query});
                setBooks(res.books);
            }
        }catch (e) {
            setBooks([]);
        }
    }, [query])

    const searchInputHandler = (value) => {
        setQuery(value);
    }

    return (
        <>
            <SearchBar onChange={searchInputHandler}/>
            <div style={{marginTop: '66px'}} />
            <BookShelf title={"Result of search books"} books={books}/>
        </>
    )
}

export default SearchBook;
