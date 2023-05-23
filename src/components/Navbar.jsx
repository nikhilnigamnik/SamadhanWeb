import React from "react";
import logo from "../assets/logo.svg";

import Left from "../assets/Left.jpg";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="shadow-xl">
      <div className="flex px-10 p-4 justify-between items-center">
        <Link to="/">
        <div className="flex justify-center">
          <img src={logo} width={50} />
          <div className="pl-4">
            <h1 className="font-bold text-[1.8rem] text-brown-500 underline">
              Sama-Dhan
            </h1>
            <p>Only solution of your problem</p>
          </div>
        </div>
        </Link>
        <div>
          <h1 className="text-[1.8rem] text-brown-500 font-bold">
            Online Complaint Management System
          </h1>
            <p>If you are facing any problem at your village</p>
        </div>
        <img src={Left} />
      </div>
    </div>
  );
};

export default Navbar;
