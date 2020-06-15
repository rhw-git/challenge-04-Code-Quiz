// selection all the variable
var timer = document.querySelector(".timer");
var questionsContainer = document.querySelector(".questions-container");
var answersContainer = document.querySelector(".choices-container");
var validateAnswer = document.querySelector(".choice-validation");

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
    qA.correctAnswer = qA.choicesArr.length;
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
// display quiz
displayPrompt(quiz[0]);
displayChoice(quiz[0]);
// validate answer
var answerValidate = function () {
  debugger;
  alert("start validation");
};

// console.log(setQA(qAObj));
// create array of qAObj
var createQAObjArr = function () {
  var currentQAObj;
  // create undefined array placeholde for all the created objs
  var qAObjArr = [];
  for (var i = 0; i < 10; i++) {
    currentQAObj = setQA();
    qAObjArr.push(currentQAObj);
  }
  return qAObjArr;
};

answersContainer.addEventListener("submit", function () {
  answerValidate();
});
