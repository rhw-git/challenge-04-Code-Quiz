// selection all the variable
var timer = document.querySelector(".timer");
var questionsContainer = document.querySelector(".questions-container");
var answersContainer = document.querySelector(".choices-container");
var validateAnswer = document.querySelector(".validate-container");

// define fuction to create QA object
var createQA = function (promptText) {
  // create undefined objects to contain Q and A elements
  var qA = {
    prompt: promptText,
    choicesArr: [],
    numChoice: 0,
    correctAnswer: 0,
  };
  // creaet function to append qA correctAnswer

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
// validate answer
var answerValidate = function (qA, event) {
  event.preventDefault();
  console.log(event.submitter.getAttribute("choice-id"));
  var answer = event.submitter.getAttribute("choice-id");
  debugger;
  if (parseInt(answer) === qA.correctAnswer) {
    // display correct
    var validateCorrect = document.createElement("p");
    validateCorrect.className = "choice-validation";
    validateCorrect.textContent = "Correct";
    console.dir(validateCorrect);
    validateAnswer.appendChild(validateCorrect);
  } else {
    // display incorrect
    var validateIncorrect = document.createElement("p");
    validateIncorrect.className = "choice-validation";
    validateIncorrect.textContent = "Wrong";
    console.dir(validateIncorrect);
    validateAnswer.appendChild(validateIncorrect);
  }
};

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
// display quiz
displayPrompt(quiz[0]);
displayChoice(quiz[0]);

answersContainer.addEventListener("submit", function () {
  answerValidate(quiz[0], event);
});
