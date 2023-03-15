import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Nav from "../Nav/Nav";
import { useraction } from "../../store/store.js";
import "./Result.css";
import { useState,useEffect } from "react";

const Result = () => {
  const currentscore = useSelector((state) => state.user.currentscore);
  const maxscore = useSelector((state) => state.user.maxScore);
  const dispatch = useDispatch();
  const [time, settime] = useState(0);

  const [p, setp] = useState(0);
  const [q, setq] = useState(0);
  const [r,setr] = useState(0);
  const [x, setx] = useState(120);
  const [y, sety] = useState(150);
  const [z, setz] = useState(200);

  function randomy() {
    if (p === 1) {
      setx(x + 10);
      if (x > 250) {
        setp(0);
      }
    } else {
      setx(x - 4);
      if (x < 100) {
        setp(1);
      }
    }
    if (q === 1) {
      sety(y + 15);
      if (y > 250) {
        setq(0);
      }
    } else {
      sety(y - 8);
      if (y < 100) {
        setq(1);
      }
    }
    if (r === 1) {
      setz(z + 19);
      if (z > 250) {
        setr(0);
      }
    } else {
      setz(z - 3);
      if (z < 100) {
        setr(1);
      }
    }
    console.log(x, y, z);
  }

  function Interval(){
    setTimeout(() => {
      randomy();
      settime(time + 1);
    }, 100);
  }

  useEffect(() => Interval(), [time]);

  if (currentscore > maxscore) {
    dispatch(useraction.setscore(currentscore));
  }
  return (
    <>
      <Nav />
      <div className="re">
        <h1
          className="r r1"
          style={{ backgroundImage: `linear-gradient(to right ,rgb(${x},${y},${z}), rgb(${y},${z},${x})` }}
        >
          congratulations !
        </h1>
        <h3 className="r r2">Your scored : {currentscore}</h3>
      </div>
    </>
  );
};

export default Result;
