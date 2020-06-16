// selection all the variable from HTML
var toHomePageBtn = document.querySelector("#go-back-btn");
var clearHighScoreBtn = document.querySelector("#clear-score-btn");
var bestPlayerContainer = document.querySelector(
  ".main-content-score-container"
);
//find highest score
var findBestPlayer = function () {
  var highestScore = 0;
  var highestScoreHolder = "";
  for (var i = 0, len = localStorage.length; i < len; i++) {
    var key = localStorage.key(i);
    var value = localStorage[key];
    var phraseSelector = key.substr(0, 10);
    if (phraseSelector === "quizTaker:" && parseInt(value) > highestScore) {
      highestScore = parseInt(value);
      highestScoreHolder = key.substr(10);
    }
  }
  var bestPlayer = { name: highestScoreHolder, score: highestScore };
  return bestPlayer;
};
//display the highest score
var displayHighestScore = function (bestPlayer) {
  bestPlayer = findBestPlayer();
  var displayLine = document.createElement("p");
  displayLine.className = "main-content-score";
  displayLine.id = "announceHighScore";
  displayLine.innerHTML =
    "<p class = 'main-content-score'>" +
    bestPlayer.score +
    " by " +
    bestPlayer.name +
    "</p>";
  bestPlayerContainer.appendChild(displayLine);
};
// clean all scores
var cleanAllScores = function () {
  for (var i = 0, len = localStorage.length; i < len; i++) {
    var key = localStorage.key(i);
    var phraseSelector = key.substr(0, 9);
    if (phraseSelector === "quizTaker") {
      localStorage.removeItem(key);
    }
  }
};
// display saying the score is cleaned
var cleanHighestScores = function () {
  document.getElementById("announceHighScore").innerHTML =
    "<p class = 'main-content-score'>Highest score record has been deleted.</p>";
};

// jump to next page
var nextPage = function (timegap) {
  event.preventDefault();
  setTimeout(function () {
    window.location.href = "index.html";
  }, timegap);
};
//----------------------------all functions run on the save score page-----------------------//
// init highest score display
displayHighestScore();
// add Event liseners to those buttons
// link back to homepage
toHomePageBtn.addEventListener("click", function () {
  nextPage(0.5 * 1000);
});
// clean highest score record
clearHighScoreBtn.addEventListener("click", function () {
  cleanAllScores();
  cleanHighestScores();
});
