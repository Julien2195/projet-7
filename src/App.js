import React from "react";
import Home from "./components/Home";
import Error from "./components/PageNotFound";
import { Routes, Route } from "react-router-dom";
const App = () => {
    return ( <
        div >
        <
        Routes >
        <
        Route path = "/"
        element = { < Home / > }
        />{" "} <
        Route path = "*"
        element = { < Error / > }
        />{" "} < /
        Routes > { " " } <
        /div>
    );
};

export default App;