rollDice = () => Math.floor(Math.random() * (6 - 1 + 1)) + 1;

let randomNumber1 = rollDice();
let randomNumber2 = rollDice();

let player1 = document.querySelector(".img1");
let player2 = document.querySelector(".img2");

player1.setAttribute("src", `./images/dice${randomNumber1}.png`);
player2.setAttribute("src", `./images/dice${randomNumber2}.png`);

let winner = document.querySelector("h1");
if (randomNumber1 > randomNumber2) winner.textContent = "🚩Player 1 win";
else if (randomNumber1 < randomNumber2) winner.textContent = "Player 2 win🚩";
else winner.textContent = "🚩Draw🚩";
