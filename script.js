easy = document.getElementById("easy");
medium = document.getElementById("medium");
hard = document.getElementById("hard");
let rand;
let hscore = { easy: 0, medium: 0, hard: 0 };
localStorage.setItem("Highscore",JSON.stringify(hscore));
update();
let score=document.getElementById('score');
document.getElementById("easy").addEventListener("click", function () {
  document.getElementById("head").innerText = "Guess A Number between 1 to 50";
  level = 1;
  hscoreee.innerText=`Highscore:${hscore.easy}`
});
document.getElementById("medium").addEventListener("click", function () {
  document.getElementById("head").innerText = "Guess A Number between 1 to 100";
  level = 2;
  hscoreee.innerText=`Highscore:${hscore.medium}`
});
document.getElementById("hard").addEventListener("click", function () {
  document.getElementById("head").innerText = "Guess A Number between 1 to 500";
  level = 3;
  hscoreee.innerText=`Highscore:${hscore.hard}`
});
function update(){
    hscore.easy=JSON.parse(localStorage.getItem('Highscore')).easy;
    hscore.medium=JSON.parse(localStorage.getItem('Highscore')).medium;
    hscore.hard=JSON.parse(localStorage.getItem('Highscore')).hard;
}
easy.addEventListener("click", start);
medium.addEventListener("click", start);
hard.addEventListener("click", start);

function start() {
  console.log("hello");
  document.getElementById("level").style.display = "none";
  document.getElementById("screen").style.display = "block";
  if (level == 1) rand = randomnumber(1, 50);
  else if (level == 2) rand = randomnumber(1, 100);
  else if (level == 3) rand = randomnumber(1, 500);
  document.getElementById("hscoreee").style.display = "block";
}

function randomnumber(min, max) {
  return Math.floor(Math.random() * (max - min) + 1);
}
hint = document.getElementById("hint");
sub = document.getElementById("sub");
let level;
let c = 0;

sub.addEventListener("click", function check() {
    c = c + 1;
    score.innerText = `Number of guesses:${c}`;
  console.log(rand);
  guess = document.getElementById("guess").value;
  document.getElementById("guess").value = "";
  if (guess < rand) hint.innerHTML = `<p>HINT:Try a larger number</p>`;
  else if (guess > rand) hint.innerHTML = `<p>HINT:Try a smaller number</p>`;
  else if (guess == rand) {
    update();
    hint.innerHTML = `<p>Congratulations!You guessed it</p>`;
    if (level == 1) {
      hscore.easy = c;
      localStorage.setItem("Highscore", JSON.stringify(hscore));
    } else if (level == 2) {
      hscore.medium = c;
      localStorage.setItem("Highscore", JSON.stringify(hscore));
    } else if (level == 3) {
      hscore.hard = c;
      localStorage.setItem("Highscore", JSON.stringify(hscore));
    }
  }

  console.log(guess);
});
