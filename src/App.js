import React from "react";
import Home from "./pages/Home";
import Error from "./pages/PageNotFound";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        <Route path="/about" element={<About />} />{" "}
        <Route path="*" element={<Error />} />{" "}
      </Routes>{" "}
    </div>
  );
};

export default App;
