const exercises = [
  {
    text: "The capital of France is _____",
    answer: "Paris"
  },
  {
    text: "The tallest mountain in the world is _____",
    answer: "Mount Everest"
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
    <p class="card-text text-center"><h2 style="text-align: center;">${exercise.text.replace("_____", `<input type="text" class="form-control" style="width: ${inputWidth}; display: inline-block;" id="answer-input">`)}</h2></p>
    <div class="btn-container">
      <button type="submit" class="btn btn-primary" id="submit-button"><span class="btn-main-text">Submit</span></button>
    </div>
    <p class="mt-2 text-center" id="feedback-text"></p>
  </div>
</div>
  `;
}

function displayCurrentExercise() {
  const exercise = exercises[exerciseIndex];
  const exerciseContainer = document.querySelector("#exercise-container");
  exerciseContainer.innerHTML = generateExerciseHtml(exercise);
  const answerInput = document.querySelector("#answer-input");
  const submitButton = document.querySelector("#submit-button");
  const feedbackText = document.querySelector("#feedback-text");
  submitButton.addEventListener("click", function() {
    if (answerInput.value === exercise.answer) {
      feedbackText.innerHTML = correctMessage;
      feedbackText.classList.remove("text-danger");
      feedbackText.classList.add("text-success");
      exerciseIndex++;
      if (exerciseIndex < exercises.length) {
        displayCurrentExercise();
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

// Start by displaying the first exercise
displayCurrentExercise();