import React, {useCallback, useEffect, useState} from "react";
import {Route, Switch} from 'react-router-dom'
import ReadingBook from "../features/reading-book/ReadingBook";
import SearchBook from "../features/search-book/SearchBook";
import BooksAPI from "../services/BooksAPI";

const AppRoute = () => {
    const [books, setBooks] = useState([]);

    /**
     * @description useEffect Hook for fetch data from api
     */
    useEffect(() => {
        fetchBooks();
    }, [])

    const fetchBooks = useCallback(async () => {
        try{
            const res = await BooksAPI.getAll();
            setBooks(res.books);
        }catch (e) {
            setBooks([]);
        }
    }, [])

    const changeShelfOfBookHandler = useCallback((bookInfo, shelfValue) => {
        BooksAPI.update(bookInfo.id, shelfValue);
        let newBooks = [];
        if (shelfValue === 'none') {
            newBooks = books.filter(bookInReading => bookInReading.id !== bookInfo.id);
        }else{
            newBooks = [...books];
            const index = books.findIndex(bookInReading => bookInReading.id === bookInfo.id);
            if (index !== -1) {
                newBooks[index].shelf = shelfValue;
            }else {
                const newBook = {...bookInfo, shelf: shelfValue};
                newBooks.push(newBook);
            }
        }
        setBooks(newBooks);
    }, [books])

    return (
        <Switch>
            <Route path='/search'>
                <SearchBook readingBooks={books} onChange={changeShelfOfBookHandler} />
            </Route>
            <Route path='/'>
                <ReadingBook books={books} onChange={changeShelfOfBookHandler}/>
            </Route>
        </Switch>
    )
}

export default AppRoute;
