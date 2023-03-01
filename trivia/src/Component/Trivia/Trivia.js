import React from "react";
import { useSelector } from "react-redux";
import "./Trivia.css"

const Trivia = () => {
    
    const Catagory = useSelector((state)=>state.user.subject);
    const Difficulty = useSelector((state)=>state.user.difficultylevel);

  var head = document.getElementById("head");
  var options = document.getElementsByClassName("option");
  var nextBtn = document.getElementById("next-btn");
  var option1 = document.getElementById("A");
  var option2 = document.getElementById("B");
  var option3 = document.getElementById("C");
  var option4 = document.getElementById("D");
  var i = 0;
  var counter = 0;
  var score = 0;
  var correct = 0;

  var Quetions = localStorage.getItem("Quetions");
  

  var xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "https://opentdb.com/api.php?amount=10" +
      "&category=" +
      Catagory +
      "&difficulty=" +
      Difficulty +
      "&type=multiple",
    true
  );
  xhr.onload = function () {
    if (this.status == 200) {
      Response(JSON.parse(this.responseText));
    }
  };
  xhr.send();
  function Response(result) {
    setQuetion(result, i);
  }

  function setQuetion(result, i) {
    if (i < Quetions) {
      head.innerHTML = result.results[i].question;
      correct = Math.floor(Math.random() * 4);
      var k = 0;
      for (var j = 0; j < 4; j++) {
        if (j == correct) {
          options[j].innerHTML = result.results[i].correct_answer;
        } else {
          options[j].innerHTML = result.results[i].incorrect_answers[k];
          k++;
        }
      }
      nextBtn.addEventListener("click", function () {
        i++;
        counter = 0;
        check_opt();
        setQuetion(result, i);
      });
    } else {
      localStorage.setItem("score", score);
    }
  }
  function opt1() {
    if (correct == 0 && counter == 0) {
      option1.style.backgroundColor = "green";
      check_score();
    } else if (counter == 0) {
      option1.style.backgroundColor = "red";
      setTimeout(function () {
        options[correct].style.backgroundColor = "green";
      }, 100);
    }
    counter = 1;
  }
  function opt2() {
    if (correct == 1 && counter == 0) {
      option2.style.backgroundColor = "green";
      check_score();
    } else if (counter == 0) {
      option2.style.backgroundColor = "red";
      setTimeout(function () {
        options[correct].style.backgroundColor = "green";
      }, 100);
    }
    counter = 1;
  }
  function opt3() {
    if (correct == 2 && counter == 0) {
      option3.style.backgroundColor = "green";
      check_score();
    } else if (counter == 0) {
      option3.style.backgroundColor = "red";
      setTimeout(function () {
        options[correct].style.backgroundColor = "green";
      }, 100);
    }
    counter = 1;
  }
  function opt4() {
    if (correct == 3 && counter == 0) {
      option4.style.backgroundColor = "green";
      check_score();
    } else if (counter == 0) {
      option4.style.backgroundColor = "red";
      setTimeout(function () {
        options[correct].style.backgroundColor = "green";
      }, 100);
    }
    counter = 1;
  }
  function check_opt() {
    for (var p = 0; p < 4; p++) {
      options[p].style.background = "orange";
    }
  }

  return (
    <main>
      <h1 id="head"></h1>
      <div className="options">
        <div className="option" id="A" onClick={()=>opt1()}>
          1 {option1}
        </div>
        <div className="option" id="B" onClick={()=>opt2()}>
          2 {option2}
        </div>
        <div className="option" id="C" onClick={()=>opt3()}>
          3 {option3}
        </div>
        <div className="option" id="D" onClick={()=>opt4()}>
          4 {option4}
        </div>
      </div>
      <div className="next">
        <button id="next-btn">Next</button>
      </div>
    </main>
  );
};

export default Trivia;
