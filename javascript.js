if (document.getElementById('quizPage')) {
var myQuestions = [
  {
    question: "What is the function of a scam?",
    answers: {
      a: 'To trick individuals into giving away money or personal information',
      b: 'To provide secure financial advice to users',
      c: 'To help people recover lost data from their devices'
    },
    correctAnswer: 'a'
  },
  {
    question: "What are features to look out for when checking for a scam?",
    answers: {
      a: 'Verified security badges and official contact numbers',
      b: 'Personalized greetings and friendly tone',
      c: 'Unusual sender addresses, urgent language, and suspicious links'
    },
    correctAnswer: 'c'
  },
  {
    question: "If you identify a scam what should you do?",
    answers: {
      a: "Enter your credit card information\n",
      b: "Report it to the appropriate authorities and block the sender",
      c: "Share the message with friends to warn them"

    },
    correctAnswer: "b"
  },
  {
    question: "What is the most common way people get scammed?",
    answers: {
      a: 'By accidentally downloading music from official websites',
      b: 'From using strong passwords on secure platforms',
      c: 'Through phishing emails or messages pretending to be legitimate'
    },
    correctAnswer: 'c'
  },      
];
  console.log(myQuestions)
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

  function showQuestions(questions, quizContainer){
    // we'll need a place to store the output and the answer choices
    var output = [];
    var answers;

    // for each question...
    for(var i=0; i<questions.length; i++){
      
      // first reset the list of answers
      answers = [];

      // for each available answer...
      for(letter in questions[i].answers){

        // ...add an html radio button
        answers.push(
          '<label>'
            + '<input type="radio" name="question'+i+'" value="'+letter+'">'
            + letter + ': '
            + questions[i].answers[letter]
          + '</label>'
        );
      }

      // add this question and its answers to the output
      output.push(
        '<div class="question">' + questions[i].question + '</div>'
        + '<div class="answers">' + answers.join('<br>') + '</div>'
      );
    }

    // finally combine our output list into one string of html and put it on the page
    quizContainer.innerHTML = output.join('');
  }


  function showResults(questions, quizContainer, resultsContainer){
    
    // gather answer containers from our quiz
    var answerContainers = quizContainer.querySelectorAll('.answers');
    
    // keep track of user's answers
    var userAnswer = '';
    var numCorrect = 0;
    
    // for each question...
    for(var i=0; i<questions.length; i++){

      // find selected answer
      userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
      
      // if answer is correct
      if(userAnswer===questions[i].correctAnswer){
        // add to the number of correct answers
        numCorrect++;
        
        // color the answers green
        answerContainers[i].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[i].style.color = 'red';
      }
    }

    // show number of correct answers out of total
    resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
  }

  // show questions right away
  showQuestions(questions, quizContainer);
  
  // on submit, show results
  submitButton.onclick = function(){
    showResults(questions, quizContainer, resultsContainer);
  }
}
function openMenu() {
    menuBar.style.display = 'initial';
    menuTest.style.display = 'initial';
    menuTitle.style.display = 'initial';
    menuBox.style.display = 'none';
    menuTitles.style.display = 'none';    
    menuBarss.style.display = 'initial';    
    
}

function reset() {
    menuBox.style.display = 'initial';
    menuBar.style.display = 'none';
    menuTitles.style.display = 'initial';
    menuTest.style.display = 'none';
    menuTitle.style.display = 'none';
    menuBarss.style.display = 'none';    
}

menuBox.onmouseover = openMenu;
menuBar.onmouseleave = reset;

}

function openMenu() {
    menuBar.style.display = 'initial';
    menuTest.style.display = 'initial';
    menuTitle.style.display = 'initial';
    menuBox.style.display = 'none';
    menuTitles.style.display = 'none';      
    menuBars.style.display = 'initial';
    
}

function reset() {
    menuBox.style.display = 'initial';
    menuBar.style.display = 'none';
    menuTitles.style.display = 'initial';
    menuTest.style.display = 'none';
    menuTitle.style.display = 'none';
    menuBars.style.display = 'none';    
}

menuBox.onmouseover = openMenu;
menuBar.onmouseleave = reset;
