import React from "react";
import { Link} from "react-router-dom";


const Navbar = () => {

  return (
    <>
      <ul
        style={{
          display: "flex",
          justifyContent: "center",
          listStyleType: "none",
          gap: "10px",
          fontSize: "25px",
        }}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;