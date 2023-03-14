import React from "react";
import { useDispatch } from "react-redux";
import "./Form.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useraction } from "../../store/store";

const Form = () => {
  const dispatch = useDispatch();

  const [subject, setsubject] = useState("");
  const [difficult, setdifficult] = useState("");

  var showform;
  let navigate = useNavigate();
  var handle = () => {
    dispatch(useraction.setsubject(subject));
    dispatch(useraction.setdifficulty(difficult));
    let path = `./Trivia`;
    if (subject !== "" && difficult !== "") {
      navigate(path);
    }
  };

  showform = (
    <div className="form">
      <div className="fs">
        <div>Choose Subject</div>
        <select
          name="subject"
          id="selectsubject"
          className="select1"
          onChange={(e) => setsubject(e.target.value)}
        >
          <option value="">Default</option>
          <option value="19">Mathematics</option>
        </select>
      </div>

      <div className="fs">
        <div>Choose Difficulty</div>
        <select
          name="difficulty"
          id="selectdifficulty"
          className="select1"
          onChange={(e) => setdifficult(e.target.value)}
        >
          <option value="">Default</option>
          <option value="easy">easy</option>
          <option value="medium">medium</option>
          <option value="hard">hard</option>
        </select>
      </div>

      <button onClick={() => handle()} className="fb">
        Start Trivia
      </button>
    </div>
  );

  return <>{showform}</>;
};

export default Form;
