let obj = { "🤚": "paper", "✊": "rock", "✌️": "scissor" };
let arr = ["🤚", "✊", "✌️"];
let autoplay = document.querySelector(".autoplay");
let stop = document.querySelector(".stop");
let win = document.querySelector(".win");
let lose = document.querySelector(".lose");
let tie = document.querySelector(".tie");

//Check Winner
function check(a, b) {
  if (a == b) return "same";
  if (a == "scissor" && b == "paper") return "a";
  if (a == "rock" && b == "scissor") return "a";
  if (a == "paper" && b == "rock") return "a";
  return "b";
}

//Display the game
let dis = document.querySelector(".display");
let you = document.querySelector(".u");
let they = document.querySelector(".v");
function display(a, em1, em2) {
  dis.innerHTML = a;
  you.innerHTML = em1;
  they.innerHTML = em2;
}

//Variable to store count of events
let countwin = 0;
let countlose = 0;
let counttie = 0;
//For AutoPlay Game
function play() {
  let rand = Math.floor(Math.random() * 3);
  let rand1 = Math.floor(Math.random() * 3);
  let emoji1 = arr[rand];
  let emoji2 = arr[rand1];

  let res = check(obj[emoji1], obj[emoji2]);
  if (res == "a") {
    countwin += 1;
    win.innerHTML = countwin;
    display("Win", emoji1, emoji2);
  } else if (res == "b") {
    countlose += 1;
    lose.innerHTML = countlose;
    display("Lose", emoji1, emoji2);
  } else {
    counttie += 1;
    tie.innerHTML = counttie;
    display("same", emoji1, emoji2);
  }
}

//Auto Play and Stop
let inter;
autoplay.addEventListener("click", () => {
  inter = setInterval(play, 1000);
});

stop.addEventListener("click", () => {
  clearInterval(inter);
});

//Original Player
let btn = document.querySelectorAll(".btn");
let btnArray = Array.from(btn);
btnArray.forEach((li) => {
  li.addEventListener("click", () => {
    let emoji1 = li.textContent;
    let rand2 = Math.floor(Math.random() * 3);
    let emoji2 = arr[rand2];
    let res2 = check(obj[emoji1], obj[emoji2]);
    if (res2 == "a") {
      countwin += 1;
      win.innerHTML = countwin;
      display("Win", emoji1, emoji2);
    } else if (res2 == "b") {
      countlose += 1;
      lose.innerHTML = countlose;
      display("Lose", emoji1, emoji2);
    } else {
      counttie += 1;
      tie.innerHTML = counttie;
      display("same", emoji1, emoji2);
    }
  });
});

//Restart
let restart = document.querySelector(".restart");
restart.addEventListener("click", () => {
  dis.innerHTML = "";
  you.innerHTML = "";
  they.innerHTML = "";
  win.innerHTML = "0";
  lose.innerHTML = "0";
  tie.innerHTML = "0";
  countlose = 0;
  counttie = 0;
  countwin = 0;
});
