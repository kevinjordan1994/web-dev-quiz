`use strict`;
import { questions } from "./questions.js";
import view from "./view.js";

let score = 100;
let currentQuestion = 0;

view.renderQuestion(questions[currentQuestion]);
let quizElement = document.querySelector(`.app-container`);

quizElement.addEventListener(`click`, checkAnswer);

function checkAnswer(event) {
  if (!event.target.classList.contains(`answer`)) return;
  const userAnswer = event.target.textContent;
  if (
    userAnswer !==
    questions[currentQuestion].answers[
      questions[currentQuestion].correctAnswerIndex
    ]
  ) {
    reduceScore();
  }
  currentQuestion++;
  if (currentQuestion === questions.length) {
    view.renderGameOverScreen(score);
  } else {
    view.renderQuestion(questions[currentQuestion]);
  }
}

function reduceScore() {
  const reduction = 100 / questions.length;
  score = score - reduction;
}
