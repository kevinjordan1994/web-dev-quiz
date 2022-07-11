`use strict`;

class Question {
  constructor(question, answers, correctAnswerIndex) {
    this.question = question;
    this.answers = answers;
    this.correctAnswerIndex = correctAnswerIndex;
  }
}

export const questions = [
  new Question(
    `What does Hoisting refer to in JavaScript?`,
    [
      `Returning a value from a function`,
      `Variables and function declarations are moved to the top of the scope chain before execution`,
      `Adding a value to an array`,
      `Mutating a variable`,
    ],
    1
  ),
  ////////////////////////////
  new Question(
    `What is Polymorphism?`,
    [
      `Redefining a variable after initialization`,
      `Refactoring code to be cleaner`,
      `Designing classes with behaviors that can be inherited to subclasses`,
      `Adding properties to an object`,
    ],
    2
  ),
  ////////////////////////////
  new Question(
    `Which HTML element is used for links?`,
    [`Anchor`, `Paragraph`, `Link`, `Button`],
    0
  ),
  ////////////////////////////
  new Question(
    `Which symbol represents the Universal Selector in CSS?`,
    [`!`, `#`, `~`, `*`],
    3
  ),
];
