var readlineSync = require("readline-sync")

var score = 0

var userName = readlineSync.question("What's your name?")

console.log("Welcom " + userName + " Let's see how much you know Vansh?")

function play(question,answer)
{
  var userAnswer = readlineSync.question(question)
  
  if(userAnswer.toUpperCase()===answer.toUpperCase())
  {
    console.log("Right!")
    score=score+1
  }
  else
  {
    console.log("Wrong!")
  }  
  console.log("Current Score : ",score)
  console.log("---------------")
} 

var questions = [{
  question: "Where do Vansh live?",
  answer: "Jodhpur"
},{
  question: "How old is Vansh?",
  answer: "19"
},{
  question: "What is the birth month of Vansh?",
  answer: "September"
},{
  question: "From which school did Vansh completed his 10th and 12th?",
  answer: "DPS"
},{
  question: "Which degree  is  Vansh persuing?",
  answer: "BCA"
}]

for(var i=0;i<questions.length;i++)
{
  var currentQuestion = questions[i]
  play(currentQuestion.question,currentQuestion.answer)
}

console.log("YAY!!You scored : ",score)
