import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div
      style={{
        borderBottom: "2px solid black",
        paddingBottom: "10px",
        marginBottom: "12px",
        backgroundColor: "orange",   }}
    >
      <NavLink style={{ marginRight: "20px", color: "white", fontSize: "24px" }} to="/">
        Home
      </NavLink>
      <NavLink style={{ marginRight: "20px", color: "white", fontSize: "24px", }} to="/movies">
        Movies
      </NavLink>
    </div>
  );
}

export default NavBar;
