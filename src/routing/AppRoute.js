import React from "react";
import {Route, Switch} from 'react-router-dom'
import ReadingBook from "../features/reading-book/ReadingBook";
import SearchBook from "../features/search-book/SearchBook";

const AppRoute = () => {
    return (
        <Switch>
            <Route path='/search' component={SearchBook} />
            <Route path='/' component={ReadingBook} />
        </Switch>
    )
}

export default AppRoute;
