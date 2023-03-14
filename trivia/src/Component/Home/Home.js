import React from "react";
import "./Home.css";
import Nav from "../Nav/Nav";
import Form from "../Form/Form";

const Home = () => {
  return (
    <div>
      <Nav />
      <h1 className="ht">Trivia</h1>
      <Form />
    </div>
  );
};

export default Home;
