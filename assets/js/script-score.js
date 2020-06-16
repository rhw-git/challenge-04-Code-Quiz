// selection all the variable from HTML
var displayScoreContainer = document.querySelector(
  ".main-content-score-container"
);
var recordScoreForm = document.querySelector("#form-container");
// calculate score. score = (timeLift -10*(number of incorrect answer) )
var calculateScore = function () {
  var timeLeft = localStorage.getItem("record");
  var incorrectCount = localStorage.getItem("number of incorrect answer");
  var score = timeLeft - 10 * incorrectCount;
  localStorage.setItem("current user score", score);
  return score;
};
// display current users's score
var displayScore = function (score) {
  score = calculateScore();
  var displayLine = document.createElement("p");
  displayLine.className = "main-content-score";
  displayLine.innerHTML =
    "<p class = 'main-content-score'> Your final Score is " + score + " .</p>";
  displayScoreContainer.appendChild(displayLine);
};
// after submit form, store the user initial and user score
var storeUserScore = function () {
  var storeUserInitial = document.getElementById("participant-initial").value;
  var storeUserScore = localStorage.getItem("record");
  var storeKey = "quizTaker: " + storeUserInitial;
  localStorage.setItem(storeKey, storeUserScore);
};
// jump to next page
var nextPage = function (timegap) {
  event.preventDefault();
  setTimeout(function () {
    window.location.href = "report-high-score.html";
  }, timegap);
};
//----------------------------all functions run on the save score page-----------------------//
// init displayScore
displayScore();
// add Event lisener to the form
recordScoreForm.addEventListener("submit", function () {
  storeUserScore();
  nextPage(1 * 1000);
});
