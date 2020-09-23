function startButton(){
    alert(sbgiuo)
    
}


var currentQuestionIndex = 0



function startQuiz() {
    var startScreenEl = document.getElementById("start-screen")

    // hide start screen once start button is clicked

    // start timer upon clicking "Start Quiz"

    getQuestion()
}

function getQuestion() {
    var currentQuestion = questions[currentQuestionIndex]
    var currentChoices = questions[currentQuestionIndex].choices

    var titleEl = document.getElementById("question-title")
    titleEl.textContent = currentQuestion.question

    var choicesEl = document.getElementById("choices")
    console.log(currentChoices)

   for(var i = 0; i < currentChoices.length; i++) {
        var choiceSelection = document.createElement("button")
        choiceSelection.setAttribute("class", "choice")
        choiceSelection.setAttribute("value", currentChoices[i])

        choiceSelection.textContent = i + 1 + ". " + currentChoices[i]

        choicesEl.appendChild(choiceSelection)
    }
}

// Here is where you will define an onclick to run the startQuiz function

object.onclick = function(){myScript};

// Questions//
var questions = [
    {
        question: "What is the best programming language?",
        choices: ["Java", "Go", "Ruby", "JavaScript"],
        answer: "JavaScript"
    },
    {
        question: "Is CSS fun",
        choices: ["Yes", "No" ],
        answer: "No"
    },
    {
        question: "Is CSS fun",
        choices: ["Yes", "No" ],
        answer: "No"
    },
    {
        question: "Is CSS fun",
        choices: ["Yes", "No" ],
        answer: "No"
    },
    {
        question: "Is CSS fun",
        choices: ["Yes", "No" ],
        answer: "No"
    },
      {
        question: "Is CSS fun",
        choices: ["Yes", "No" ],
        answer: "No"
    },
]



//When a key is pressed in the text area, update the timer using myFunction

//If seconds are equal or greater than 0, countdown until 1 minute has passed
//Else, clear the timer and alert user of how many words they type per minute

document.getElementById("timer").innerHTML="0:" + seconds; 
//When a key is pressed in the text area, update the timer using myFunction


    
//If seconds are equal or greater than 0, countdown until 1 minute has passed
//Else, clear the timer and alert user of how many words they type per minute


//save score intials//
//score keeper// 
let scoreKepper = 0;
    function addpoint(){
        if (document.getElementById("value").value != null) {
            document.getElementById("value").value = ++scoreKeeper;
        } else { return false}

    }
