var questions = [
  {
    question: "What is the syntax for creating a function in JavaScript?",
    choices: [
      "function myFunction()",
      "var myFunction()",
      "function:myFunction()",
      "myFunction: function()",
    ],
    answer: "function myFunction()",
  },
  {
    question: "What is the syntax for creating a variable in JavaScript?",
    choices: [
      "var myVariable",
      "new myVariable",
      "var: myVariable",
      "variable myVariable",
    ],
    answer: "var myVariable",
  },{
    question: "Where should you learn to code ?",
    choices: [
      "teacher(1)",
      "School(2)",
      "work(3)",
      "home(4)",
    ],
    answer: "function myFunction()",
  },{
    question: "do you love coding?",
    choices: [
      "Yes()",
      "Yes()",
      "Yes()",
      "Yes()",
    ],
    answer: "function myFunction()",
  },
  // add questions
];

var currentQuestion = 0;
var timeLeft = questions.length * 15; // 15 seconds per question
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
    timeLeft -= 15; // subtract from the time for an incorrect answer
  }

  currentQuestion++;
  if (currentQuestion == questions.length) {
    endQuiz();
  } else {
    showQuestion();
  }
}

function endQuiz() {
  clearInterval(timerId);
  var quiz = document.getElementById("quiz");
  quiz.innerHTML = "";

  var score = document.createElement("p");
  score.innerHTML = "Your score: " + timeLeft + " seconds remaining";
  quiz.appendChild(score);
}

function countdown() {
  timeLeft--;
  document.getElementById("timer").innerHTML =
    "Time remaining: " + timeLeft + " seconds";

  if (timeLeft == 0) {
    endQuiz();
  }
}

