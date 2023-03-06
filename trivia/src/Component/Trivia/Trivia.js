import React from "react";
import { useSelector } from "react-redux";
import "./Trivia.css";
import { useState } from "react";
import Nav from "../Nav/Nav";
import { useNavigate } from "react-router-dom";

const Trivia = () => {
  let navigate = useNavigate(); 
  const Catagory = useSelector((state) => state.user.subject);
  const Difficulty = useSelector((state) => state.user.difficultylevel);

  const [load, setload] = useState(0);
  const [option1, setoption1] = useState("");
  const [option2, setoption2] = useState("");
  const [option3, setoption3] = useState("");
  const [option4, setoption4] = useState("");
  const setoption = [setoption1, setoption2, setoption3, setoption4];
  const option = [option1, option2, option3, option4];
  const [question, setquestion] = useState("");
  // const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  // const [items, setItems] = useState([]);
  // const [result, setresult] = useState([]);
  var [correct, setcorrect] = useState(0);
  var [itr, setitr] = useState(0);
  const [score, setscore] = useState(0);
  var i = 0;

  if (load === 0) {
    setIsLoaded(true);
    var xhr = new XMLHttpRequest();
    // eslint-disable-next-line
    xhr.open('GET','https://opentdb.com/api.php?amount=10' +'&category=' + Catagory +'&difficulty=' + Difficulty +'&type=multiple',true);
    xhr.onload = function(){
      if(this.status === 200){
        Response(JSON.parse(this.responseText));
      }
    }
    xhr.send();
    setload(1);
  }
  
  function Response(result) {
    console.log(result);
    setQuetion(result);
  }
  
  function setQuetion(result) {
    
    for (i = 0; i < 10; i++) {
      setcorrect(Math.floor(Math.random() * 4));
      setquestion(result.results[i].question);
      console.log(result.results[i]);
      
      setitr(0);
      for(var j=0;j<4;j++){
        if(j === correct){
          setoption[j](result.results[i].correct_answer);
          // console.log(j);
        }else{
          setoption[j](result.results[i].incorrect_answers[itr]);
          console.log(itr);
          setitr(itr++);
        }
      }
      setIsLoaded(false);
      // check();
      setscore(0);
      console.log(score);
    } 
      
        // dispatch(useraction.setsubject(subject));
        // dispatch(useraction.setdifficulty(difficult));
    let path = `./result`; 
    navigate(path);
  }











  var main;
    if (isLoaded === true) {
      main =
        <main>
          <h1>
            loading .....
          </h1>
        </main>
    } else {
       main = <main>
        <h1 id="head">
          {i + 1}
          .&nbsp; 
          {question}
        </h1>
        <div className="options">
          <div className="option" id="A">
            1 .&nbsp; {option1}
          </div>
          <div className="option" id="B">
            2 .&nbsp; {option2}
          </div>
          <div className="option" id="C">
            3 .&nbsp; {option3}
          </div>
          <div className="option" id="D">
            4 .&nbsp; {option4}
          </div>
        </div>
        <div className="next">
          <button id="next-btn">Next</button>
        </div>
      </main>
    }
  
    
  return (
    <>
      <Nav />
      {main}
    </>
  );
};

export default Trivia;
