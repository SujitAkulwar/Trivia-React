import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Trivia.css";
import { useState } from "react";
import Nav from "../Nav/Nav";
import { useNavigate } from "react-router-dom";
import loading from "../../loading.mp4";
import { useraction } from "../../store/store";

const Trivia = () => {
  const dispatch = useDispatch();

  let navigate = useNavigate();
  const Catagory = useSelector((state) => state.user.subject);
  const Difficulty = useSelector((state) => state.user.difficultylevel);

  const [load, setload] = useState(0);
  const [option1, setoption1] = useState("");
  const [option2, setoption2] = useState("");
  const [option3, setoption3] = useState("");
  const [option4, setoption4] = useState("");
  const setoption = [setoption1, setoption2, setoption3, setoption4];
  const [question, setquestion] = useState("default");
  const [isLoaded, setIsLoaded] = useState(false);
  var [correct, setcorrect] = useState(0);
  var [itr, setitr] = useState(0);
  const [score, setscore] = useState(0);
  const [userchoose, setuserchoose] = useState(-1);
  const [clicks, setclicks] = useState(0);
  const color = ["orange", "green", "red"];
  const [opt0, setopt0] = useState(color[0]);
  const [opt1, setopt1] = useState(color[0]);
  const [opt2, setopt2] = useState(color[0]);
  const [opt3, setopt3] = useState(color[0]);
  const [apiresult, setapiresult] = useState();
  const [i, seti] = useState(0);

  if (load === 0) {
    seti(i + 1);
    setIsLoaded(true);
    var xhr = new XMLHttpRequest();
    // eslint-disable-next-line
    xhr.open(
      "GET",
      "https://opentdb.com/api.php?amount=12" +
        "&category=" +
        Catagory +
        "&difficulty=" +
        Difficulty +
        "&type=multiple",
      true
    );
    xhr.onload = function () {
      if (this.status === 200) {
        Response(JSON.parse(this.responseText));
      }
    };
    xhr.send();
    setload(1);
  }

  function Response(result) {
    setapiresult(result);
    setQuetion(result);
  }

  function setQuetion(result) {
    if (i > 9) {
      dispatch(useraction.setcurrentscore(score));
      let path = `/Result`;
      navigate(path);
    } else {
      let random = Math.floor(Math.random() * 4);
      setcorrect(random);
      setquestion(result.results[i].question);
      if (question !== undefined) {
        setitr(0);
        console.log(i);
        for (var j = 0; j < 4; j++) {
          if (j === correct) {
            setoption[j](result.results[i].correct_answer);
          } else {
            setoption[j](result.results[i].incorrect_answers[itr]);
            setitr(itr++);
          }
        }
      }
    }
    setitr(0);
    setIsLoaded(false);
  }

  const click = (e) => {
    setclicks(clicks + 1);
    setuserchoose(e);
  };

  const changecolor = (e) => {
    switch (userchoose) {
      case 0:
        setopt0(color[e]);
        break;
      case 1:
        setopt1(color[e]);
        break;
      case 2:
        setopt2(color[e]);
        break;
      case 3:
        setopt3(color[e]);
        break;
      default:
        break;
    }
  };

  const check = () => {
    if (clicks === 1) {
      if (correct === userchoose) {
        setscore(score + 10);
        changecolor(1);
      } else {
        changecolor(2);
      }
    }
    setuserchoose(-1);
  };

  if (userchoose !== -1) {
    check();
  }

  const next = () => {
    seti(i + 1);
    setopt0(color[0]);
    setopt1(color[0]);
    setopt2(color[0]);
    setopt3(color[0]);
    setclicks(0);
    setQuetion(apiresult);
  };

  var main;
  if (isLoaded === true) {
    main = (
      <main>
        <video width="500" height="500" autoPlay loop muted>
          <source src={loading} type="video/mp4" />
        </video>
      </main>
    );
  } else {
    main = (
      <>
        <h3 className="score">Score : {score}</h3>
        <main className="main">
          <h1 id="head">
            {i}
            .&nbsp;
            {question}
          </h1>
          <div className="options">
            <div
              className="option"
              id="A"
              onClick={() => click(0)}
              style={{ backgroundColor: opt0 }}
            >
              1 .&nbsp; {option1}
            </div>
            <div
              className="option"
              id="B"
              onClick={() => click(1)}
              style={{ backgroundColor: opt1 }}
            >
              2 .&nbsp; {option2}
            </div>
            <div
              className="option"
              id="C"
              onClick={() => click(2)}
              style={{ backgroundColor: opt2 }}
            >
              3 .&nbsp; {option3}
            </div>
            <div
              className="option"
              id="D"
              onClick={() => click(3)}
              style={{ backgroundColor: opt3 }}
            >
              4 .&nbsp; {option4}
            </div>
          </div>
          <div className="next" onClick={() => next()}>
            <button id="next-btn">Next</button>
          </div>
        </main>
      </>
    );
  }

  return (
    <div className="tbody">
      <Nav />
      {main}
    </div>
  );
};

export default Trivia;
