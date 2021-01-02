import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <h1 className="header__logo">Job Portal</h1>
      </Link>
    </div>
  );
}

export default Header;
