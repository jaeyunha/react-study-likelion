import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Menubar from "./pages/Menubar";
import Movie from "./pages/Movie";

// Route 사용법
//<Route path="주소 규칙" element = {보여줄 컴포넌트}/></Route>

const App = () => {
  return (
    <Routes>
      // wrap with Menubar to set nested path
      <Route path="/" element={<Menubar />}>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}>
          <Route path=":movieId" element={<Movie />} />
        </Route>
        <Route path="*" element={<div>There is nothihng here</div>} />
      </Route>
    </Routes>
  );
};

export default App;
