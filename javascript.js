if (document.getElementById('quizPage')) {
// quiz code...
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

    var output = [];
    var answers;

    for(var i=0; i<questions.length; i++){
      
      answers = [];

      for(letter in questions[i].answers){

        answers.push(
          '<label>'
            + '<input type="radio" name="question'+i+'" value="'+letter+'">'
            + letter + ': '
            + questions[i].answers[letter]
          + '</label>'
        );
      }

      output.push(
        '<div class="question">' + questions[i].question + '</div>'
        + '<div class="answers">' + answers.join('<br>') + '</div>'
      );
    }

    quizContainer.innerHTML = output.join('');
  }


  function showResults(questions, quizContainer, resultsContainer){
    
    var answerContainers = quizContainer.querySelectorAll('.answers');
    
    var userAnswer = '';
    var numCorrect = 0;
    
    for(var i=0; i<questions.length; i++){

      userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
      
      if(userAnswer===questions[i].correctAnswer){

        numCorrect++;
        
        answerContainers[i].style.color = 'lightgreen';
      }

      else{

        answerContainers[i].style.color = 'red';
      }
    }

    resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
  }

  showQuestions(questions, quizContainer);
  
  submitButton.onclick = function(){
    showResults(questions, quizContainer, resultsContainer);
  }
}
//quiz code ends...


//menu bar code for quiz page...
function openMenu() {
    menuTest.style.display = 'initial';
    menuTitle.style.display = 'initial';
    menuBox.style.display = 'none';
    menuTitles.style.display = 'none';    
    menuBarss.style.display = 'initial';    
    
}

function reset() {
    menuBox.style.display = 'initial';
    menuTitles.style.display = 'initial';
    menuTest.style.display = 'none';
    menuTitle.style.display = 'none';
    menuBarss.style.display = 'none';    
}

menuBox.onmouseover = openMenu;
menuBarss.onmouseleave = reset;

//menu bar code for quiz page end...
}

//menu bar code for main pages...
if (document.getElementById('email')) {
function openMenu() {
    menuTest.style.display = 'initial';
    menuTitle.style.display = 'initial';
    menuBox.style.display = 'none';
    menuTitles.style.display = 'none';    
    menuBars.style.display = 'initial';    
    
}

function reset() {
    menuBox.style.display = 'initial';
    menuTitles.style.display = 'initial';
    menuTest.style.display = 'none';
    menuTitle.style.display = 'none';
    menuBars.style.display = 'none';    
}

menuBox.onmouseover = openMenu;
menuBars.onmouseleave = reset;  
}
//menu bar code for main pages ends...

//menu bar code for front page...
if (document.getElementById('home')) {

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

}
//menu bar code for front page ends...
