const cssQuizData = [
  {
    question: "Q1. What does CSS stand for?",
    a: "Cascading Style Sheets",
    b: "Colorful Style Sheets",
    c: "Computer Style Sheets",
    d: "Creative Style Sheets",
    ans: "css-ans-1",
  },
  {
    question: "Q2. Which property is used to change the font color of an element?",
    a: "background-color",
    b: "color",
    c: "font-size",
    d: "text-align",
    ans: "css-ans-2",
  },
  {
    question: "Q3. Which property is used to add spacing between letters?",
    a: "margin",
    b: "padding",
    c: "line-height",
    d: "letter-spacing",
    ans: "css-ans-4",
  },
  {
    question: "Q4. Which property is used to make an element's text bold?",
    a: "font-style",
    b: "font-weight",
    c: "text-decoration",
    d: "text-transform",
    ans: "css-ans-2",
  },
  {
    question: "Q5. Which property is used to control the transparency of an element?",
    a: "opacity",
    b: "visibility",
    c: "display",
    d: "background-color",
    ans: "css-ans-1",
  },
  {
    question: "Q6. Which property is used to align text horizontally?",
    a: "text-align",
    b: "text-decoration",
    c: "text-transform",
    d: "text-indent",
    ans: "css-ans-1",
  },
  {
    question: "Q7. Which property is used to add a border to an element?",
    a: "border-color",
    b: "border-style",
    c: "border-width",
    d: "border",
    ans: "css-ans-4",
  },
  {
    question: "Q8. Which property is used to control the spacing between lines of text?",
    a: "line-height",
    b: "margin",
    c: "padding",
    d: "font-size",
    ans: "css-ans-1",
  },
  {
    question: "Q9. Which property is used to control the order of elements in a flex container?",
    a: "justify-content",
    b: "align-items",
    c: "order",
    d: "flex-direction",
    ans: "css-ans-3",
  },
  {
    question: "Q10. Which property is used to make an element's text italic?",
    a: "font-style",
    b: "font-weight",
    c: "text-decoration",
    d: "text-transform",
    ans: "css-ans-1",
  },
];

const cssQuestion = document.querySelector(".css-question");
const cssOption1 = document.querySelector("#css-option-1");
const cssOption2 = document.querySelector("#css-option-2");
const cssOption3 = document.querySelector("#css-option-3");
const cssOption4 = document.querySelector("#css-option-4");
const cssSubmit = document.querySelector("#css-submit");
const cssAnswers = document.querySelectorAll(".css-answer");
const cssShowScore = document.querySelector("#css-showScore");

let cssQuestionCount = 0;
let cssScore = 0;

const loadCssQuestion = () => {
  const cssQuestionList = cssQuizData[cssQuestionCount];

  cssQuestion.innerText = cssQuestionList.question;
  cssOption1.innerText = cssQuestionList.a;
  cssOption2.innerText = cssQuestionList.b;
  cssOption3.innerText = cssQuestionList.c;
  cssOption4.innerText = cssQuestionList.d;
};

loadCssQuestion();

function getCssAnswer() {
  let answer;
  cssAnswers.forEach((currAns) => {
    if (currAns.checked) {
      answer = currAns.id;
    }
  });
  return answer;
}

cssSubmit.addEventListener("click", () => {
  const checkedCssAnswer = getCssAnswer();

  if (checkedCssAnswer != null) {
    if (checkedCssAnswer === cssQuizData[cssQuestionCount].ans) {
      cssScore++;
    }

    cssQuestionCount++;

    if (cssQuestionCount < cssQuizData.length) {
      loadCssQuestion();
    } else {
      cssShowScore.innerHTML = `
        <div class="btn-container">
          <div class="fade-in-text-2"><h1 style="text-align:center"> You scored ${cssScore}/${cssQuizData.length}</h1></div>
        </div>
        <div class="btn-container">
          <button class="btn btn-primary" onClick="location.reload()"><span class="btn-main-text">Try again</span></button>
        </div>
      `;
      cssShowScore.classList.remove('scoreArea');
      cssSubmit.style.display = 'none';

      const cssQuestionArea = document.querySelector(".css-questions");
      cssQuestionArea.style.display = "none";
    }
  } else {
    console.log("Answer is mandatory");
  }
});