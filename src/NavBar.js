import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = ({items}) => {
  return (
    <nav className="NavBar">
      <NavLink exact to="/">
        Home
      </NavLink>
      {items.map(item => (
        <NavLink exact to={`/${item}`} key={item}>
        {item}
        </NavLink>
      )
      )}
    </nav>
  );
}

export default NavBar;
