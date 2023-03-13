import React from "react";
// import { useraction } from "../../store/store";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const username = useSelector((state) => state.user.username);

  var navbar;
  var name;
  var login;
  var home;

  home = (
    <div className="navitem">
        <Link to="/home">home</Link>
      </div>
  )

  if (username == null) {
    name = "User";
    login = null;
  } else {
    name = username;
    login = (
      <div className="navitem">
        <Link to="/login">{name}</Link>
      </div>
    );
  }

  var score = useSelector((state) => state.user.maxScore);

  navbar = (
    <div className="navbar">
      {home}
      {login}
      <div className="navitem"> highest : {score}</div>
      <div className="navitem">
        <Link to="/history">History</Link>
      </div>
    </div>
  );

  return <>{navbar}</>;
};

export default Nav;
