const htmlQuizData = [
  {
    question: "Q1. What does HTML stand for?",
    a: "Hyper Text Markup Language",
    b: "Hyperlinks and Text Markup Language",
    c: "Home Tool Markup Language",
    d: "Hyperlink Text Marker Language",
    ans: "ans-1",
  },
  {
    question: "Q2. Which tag is used to define an unordered list?",
    a: "<ul>",
    b: "<ol>",
    c: "<li>",
    d: "<dl>",
    ans: "ans-1",
  },
  {
    question: "Q3. Which tag is used to define a table row?",
    a: "<td>",
    b: "<tr>",
    c: "<th>",
    d: "<table>",
    ans: "ans-2",
  },
  {
    question: "Q4. Which tag is used to create a hyperlink?",
    a: "<a>",
    b: "<h1>",
    c: "<p>",
    d: "<div>",
    ans: "ans-1",
  },
  {
    question: "Q5. Which attribute is used to specify an image source in HTML?",
    a: "src",
    b: "href",
    c: "img",
    d: "link",
    ans: "ans-1",
  },
  {
    question: "Q6. Which tag is used to define a heading?",
    a: "<h1>",
    b: "<div>",
    c: "<p>",
    d: "<span>",
    ans: "ans-1",
  },
  {
    question: "Q7. Which tag is used to create a line break in HTML?",
    a: "<br>",
    b: "<hr>",
    c: "<lb>",
    d: "<ln>",
    ans: "ans-1",
  },
  {
    question: "Q8. Which tag is used to define a paragraph?",
    a: "<p>",
    b: "<span>",
    c: "<div>",
    d: "<h1>",
    ans: "ans-1",
  },
  {
    question: "Q9. Which tag is used to define a hyperlink?",
    a: "<a>",
    b: "<link>",
    c: "<h1>",
    d: "<p>",
    ans: "ans-1",
  },
  {
    question: "Q10. Which tag is used to define an input field in HTML?",
    a: "<input>",
    b: "<form>",
    c: "<select>",
    d: "<button>",
    ans: "ans-1",
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

const loadHtmlQuestion = () => {
  const htmlQuestionList = htmlQuizData[htmlQuestionCount];

  htmlQuestion.innerText = htmlQuestionList.question;
  htmlOption1.innerText = htmlQuestionList.a;
  htmlOption2.innerText = htmlQuestionList.b;
  htmlOption3.innerText = htmlQuestionList.c;
  htmlOption4.innerText = htmlQuestionList.d;
};

loadHtmlQuestion();

function getHtmlAnswer() {
  let answer;
  htmlAnswers.forEach((currAns) => {
    if (currAns.checked) {
      answer = currAns.id;
    }
  });
  return answer;
}

htmlSubmit.addEventListener("click", () => {
  const checkedHtmlAnswer = getHtmlAnswer();

  if (checkedHtmlAnswer != null) {
    if (checkedHtmlAnswer === htmlQuizData[htmlQuestionCount].ans) {
      htmlScore++;
    }

    htmlQuestionCount++;

    if (htmlQuestionCount < htmlQuizData.length) {
      loadHtmlQuestion();
    } else {
      htmlShowScore.innerHTML = `
        <div class="btn-container">
          <div class="fade-in-text-2"><h1 style="text-align:center"> You scored ${htmlScore}/${htmlQuizData.length}</h1></div>
        </div>
        <div class="btn-container">
          <button class="btn btn-primary" onClick="location.reload()"><span class="btn-main-text">Try again</span></button>
        </div>
      `;
      htmlShowScore.classList.remove('scoreArea');
      htmlSubmit.style.display = 'none';

      const htmlQuestionArea = document.querySelector(".html-questions");
      htmlQuestionArea.style.display = "none";
    }
  } else {
    console.log("Answer is mandatory");
  }
});