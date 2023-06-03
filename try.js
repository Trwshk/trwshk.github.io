const js_exercises = [
  {
    text: 'Create a hyperlink:<br> &lt;a ______="https://example.com"&gt;Link&lt;/a&gt;',
    answer: 'href'
  },
  {
    text: 'Change the font size to 16 pixels:<br> element.______ = "16px";',
    answer: 'style.fontSize'
  },
  {
    text: 'Concatenate two strings:<br> var result = string1 + ______;',
    answer: 'string2'
  },
  {
    text: 'Display the current date:<br> ______.innerHTML = Date();',
    answer: 'document.getElementById("date")'
  },
  {
    text: 'Create a function named "myFunction":<br> function ______() { ... }',
    answer: 'myFunction'
  },
  {
    text: 'Add an event listener to a button:<br> button.______(\'click\', myFunction);',
    answer: 'addEventListener'
  },
  {
    text: 'Retrieve the value of an input field:<br> var value = input.______;',
    answer: 'value'
  },
  {
    text: 'Check if a variable is an array:<br> if (Array.______(myArray)) { ... }',
    answer: 'isArray'
  },
  {
    text: 'Sort an array in ascending order:<br> myArray.______();',
    answer: 'sort'
  },
  {
    text: 'Create a regular expression:<br> var regex = /______/;',
    answer: 'pattern'
  }
];

const html_exercises = [
  {
    text: 'Declare a variable named "count":<br> var ______;',
    answer: 'count'
  },
  {
    text: 'Display "Hello, World!" in the console:<br> console.______(\'Hello, World!\');',
    answer: 'log'
  },
  {
    text: 'Add 1 to a variable named "x":<br> ______++;',
    answer: 'x'
  },
  {
    text: 'Prompt the user for input:<br> ______(\'Enter your name:\');',
    answer: 'prompt'
  },
  {
    text: 'Create an array:<br> var myArray = [______];',
    answer: 'element1, element2, ...'
  },
  {
    text: 'Access the first element of an array named "myArray":<br> var firstElement = myArray[______];',
    answer: '0'
  },
  {
    text: 'Define a function named "myFunction":<br> function ______() { ... }',
    answer: 'myFunction'
  },
  {
    text: 'Check if a variable is equal to a specific value:<br> if (variable === ______) { ... }',
    answer: 'value'
  },
  {
    text: 'Create a for loop that iterates from 1 to 10:<br> for (var i = 1; i <= ______; i++) { ... }',
    answer: '10'
  },
  {
    text: 'Remove an item from an array at a specific index:<br> myArray.______(index, 1);',
    answer: 'splice'
  }
];

const css_exercises = [
  {
    text: 'Select an element with class "example":<br> .______ { property: value; }',
    answer: 'example'
  },
  {
    text: 'Change the font size to 16 pixels:<br> font-______: 16px;',
    answer: 'size'
  },
  {
    text: 'Center align text:<br> text-______: center;',
    answer: 'align'
  },
  {
    text: 'Change the background color to blue:<br> background-______: blue;',
    answer: 'color'
  },
  {
    text: 'Add padding of 10 pixels to all sides of an element:<br> padding: ______px;',
    answer: '10'
  },
  {
    text: 'Select an element with ID "header":<br> #______ { property: value; }',
    answer: 'header'
  },
  {
    text: 'Apply a border with a thickness of 1 pixel:<br> border-______: 1px ______ solid;',
    answer: 'width, black'
  },
  {
    text: 'Make text bold:<br> ______: bold;',
    answer: 'font-weight'
  },
  {
    text: 'Hide an element:<br> display: ______;',
    answer: 'none'
  },
  {
    text: 'Change the text color to red:<br> color: ____;',
    answer: 'red'
  }
];

const correctMessage = "Correct!";
const incorrectMessage = "Incorrect. Please try again.";

let exerciseIndex = 0;

function generateExerciseHtml(exercise) {
  const inputWidth = (exercise.answer.length * 15) + "px";
  return `
<div>
  <div>
    <p class="card-text text-center"><h2 style="text-align: center;">${exercise.text.replace("______", `<input type="text" class="form-control" style="width: ${inputWidth}; display: inline-block;" id="answer-input">`)}</h2></p>
    <div class="btn-container">
      <button type="submit" class="btn btn-primary" id="submit-button"><span class="btn-main-text">Submit</span></button>
    </div>
    <p class="mt-2 text-center" id="feedback-text"></p>
  </div>
</div>
  `;
}

function displayCurrentExercise(exercises, exerciseContainer) {
  const exercise = exercises[exerciseIndex];
  exerciseContainer.innerHTML = generateExerciseHtml(exercise);
  const answerInput = exerciseContainer.querySelector("#answer-input");
  const submitButton = exerciseContainer.querySelector("#submit-button");
  const feedbackText = exerciseContainer.querySelector("#feedback-text");
  submitButton.addEventListener("click", function() {
    if (answerInput.value === exercise.answer) {
      feedbackText.innerHTML = correctMessage;
      feedbackText.classList.remove("text-danger");
      feedbackText.classList.add("text-success");
      exerciseIndex++;
      if (exerciseIndex < exercises.length) {
        displayCurrentExercise(exercises, exerciseContainer);
      } else {
        exerciseContainer.innerHTML = "<p class='text-center'>Congratulations! You have completed all the exercises.</p>";
      }
    } else {
      feedbackText.innerHTML = incorrectMessage;
      feedbackText.classList.remove("text-success");
      feedbackText.classList.add("text-danger");
    }
  });
}

const jsExerciseContainer = document.querySelector("#js_exercises");
const htmlExerciseContainer = document.querySelector("#html_exercises");
const cssExerciseContainer = document.querySelector("#css_exercises");

displayCurrentExercise(js_exercises, jsExerciseContainer);
displayCurrentExercise(html_exercises, htmlExerciseContainer);
displayCurrentExercise(css_exercises, cssExerciseContainer);