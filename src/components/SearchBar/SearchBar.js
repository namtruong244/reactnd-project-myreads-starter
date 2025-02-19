import React, {useState} from "react";
import {Link} from "react-router-dom";
import PropsTypes from "prop-types";

const SearchBar = (props) => {
    const [input, setInput] = useState("");

    const inputChangeHandler = (e) => {
        const value = e.target.value;
        setInput(value);
        props.onChange(value);
    }

    return (
        <div className="search-books-bar">
            <Link to={'/'}><button className="close-search">Close</button></Link>
            <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author" value={input} onChange={inputChangeHandler}/>

            </div>
        </div>
    )
}

SearchBar.prototype = {
    onChange: PropsTypes.func
}

export default SearchBar;
