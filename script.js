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
var timeLeft = questions.length * 15; // 15 seconds per question
var timerId;
