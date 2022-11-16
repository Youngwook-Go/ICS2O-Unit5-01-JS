// Copyright (c) 2022 Youngwook All rights reserved
//
// Created by: Youngwook
// Created on: OCT 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */

if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit5-01-JS/sw.js", {
    scope: "/ICS2O-Unit5-01-JS/",
  })
}
// make random number
const randomNumber = Math.floor(Math.random() * 6) + 1

function update() {
  //input
  const userInput = parseFloat(document.getElementById("user-input").value)

  //process amd output
  if (userInput == randomNumber) {
    document.getElementById("answer").innerHTML =
      "Your answer is : " +
      userInput +
      "<br>The random number was : " +
      randomNumber +
      "<br>You got it!"
  } else {
    document.getElementById("answer").innerHTML =
      "Your answer is : " +
      userInput +
      "<br>The random number was : " +
      randomNumber +
      "<br>Try again!"
  }
}
