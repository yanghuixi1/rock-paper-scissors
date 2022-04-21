let wins = 0;
let losses = 0;
let ties = 0;
let computerChoices = ["R", "P", "S"];

let playGame = function () {
  let userChoose = prompt("Please enter R, P or S to play");
  if (!userChoose) {
    return;
  }

  userChoose = userChoose.toUpperCase();
  let index = Math.floor(Math.random() * computerChoices.length);
  let computerChoose = computerChoices[index];
  alert(`Computer chose ${computerChoose}`);

  if (userChoose === computerChoose) {
    alert("It's a tie");
    ties++;
  } else if (
    (userChoose === "S" && computerChoose === "P") ||
    (userChoose === "R" && computerChoose === "S") ||
    (userChoose === "P" && computerChoose === "R")
  ) {
    alert("You won!");
    wins++;
  } else {
    (userChoose === "P" && computerChoose === "S") ||
      (userChoose === "S" && computerChoose === "P") ||
      (userChoose === "R" && computerChoose === "P");
    alert("Computer won!");
    losses++;
  }
  let print = alert(`wins = ${wins} \n losses = ${losses} \n ties = ${ties}`);

  //   let playAgain = function () {
  let isPlay = confirm("Do you want to play again?");
  if (isPlay) {
    playGame();
  }
};

playGame();
