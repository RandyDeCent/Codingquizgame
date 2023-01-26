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
  question.innerHTML = questions[currentQuestion].question;
  quiz.appendChild(question);

  var choices = questions[currentQuestion].choices;
  for (var i = 0; i < choices.length; i++) {
    var choice = document.createElement("button");
    choice.innerHTML = choices[i];
    choice.setAttribute("value", choices[i]);
    choice.onclick = checkAnswer;
    quiz.appendChild(choice);
  }
}

function checkAnswer() {
  if (this.value == questions[currentQuestion].answer) {
    alert("Correct!");
  } else {
    alert("Incorrect!");
    timeLeft -= 10; // subtract from the time for an incorrect answer
  }
