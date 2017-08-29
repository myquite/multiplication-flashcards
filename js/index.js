"use strict";

document.addEventListener("DOMContentLoaded", function (e) {

  var button = document.querySelector(".button");
  var card = document.querySelector(".card");
  var multiplicand = document.querySelector(".num1");
  var multiplier = document.querySelector(".num2");
  var message = document.querySelector(".message");
  var answerInput = document.querySelector("#answer");
  var score = document.querySelector(".score");
  var right = document.querySelector(".right");
  var wrong = document.querySelector(".wrong");

  var correctAnswer = undefined;

  // randomly generate a number between 1 and 12
  function assignValues(element) {
    var num = Math.floor(Math.random() * 12) + 1;
    element.textContent = num;
    return num;
  }

  function multiply(x, y) {
    return x * y;
  }

  // assigned and multiply the multiplicand and the multiplier saving the product in correctAnswer
  function createNewFactors() {
    correctAnswer = multiply(assignValues(multiplicand), assignValues(multiplier));
  }

  // starts the game and creates the first card
  button.addEventListener("click", function (e) {
    e.preventDefault();
    score.style.display = "block";
    button.style.display = "none";
    card.style.display = "block";
    createNewFactors();
  });

  // creates a new card
  function nextCard() {
    message.style.display = "none";
    createNewFactors();
  }

  // shows the alert message
  function displayAlert(alertMessage, color, duration) {
    message.textContent = alertMessage;
    message.style.backgroundColor = color;
    message.style.display = "flex";
    setTimeout(nextCard, duration);
  }

  // Checks input to see if it's the right answer.
  answerInput.addEventListener("change", function (e) {
    e.preventDefault();

    var answer = parseInt(answerInput.value);
    if (answer === correctAnswer) {
      // displays correct
      displayAlert("Correct!", "rgba(83, 177, 80, 1)", 500);
      right.textContent++;
      answerInput.value = null;
    } else {
      // displays incorrect
      displayAlert("Incorrect! " + correctAnswer, "rgba(182, 47, 46, 1)", 1000);
      wrong.textContent++;
      answerInput.value = null;
    }
  });

  answerInput.focus();
});