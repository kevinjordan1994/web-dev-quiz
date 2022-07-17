`use strict`;

const questionContainer = document.querySelector(`.app-container`);

class View {
  constructor() {}

  generateQuestionHTML(question) {
    return `<div>
    <h1 class="question">${question.question}</h1>
    <ol class="answers">
      <li class="answer">${question.answers[0]}</li>
      <li class="answer">${question.answers[1]}</li>
      <li class="answer">${question.answers[2]}</li>
      <li class="answer">${question.answers[3]}</li>
    </ol>
  </div>`;
  }

  renderQuestion(question) {
    this.clearHTML();
    questionContainer.insertAdjacentHTML(
      `afterbegin`,
      this.generateQuestionHTML(question)
    );
  }

  clearHTML() {
    questionContainer.innerHTML = ``;
  }

  renderGameOverScreen(score) {
    this.clearHTML();
  }
}

export default new View();
