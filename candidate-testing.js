const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName;
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question;
let correctAnswer;
let candidateAnswer;
let questions;
let correctAnswers;
let candidateAnswers;

question = "Who was the first American woman in space? ";;
correctAnswer = "Sally Ride";;
candidateAnswer = " ";
questions = ['Who was the first American woman in space? ', 'True or false: 5 kilometer == 5000 meters? ', '(5 + 3)/2 * 10 = ? ', "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", 'What is the minimum crew size for the ISS? '];
correctAnswers = ['Sally Ride', 'true', '40', 'Trajectory', '3'];
candidateAnswers = ["","","","",""];
candidateName = "";

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("What is your Name?: ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
    for (let i = 0; i < 5; i++) {
      candidateAnswers[i] = input.question(questions[i] + ": ");
    }
 //return candidateAnswer;
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly //
  let answer = 0; 
  console.log('Candidate Name: ' + candidateName);
  for (let i = 0; i < 5; i++){
    //console.log(typeof(candidateAnswers[i]));
    //console.log(typeof(correctAnswers[i]));
    if (candidateAnswers[i].toUpperCase() == correctAnswers[i].toUpperCase()){
        answer += 1;
    }
    console.log((i+1) + ")" +questions[i]);
    console.log("Your Answer: " + candidateAnswers[i]);
    console.log("Correct Answer: " + correctAnswers[i]);
    console.log("");
  }
  console.log(">>> Overall Grade: " + (answer*20) + "% (" + answer + " of 5 responses correct) <<<");
  if (answer < 5){
    console.log(">>> Status: FAILED <<<");
  }else if (answer == 5){
    console.log(">>> Status: PASED <<<");
  }
  let grade;
  grade = answer/5 * 100;
  console.log(grade);
  return grade;
}

function runProgram() {
  
  // TODO 1.1c: Ask for candidate's name //
  askForName();
  //console.log('Hi,' + candidateName + '!');
  askQuestion()
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};