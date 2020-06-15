// selection button
var startQuizBtn = document.querySelector("#start-btn");
// function to start quiz
var startQuiz = function () {y
  window.location.replace (./main-page.html);
};

// add eventlistener to button
startQuizBtn.addEventListener("click", function () {
  startQuiz();
  return;
});
