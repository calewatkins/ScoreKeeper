const resetBtn = document.querySelector("#reset");

const p1 = {
  name: "Player 1",
  btn: document.querySelector("#p1Btn"),
  scoreSpan: document.querySelector("#p1Score"),
  score: parseInt(document.querySelector("#p1Score").innerText)
};

const p2 = {
  name: "Player 2",
  btn: document.querySelector("#p2Btn"),
  scoreSpan: document.querySelector("#p2Score"),
  score: parseInt(document.querySelector("#p2Score").innerText)
};

const increaseScore = (p) => {
  const gameLimit = parseInt(document.querySelector("#limit").value);

  p.score++;
  p.scoreSpan.innerText = p.score;

  if(p.score >= gameLimit) {
    setTimeout(() => {
      alert(`${p.name} wins the game!`);
    }, 200);

    p1.btn.disabled = true;
    p2.btn.disabled = true;
  }

};

p1.btn.addEventListener("click", () =>  increaseScore(p1) );

p2.btn.addEventListener("click", () => increaseScore(p2) );

resetBtn.addEventListener("click", () => {
  p1.score = 0;
  p1.scoreSpan.innerText = 0;
  p1.btn.disabled = false;
  
  p2.score = 0;
  p2.scoreSpan.innerText = 0;
  p2.btn.disabled = false;
});