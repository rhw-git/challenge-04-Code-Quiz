// selection all the variable from HTML
//----------------------------all variable for main HTML-----------------------//
var timer = document.querySelector(".timer");
var questionsContainer = document.querySelector(".questions-container");
var answersContainer = document.querySelector(".choices-container");
var validateAnswerContainer = document.querySelector(".validate-container");
// define fuction to create QA object
var createQA = function (promptText) {
  // create undefined objects to contain Q and A elements
  var qA = {
    prompt: promptText,
    choicesArr: [],
    numChoice: 0,
    correctAnswer: 0,
  };
  return qA;
};
// define function to add choices to the choicesArr of QA object
var addChoice = function (qA, choiceText, ifCorrect) {
  var choiceObj = { text: choiceText };
  qA.choicesArr.push(choiceObj);
  qA.numChoice++;
  if (ifCorrect) {
    qA.correctAnswer = qA.choicesArr.length - 1;
  }
};
// display prompt
var displayPrompt = function (qA) {
  var questionDis = document.createElement("h1");
  questionDis.className = "questions";
  questionDis.textContent = qA.prompt;
  questionsContainer.appendChild(questionDis);
};
// display choices
var displayChoice = function (qA) {
  for (i = 0; i < qA.numChoice; i++) {
    var choiceDis = document.createElement("button");
    choiceDis.className = "choices-btn";
    var choice = qA.choicesArr[i];
    choiceDis.textContent = choice.text;
    choiceDis.setAttribute("choice-id", i);
    answersContainer.appendChild(choiceDis);
  }
};
// start countdown timer
var countdownTimer = function (timeLeft) {
  // update every seconds
  setInterval(function () {
    if (qCount < quiz.length) {
      timer.innerHTML = "<p class = 'timer'> Time: " + timeLeft + "</p>";
      localStorage.setItem("record", timeLeft);
      timeLeft = timeLeft - 1;
      return;
    } else {
      return;
    }
  }, 1000);
  return;
};
// display quize
var displayQuiz = function (qA) {
  displayPrompt(qA);
  displayChoice(qA);
};
// validate answer
var answerValidate = function (qA, event) {
  event.preventDefault();
  var answer = event.submitter.getAttribute("choice-id");
  if (parseInt(answer) === qA.correctAnswer) {
    // display correct
    var validateCorrect = document.createElement("p");
    validateCorrect.className = "choice-validation";
    validateCorrect.textContent = "Correct";
    validateAnswerContainer.appendChild(validateCorrect);
  } else {
    // display incorrect
    var validateIncorrect = document.createElement("p");
    validateIncorrect.className = "choice-validation";
    validateIncorrect.textContent = "Wrong";
    validateAnswerContainer.appendChild(validateIncorrect);
    incorrectAnswerNum++;
    localStorage.setItem("number of incorrect answer", incorrectAnswerNum);
  }
};
// remote all children
var removeAllChildren = function () {
  var parents = document.getElementsByClassName("main-content");
  for (var i = 0; i < parents.length; i++) {
    while (parents[i].hasChildNodes()) {
      parents[i].removeChild(parents[i].firstChild);
    }
  }
};
// start next qA, starting from the second function
function nextQA(timeGap) {
  setTimeout(function () {
    if (qCount < quiz.length) {
      removeAllChildren();
      qCount++;
      displayQuiz(quiz[qCount]);
    }
  }, timeGap);
  return;
}
// jump to next page
var nextPage = function (timegap) {
  event.preventDefault();
  setTimeout(function () {
    if (qCount === quiz.length) {
      window.location.href = "save-score.html";
    }
  }, timegap);
};
//----------------------------all functions run on the main page-----------------------//
// create quiz
var quiz = [];
var question;
question = createQA("Commonly use data type do not include:");
addChoice(question, "A", true);
addChoice(question, "B", false);
quiz.push(question);
question = createQA("In javaScript, arry can be used to store:");
addChoice(question, "A", true);
addChoice(question, "B", false);
quiz.push(question);
question = createQA(
  "The condition in an if/else statement is enclosed with _____."
);
addChoice(question, "A. quotes", true);
addChoice(question, "B. curly brackets", false);
addChoice(question, "C. parenthesis", false);
addChoice(question, "D. squarebrackets", false);
quiz.push(question);
// initialize countDown
countdownTimer(100);
// create count for question number
var qCount = 0;
// create count for increate number
var incorrectAnswerNum = 0;
// initialize quize for the first time
displayQuiz(quiz[qCount]);
// create event lisener for quiz
answersContainer.addEventListener("submit", function () {
  answerValidate(quiz[qCount], event);
  nextQA(2 * 1000);
  nextPage(2 * 1000);
});
