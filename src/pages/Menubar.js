import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Menubar = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };
  return (
    <div>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
      </ul>

      {/* To show nested paths */}
      <Outlet />
      <button onClick={goHome} type="button">
        Back to Home
      </button>
    </div>
  );
};

export default Menubar;
