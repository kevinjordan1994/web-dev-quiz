`use strict`;

const questionContainer = document.querySelector(`body`);

class View {
  constructor() {}

  generateQuestionHTML(question) {
    return `<div class="question">
    <h1>${question.question}</h1>
    <ol class="answers">
      <li>${question.answers[0]}</li>
      <li>${question.answers[1]}</li>
      <li>${question.answers[2]}</li>
      <li>${question.answers[3]}</li>
    </ol>
  </div>`;
  }

  renderQuestion(question) {
    questionContainer.insertAdjacentHTML(
      `afterbegin`,
      this.generateQuestionHTML(question)
    );
  }
}

export default new View();
