import React from "react";
import { Link } from "react-router-dom";
import { Nav, NavItem } from "reactstrap";

import "./Navbar.component.styles.css";

export const Navbar = () => {
  return (
    <div className="app__navbar" id="app_navbar">
      <Nav>
        <NavItem>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/products" className="nav-link">
            Products
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/about-us" className="nav-link">
            About us
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/expense-tracker" className="nav-link">
            Expense Tracker
          </Link>
        </NavItem>
      </Nav>
    </div>
  );
};
