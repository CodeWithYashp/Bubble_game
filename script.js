let sc = document.getElementById("score");
let hit = document.getElementById("hit");
//let highscore = document.getElementById("highscore");
let scoreval = 0;
// let highscoreval = localStorage.getItem("score");
// highscoreval > 0
//   ? (highscore.innerText = highscoreval)
//   : (highscore.innerText = 0);
let rn;
let cnt = 60;
let gameIsOver = false;

function makeBubble() {
  let bubble = "";
  for (let i = 1; i <= 168; i++) {
    bubble += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
  }
  const a = document.getElementById("panelbottom");
  a.innerHTML = bubble;
}

function runTimer() {
  let a = document.getElementById("timer");
  let setTimer = setInterval(() => {
    if (cnt > 0) {
      cnt--;
      a.innerText = cnt;
    } else {
      clearInterval(setTimer);
    }
  }, 1000);
}

function updateHit() {
  rn = Math.floor(Math.random() * 10);
  hit.innerText = rn;
}

function increaseScore() {
  scoreval += 10;
  sc.innerText = scoreval;
}

function decreaseScore() {
  scoreval -= 5;
  sc.innerText = scoreval;
}

let panel = document.getElementById("panelbottom");

panel.addEventListener("click", (id) => {
  let clickedNum = Number(id.target.innerText);
  if (!gameIsOver) {
    if (clickedNum === rn) {
      increaseScore();
      makeBubble();
      updateHit();
    } else {
      decreaseScore();
      makeBubble();
      updateHit();
    }
  }
});

function endGame() {
  gameIsOver = true;
  panel.innerHTML = `<h2 id="panelbottom" class="gameover">Game Over! <br />Refresh the page to start a new game</h2>`;
  // if (highscoreval > scoreval) {
  //   localStorage.setItem("score", highscoreval);
  // }
  // getHighScore();
}

// function getHighScore() {
//   highscore.innerText = highscoreval;
// }

setTimeout(endGame, 60000);

runTimer();
makeBubble();
updateHit();
