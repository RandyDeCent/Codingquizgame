function startQuiz(){
  // code to start the quiz
}
var questions = [
  {
    question: "What is the syntax for creating a function in JavaScript?" 
  },
  // add questions 
];
var currentQuestion = 0;
var timeLeft = questions.length * 10; // 10 seconds per question
var timerId;

function startQuiz() {
  document.getElementById("start-button").style.display = "none";
  showQuestion();
  timerId = setInterval(countdown, 1000);
}
function showQuestion() {
  var quiz = document.getElementById("quiz");
  quiz.innerHTML = "";

  var question = document.createElement("p");
  question.innerHTML =
