import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Form.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useraction } from "../../store/store";

const Form = () => {
  const name = useSelector((state) => state.user.username);

    const dispatch = useDispatch();
    
  const [subject, setsubject] = useState("default");
  const [difficult, setdifficult] = useState("default");

    var showform;
    
  var handle = () => {
      console.log(subject,difficult);
      dispatch(useraction.setsubject(subject));
    //   dispatch(useraction.setdifficult(difficult));
    };
    
  if (name == null) {
    showform = <Link to="login">Loing first</Link>;
  } else {
    showform = (
      <div className="form">
        Choose Subject
        <select
          name="subject"
          id="selectsubject"
          onClick={(e) => setsubject(e.target.value)}
        >
          <option value="default">default</option>
          <option value="Science">Science</option>
        </select>
        Choose difficulty
        <select
          name="difficulty"
          id="selectdifficulty"
          onClick={(e) => setdifficult(e.target.value)}
        >
          <option value="default">default</option>
          <option value="easy">easy</option>
          <option value="medium">medium</option>
          <option value="hard">hard</option>
        </select>
        <button onClick={handle}>Start Test</button>
      </div>
    );
  }
  return <>{showform}</>;
};

export default Form;
