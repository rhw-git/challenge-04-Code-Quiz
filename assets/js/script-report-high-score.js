// selection all the variable from HTML
var toHomePageBtn = document.querySelector("#go-back-btn");
var clearHighScoreBtn = document.querySelector("clear-score-btn");

// jump to next page
var nextPage = function (timegap) {
  event.preventDefault();
  setTimeout(function () {
    window.location.href = "index.html";
  }, timegap);
};
//----------------------------all functions run on the save score page-----------------------//
// init displayScore

// add Event lisener to the form
toHomePageBtn.addEventListener("click", function () {
  debugger;
  nextPage(1 * 1000);
});
