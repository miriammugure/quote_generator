import React from "react";
import { FaHeart } from "react-icons/fa";
import "./Header.css";
function Header() {
  return (
    <div>
      <div className="container">
        <div className="logo">
          <h1>miriam mugure</h1>
          <FaHeart />
        </div>
        <div className="heading">
          <h1>quote generator</h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
