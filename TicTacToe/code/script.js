let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let restartBtn = document.querySelector("#reset-btn2");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let startBtn = document.querySelector("#start-btn");
let player1Input = document.querySelector("#player1");
let player2Input = document.querySelector("#player2");
let gameContainer = document.querySelector(".main");
let inputContainer = document.querySelector(".inputc");

let turnO = true; //playerX, playerO
let player1 = "";
let player2 = "";
let count = 0; //To Track Draw

const clickSound1 = new Audio("click1.wav");
const clickSound2 = new Audio("click2.wav");
const cong = new Audio("cong.wav");
const start = new Audio("start.wav");
const draw = new Audio("draw.wav");
const winsound = new Audio("win.wav");

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
const resetoreGame = () => {
  turnO = true;
  count = 0;
  enableBoxes();
  gameContainer.classList.remove("hide");
  msgContainer.classList.add("hide");
};
const resetGame = () => {
  turnO = true;
  count = 0;
  enableBoxes();
  msgContainer.classList.add("hide");
  gameContainer.classList.add("hide");
  inputContainer.classList.remove("hide");
  player1Input.value = "";
  player2Input.value = "";
};
const startGame = () => {
  player1 = player1Input.value;
  player2 = player2Input.value;

  if (player1 && player2) {
    start.play();
    inputContainer.classList.add("hide");
    gameContainer.classList.remove("hide");
  } else {
    alert("Please enter names for both players.");
  }
};
startBtn.addEventListener("click", startGame);

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      //playerO
      box.innerText = "O";
      clickSound1.play();
      box.style.color = "green";
      turnO = false;
    } else {
      //playerX
      box.innerText = "X";
      clickSound2.play();
      box.style.color = "red";
      turnO = true;
    }
    box.disabled = true;
    count++;

    let isWinner = checkWinner();

    if (count === 9 && !isWinner) {
      gameDraw();
    }
  });
});

const gameDraw = () => {
  msg.innerText = `Game was a Draw.`;
  winsound.play();
  draw.play();
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
    box.style.color = "";
  }
};

const showWinner = (winner) => {
  if (winner === "O") {
    msg.innerText = `!! Congratulations, Winner is ${player1} !!`;
  } else {
    msg.innerText = `!! Congratulations, Winner is ${player2} !!`;
  }
  winsound.play();
  cong.play();
  msgContainer.classList.remove("hide");
  gameContainer.classList.add("hide");
  disableBoxes();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
        return true;
      }
    }
  }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetoreGame);
restartBtn.addEventListener("click", resetoreGame);
