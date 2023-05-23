import React from "react";
import { Link } from "react-router-dom";

const NavItems = () => {
  return (
    <div>
      <ul className="flex py-4   bg-blue-300 justify-evenly">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/joinus">
          <li>Join Us</li>
        </Link>

        <Link to="howtouse">
          <li>How to use</li>
        </Link>
        <Link to="about">
          <li>About Us</li>
        </Link>
        <Link to="contact">
          <li>Contact Us</li>
        </Link>
        <li>Help</li>
      </ul>
    </div>
  );
};

export default NavItems;
