import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Form.css";
import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";
import { useraction } from "../../store/store";

const Form = () => {
  const name = useSelector((state) => state.user.username);
  
  const dispatch = useDispatch();

  const [subject, setsubject] = useState("");
  const [difficult, setdifficult] = useState("");

  var showform;
  var redirecttotrivia;
  let navigate = useNavigate(); 
  var handle = () => {
    dispatch(useraction.setsubject(subject));
    dispatch(useraction.setdifficulty(difficult));
    let path = `./Trivia`; 
    if(subject!=="" && difficult!==""){navigate(path);}

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
          onChange={(e) => setsubject(e.target.value)}
        >
          <option value="">default</option>
          <option value="19">Mathematics</option>
        </select>
        Choose difficulty
        <select
          name="difficulty"
          id="selectdifficulty"
          onChange={(e) => setdifficult(e.target.value)}
        >
          <option value="">default</option>
          <option value="easy">easy</option>
          <option value="medium">medium</option>
          <option value="hard">hard</option>
        </select>
        <button onClick={() => handle()}>
          Start Trivia {redirecttotrivia}
        </button>
      </div>
    );
  }


  return <>{showform}</>;
};

export default Form;
