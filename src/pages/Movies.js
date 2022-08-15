import React from "react";
import { getMovies } from "../movie_data";
import { NavLink, Link, Outlet } from "react-router-dom";
const Movies = () => {
  const movies = getMovies();
  return (
    <div>
      <h1>Movie recomendation</h1>
      <div>
        {movies.map((movie) => (
          <NavLink
            to={"/movies/${movie.id}"}
            key={movie.id}
            style={({ isActive }) => {
              return {
                textDecoration: isActive ? "underline" : "",
                color: isActive ? "#FF9E1B" : "",
              };
            }}
          >
            <p>{movie.title}</p>
          </NavLink>
        ))}
      </div>
      <hr />
      <Outlet />
    </div>
  );
};

export default Movies;
