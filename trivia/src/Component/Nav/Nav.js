import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  var navbar;
  var score = useSelector((state) => state.user.maxScore);

  navbar = (
    <div className="navbar">
      <div className="navitem">
        <Link to="/home"  className="Link">Home</Link>
      </div>
      <div className="navitem"> Highest Score : {score}</div>
    </div>
  );

  return <>{navbar}</>;
};

export default Nav;
