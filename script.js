// Initialize quiz variables
let score = 0;
let totalQuestions = 3; // Total number of questions in the quiz

// Correct answers
const correctAnswers = {
  q1: "Gryffindor",  // Harry's house
  q2: "Crookshanks",  // Hermione's cat
  q3: "Expelliarmus"  // Disarming spell
};

// Function to check the answers
function checkAnswers() {
  // Loop through each question
  for (let i = 1; i <= totalQuestions; i++) {
    let selectedAnswer = document.querySelector(`input[name="q${i}"]:checked`);
    
    if (selectedAnswer) {
      if (selectedAnswer.value === correctAnswers[`q${i}`]) {
        score++;  // Increment score if answer is correct
      }
    } else {
      alert(`Please answer question ${i}`);  // Prompt user to answer any unfilled questions
      return;
    }
  }

  // Display the result
  showResult();
}

// Function to display the result
function showResult() {
  const resultContainer = document.getElementById("result");
  resultContainer.innerHTML = `You scored ${score} out of ${totalQuestions}`;
  resultContainer.style.display = "block";  // Show the result div
  document.querySelector("button").disabled = true;  // Disable the submit button after submission
}
