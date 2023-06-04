const htmlQuizData = [
  {
    question: "Q1. What does DOM stand for?",
    a: "Document Object Model",
    b: "Data Object Model",
    c: "Document Order Model",
    d: "Dynamic Object Model",
    ans: "html-ans-1",
  },
  {
    question: "Q2. Which method is used to add a new element to the end of an array?",
    a: "push()",
    b: "join()",
    c: "concat()",
    d: "slice()",
    ans: "html-ans-1",
  },
  {
    question: "Q3. Which operator is used to concatenate strings in JavaScript?",
    a: "+",
    b: "-",
    c: "*",
    d: "/",
    ans: "html-ans-1",
  },
  {
    question: "Q4. What is the correct way to write an if statement in JavaScript?",
    a: "if (x === 5)",
    b: "if x = 5",
    c: "if x == 5",
    d: "if x =! 5",
    ans: "html-ans-1",
  },
  {
    question: "Q5. Which method is used to remove the last element from an array in JavaScript?",
    a: "pop()",
    b: "shift()",
    c: "splice()",
    d: "slice()",
    ans: "html-ans-1",
  },
  {
    question: "Q6. Which operator is used to assign a value to a variable in JavaScript?",
    a: "=",
    b: "==",
    c: "===",
    d: "!=",
    ans: "html-ans-1",
  },
  {
    question: "Q7. What is the result of the expression '3' + 2 in JavaScript?",
    a: "32",
    b: "5",
    c: "7",
    d: "undefined",
    ans: "html-ans-1",
  },
  {
    question: "Q8. Which keyword is used to declare a variable in JavaScript?",
    a: "var",
    b: "let",
    c: "const",
    d: "int",
    ans: "html-ans-1",
  },
  {
    question: "Q9. Which method is used to convert a string to uppercase in JavaScript?",
    a: "toUpperCase()",
    b: "toLowerCase()",
    c: "trim()",
    d: "concat()",
    ans: "html-ans-1",
  },
  {
    question: "Q10. Which function is used to output a message to the console in JavaScript?",
    a: "log()",
    b: "print()",
    c: "alert()",
    d: "message()",
    ans: "html-ans-1",
  },
];

const htmlQuestion = document.querySelector(".html-question");
const htmlOption1 = document.querySelector("#html-option-1");
const htmlOption2 = document.querySelector("#html-option-2");
const htmlOption3 = document.querySelector("#html-option-3");
const htmlOption4 = document.querySelector("#html-option-4");
const htmlSubmit = document.querySelector("#html-submit");
const htmlAnswers = document.querySelectorAll(".html-answer");
const htmlShowScore = document.querySelector("#html-showScore");

let htmlQuestionCount = 0;
let htmlScore = 0;

const loadhtmlQuestion = () => {
  const htmlQuestionList = htmlQuizData[htmlQuestionCount];

  htmlQuestion.innerText = htmlQuestionList.question;
  htmlOption1.innerText = htmlQuestionList.a;
  htmlOption2.innerText = htmlQuestionList.b;
  htmlOption3.innerText = htmlQuestionList.c;
  htmlOption4.innerText = htmlQuestionList.d;
};

loadhtmlQuestion();

function gethtmlAnswer() {
  let answer = null;
  htmlAnswers.forEach((currAns) => {
    if (currAns.checked) {
      answer = currAns.id;
    }
  });
  return answer;
}

const deselectAllhtml = () => {
  htmlAnswers.forEach((curAnsElem) => (curAnsElem.checked = false));
};

htmlSubmit.addEventListener("click", () => {
  const checkedhtmlAnswer = gethtmlAnswer();
  console.log("click")

  if (checkedhtmlAnswer != null) {
    if (checkedhtmlAnswer === htmlQuizData[htmlQuestionCount].ans) {
      htmlScore++;
    }

    deselectAllhtml();
    htmlQuestionCount++;

    if (htmlQuestionCount < htmlQuizData.length) {
      loadhtmlQuestion();
    } else {
      htmlShowScore.innerHTML = `
        <div class="btn-container">
          <div class="fade-in-text-2">
            <h1 style="text-align: center">You scored ${htmlScore}/${htmlQuizData.length}</h1>
          </div>
        </div>
        <div class="btn-container">
          <button class="btn btn-primary" onClick="location.reload()">
            <span class="btn-main-text">Try again</span>
          </button>
        </div>
      `;
      htmlShowScore.classList.remove("scoreArea");
      htmlSubmit.style.display = "none";

      const htmlQuestionArea = document.querySelector(".html-questions");
      htmlQuestionArea.style.display = "none";
    }
  } else {
    console.log("Answer is mandatory");
  }
});