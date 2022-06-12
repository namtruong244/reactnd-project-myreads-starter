import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";
import './index.css'
import BooksApp from "./App";


ReactDOM.render(
    <Router>
        <BooksApp/>
    </Router>,
    document.getElementById("root")
);
