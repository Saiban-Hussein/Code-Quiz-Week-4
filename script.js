var questions = [
  {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
  },
  {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
  },
  {
      title: "Arrays in Javascript can be used to store ____.",
      choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
      answer: "all of the above"
  },
  {
      title: "String values must be enclosed within ____ when being assigned to variables.",
      choices: ["commas", "curly brackets", "quotes", "parenthesis"],
      answer: "quotes"
  },
  {
      title: "A very useful tool for used during development and debugging for printing content to the debugger is:",
      choices: ["Javascript", "terminal / bash", "for loops", "console log"],
      answer: "console log"
  },

];

// Selects element by class
var timeEl=document.querySelector("#currentTime");
var button=document.querySelector("#startTime");
var choicesUl=document.querySelector("#choicesUl");
var h1=document.querySelector("#questionsDiv > h1");
var p=document.querySelector("#questionsDiv > p");
var secondsLeft=3;
var holdInterval=0;

function startTimer() {
    timeEl.textContent = "Time: " + secondsLeft;
    if (secondsLeft <= 0) {
        clearInterval(holdInterval);
        // allDone();
        timeEl.textContent = "Time's up!";
    }
    secondsLeft--;   
}
function startQuize () {
    // We are checking zero because its originally set to zero
    if (holdInterval === 0) {
        holdInterval = setInterval(startTimer, 1000);
    }
h1.setAttribute("class","hide");
p.setAttribute("class","hide");
button.setAttribute("class","hide");
// render(questionIndex);
}


button.addEventListener("click",startQuize);





