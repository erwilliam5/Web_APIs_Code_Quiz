let questions = [{
    
    question: "Who invented the Javascript language?",
    answer1: "David Sedaris",
    answer2: "Alexander Hamilton",
    answer3: "Brendan Eich",
    answer4: "Inigo Montoya",
    correct: "Brendan Eich"
  },{
    
    question: "Javascript is an event-driven and functional language.",
    answer1: "True",
    answer2: "False",
    correct: "True"
  },{
    
    question: "",
    answer1: "To hit",
    answer2: "The art of fighting",
    answer3: "Fighter",
    answer4: "Empty hand",
    correct: "Empty hand"
  },{
    question: "Where French fries were invented?",
    answer1: "Belgium",
    answer2: "France",
    answer3: "Germany",
    answer4: "Mexico",
    correct: "Belgium"
  },{
    question: "In wich year Halley's Comet will appear again?",
    answer1: "2026",
    answer2: "2061",
    answer3: "2080",
    answer4: "3012",
    correct: "2061"
  }];
  
  // Timing code below
  let time = document.getElementById("timer");
  let yourScore = document.querySelector(".display-3");
  let submitButton = document.getElementById("buttonInitials");
  let inputLine = document.getElementById("inlineFormInput");
  
  let secondsLeft = 50;
  function setTime() {
      let timerInterval = setInterval(function() {
        secondsLeft--;
        console.log(secondsLeft);
          time.textContent = "Time: " + secondsLeft;
        
          if(secondsLeft === 0) {
            clearInterval(timerInterval);
            cardQuestions.setAttribute("style", "display: none");
            displayJumbo.setAttribute("style", "display: block");
            yourScore.textContent = "Your score is: " + secondsLeft;
            startButton.setAttribute("style", "display: none");
            submitButton.setAttribute("style", "display: inline");
            inputLine.setAttribute("style", "display: inline-block");
        
            } else if (runningQuestion === 5) {
              clearInterval(timerInterval);
              console.log(secondsLeft);
              cardQuestions.setAttribute("style", "display: none");
              displayJumbo.setAttribute("style", "display: block");
              yourScore.textContent = "Your score is: " + secondsLeft;
              startButton.setAttribute("style", "display: none");
              submitButton.setAttribute("style", "display: inline");
              inputLine.setAttribute("style", "display: inline-block");
  
            }
          
            
  
      }, 1000);
    }
    
  
  // Start Button
  let startButton = document.getElementById("startQuiz");
  let cardQuestions = document.getElementById("questionsCard");
  let displayJumbo = document.querySelector(".jumbotron");
  
  startButton.addEventListener("click", startGame);
  
  function startGame() {
      setTime();
      firstQuestion();
      console.log("game on");
      cardQuestions.setAttribute("style", "display: block");
      displayJumbo.setAttribute("style", "display: none");
  
  }
  
  
  //Questions
  let answer1 = document.getElementById("button1");
  let answer2 = document.getElementById("button2");
  let answer3 = document.getElementById("button3");
  let answer4 = document.getElementById("button4");
  let question = document.getElementById("questions");
  let correctAnswer = document.getElementById("correctIncorrect");
  let incorrectAnswer = document.getElementById("correctIncorrect");
  
  let runningQuestion = 0;
  
  // First Question Send questions to card
  function firstQuestion() {
    let quest = questions[runningQuestion];
    question.textContent = quest.question;
    answer1.textContent = quest.answer1;
    answer2.textContent = quest.answer2;
    answer3.textContent = quest.answer3;
    answer4.textContent = quest.answer4;
  }
  let quizBtn = document.querySelectorAll(".quizBtn");
  
  // Event listener for buttons and q/a
  for (let i = 0; i < quizBtn.length; i++) {
    quizBtn[i].addEventListener("click", function userAnswer(event) {
      event.stopPropagation();
      if (event.currentTarget.innerText === questions[runningQuestion].correct){
      correctAnswer.textContent = "Correct + 5 sec";
      correctAnswer.setAttribute("style", "color: yellow");
      secondsLeft = secondsLeft + 5;
      console.log("correct");
    } else {
      incorrectAnswer.textContent = "Incorrect - 5 sec";
      incorrectAnswer.setAttribute("style", "color: red");
      secondsLeft = secondsLeft - 5;
      console.log("Incorrect minus 5 seconds");
    }
    console.log(runningQuestion);
    runningQuestion++;
  
  
    if (runningQuestion < 5) {
      firstQuestion();
    }
  });
  }
  
  // High Scores 
  
  let highscores = JSON.parse(localStorage.getItem("highscores")) || [];
  
  submitButton.addEventListener("click", function(event){
    event.stopPropagation();
    console.log("click");
    
    let initials = inputLine.value;
    let finalScore = {initials, secondsLeft};
    console.log("Final Score: " + finalScore);
    console.log(initials + " your score is: " + secondsLeft); 
  
  
  
  
    // Send to localStorage
  
    highscores.push(finalScore);
    localStorage.setItem("highscores", JSON.stringify(highscores));
  
  });