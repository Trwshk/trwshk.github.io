const jsQuizData = [
  {
    question: "Q1. What does DOM stand for?",
    a: "Document Object Model",
    b: "Data Object Model",
    c: "Document Order Model",
    d: "Dynamic Object Model",
    ans: "ans-1",
  },
  {
    question: "Q2. Which method is used to add a new element to the end of an array?",
    a: "push()",
    b: "join()",
    c: "concat()",
    d: "slice()",
    ans: "ans-1",
  },
  {
    question: "Q3. Which operator is used to concatenate strings in JavaScript?",
    a: "+",
    b: "-",
    c: "*",
    d: "/",
    ans: "ans-1",
  },
  {
    question: "Q4. What is the correct way to write an if statement in JavaScript?",
    a: "if (x === 5)",
    b: "if x = 5",
    c: "if x == 5",
    d: "if x =! 5",
    ans: "ans-1",
  },
  {
    question: "Q5. Which method is used to remove the last element from an array in JavaScript?",
    a: "pop()",
    b: "shift()",
    c: "splice()",
    d: "slice()",
    ans: "ans-1",
  },
  {
    question: "Q6. Which operator is used to assign a value to a variable in JavaScript?",
    a: "=",
    b: "==",
    c: "===",
    d: "!=",
    ans: "ans-1",
  },
  {
    question: "Q7. What is the result of the expression '3' + 2 in JavaScript?",
    a: "32",
    b: "5",
    c: "7",
    d: "undefined",
    ans: "ans-1",
  },
  {
    question: "Q8. Which keyword is used to declare a variable in JavaScript?",
    a: "var",
    b: "let",
    c: "const",
    d: "int",
    ans: "ans-1",
  },
  {
    question: "Q9. Which method is used to convert a string to uppercase in JavaScript?",
    a: "toUpperCase()",
    b: "toLowerCase()",
    c: "trim()",
    d: "concat()",
    ans: "ans-1",
  },
  {
    question: "Q10. Which function is used to output a message to the console in JavaScript?",
    a: "log()",
    b: "print()",
    c: "alert()",
    d: "message()",
    ans: "ans-1",
  },
];

const jsQuestion = document.querySelector(".js-question");
const jsOption1 = document.querySelector("#js-option-1");
const jsOption2 = document.querySelector("#js-option-2");
const jsOption3 = document.querySelector("#js-option-3");
const jsOption4 = document.querySelector("#js-option-4");
const jsSubmit = document.querySelector("#js-submit");
const jsAnswers = document.querySelectorAll(".js-answer");
const jsShowScore = document.querySelector("#js-showScore");

let jsQuestionCount = 0;
let jsScore = 0;

const loadJsQuestion = () => {
  const jsQuestionList = jsQuizData[jsQuestionCount];

  jsQuestion.innerText = jsQuestionList.question;
  jsOption1.innerText = jsQuestionList.a;
  jsOption2.innerText = jsQuestionList.b;
  jsOption3.innerText = jsQuestionList.c;
  jsOption4.innerText = jsQuestionList.d;
};

loadJsQuestion();

function getJsAnswer() {
  let answer;
  jsAnswers.forEach((currAns) => {
    if (currAns.checked) {
      answer = currAns.id;
    }
  });
  return answer;
}

const deselectAllJs = () => {
  jsAnswers.forEach((curAnsElem) => (curAnsElem.checked = false));
};

jsSubmit.addEventListener("click", () => {
  const checkedAnswer = getJsAnswer();

  if (checkedAnswer != null) {
    if (checkedAnswer === jsQuizData[jsQuestionCount].ans) {
      jsScore++;
    }

    deselectAllJs();
    jsQuestionCount++;

    if (jsQuestionCount < jsQuizData.length) {
      loadJsQuestion();
    } else {
      jsShowScore.innerHTML = `
        <div class="btn-container">
          <div class="fade-in-text-2">
            <h1 style="text-align: center">You scored ${jsScore}/${jsQuizData.length}</h1>
          </div>
        </div>
        <div class="btn-container">
          <button class="btn btn-primary" onClick="location.reload()">
            <span class="btn-main-text">Try again</span>
          </button>
        </div>
      `;
      jsShowScore.classList.remove("scoreArea");
      jsSubmit.style.display = "none";

      const jsQuestionArea = document.querySelector(".js-questions");
      jsQuestionArea.style.display = "none";
    }
  } else {
    console.log("Answer is mandatory");
  }
});