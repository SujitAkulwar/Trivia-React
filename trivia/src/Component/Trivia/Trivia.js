import React from "react";
import { useSelector } from "react-redux";
import "./Trivia.css";
import { useState, useEffect } from "react";
import Nav from "../Nav/Nav";

const Trivia = () => {
  const Catagory = useSelector((state) => state.user.subject);
  const Difficulty = useSelector((state) => state.user.difficultylevel);

  const [option1, setoption1] = useState("null");
  const [option2, setoption2] = useState("null");
  const [option3, setoption3] = useState("null");
  const [option4, setoption4] = useState("null");
  const [question, setquestion] = useState("null");
  const [i, seti] = useState(1);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [result, setresult] = useState([]);

  // var xhr = new XMLHttpRequest();
  // xhr.open(
  //   "GET",
  //   "https://opentdb.com/api.php?amount=10" +
  //     "&category=" +
  //     Catagory +
  //     "&difficulty=" +
  //     Difficulty +
  //     "&type=multiple",
  //   true
  // );
  // xhr.onload = function () {
  //   if (this.status == 200) {
  //     Response(JSON.parse(this.responseText));
  //   }
  // };
  // xhr.send();
  // function Response(result) {
  //   setQuestion(result,i);
  // }

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()

  var reqstring =
    "https://opentdb.com/api.php?amount=10" +
    "&category=" +
    Catagory +
    "&difficulty=" +
    Difficulty +
    "&type=multiple";

  // console.log(reqstring);

  useEffect(() => {
    getQuestions();
    function getQuestions() {
      fetch(reqstring)
      
        .then((res) => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );
      console.log(res);
    }
  }, [reqstring]);

  //onClick={() => check(1)}
  return (
    <>
      <Nav />
      <main>
        <h1 id="head">
          {i}
          {question}
        </h1>
        <div className="options">
          <div className="option" id="A">
            1 {option1}
          </div>
          <div className="option" id="B">
            2 {option2}
          </div>
          <div className="option" id="C">
            3 {option3}
          </div>
          <div className="option" id="D">
            4 {option4}
          </div>
        </div>
        <div className="next">
          <button id="next-btn">Next</button>
        </div>
      </main>
    </>
  );
};

export default Trivia;
