let con = document.querySelectorAll(".con");
let computer = document.querySelectorAll(".computer");
let trinagle = document.querySelector(".trinagle");
let user = document.querySelector(".user");
let machine = document.querySelector(".machine");
let winModal = document.querySelector(".win-modal");
let winner = document.querySelector(".winner");
let play = document.querySelector(".play");
let random = Math.floor(Math.random() * 3);
let ruleBtn = document.querySelector(".btn-rule");
let rulemodal = document.querySelector(".rule-modal");
let ruleimg = document.querySelector(".rule-img");
let score = JSON.parse(localStorage.getItem("sc"));
let scoreElem = document.getElementById("score");
let compScore = document.getElementById("score22");
let btnNext = document.getElementById("btnNext");

// btnNext.addEventListener("click", () => {
//   // Redirect to the next page
//   sessionStorage.setItem("userScore", count.toString());
//   sessionStorage.setItem("computerScore", computerScore.toString());
//   window.location.href = "https://www.google.com/";
// });

// let score5= document.getElementById("score2");
// let score6 = JSON.parse(localStorage.getItem("score2"));

if (score) {
  scoreElem.innerText = score;
}

let computerScore = JSON.parse(localStorage.getItem("score22"));
if (computerScore) {
  compScore.innerText = computerScore;
}

let count = 0;
con.forEach((element, index) => {
  element.addEventListener("click", () => {
    user.style.opacity = "1";
    trinagle.style.display = "none";
    con.forEach((item) => {
      item.style.display = "none";
    });
    element.style.display = "block";
    element.classList.add("show");
    setTimeout(() => {
      machine.style.opacity = "1";
      setTimeout(() => {
        computer[random].style.display = "block";
        computer[random].classList.add("right");
      }, 1000);
    }, 500);
    setTimeout(() => {
      if (random == index) {
        winModal.style.display = "grid";
        winner.innerHTML = "TIE UP";
      } else if (
        (index == 1 && random == 2) ||
        (index == 0 && random == 1) ||
        (index == 2 && random == 0)
      ) {
        winModal.style.display = "grid";
        winner.innerHTML = "YOU WIN";
        count = score;
        count++;
        scoreElem.innerText = count;
        localStorage.setItem("sc", JSON.stringify(count));
        // btnNext.classList.remove("hidden");
        if (count >= 1) {
          btnNext.classList.remove("hidden");
          if (btnNext.classList.contains("hidden")) {
            return;
          }
          btnNext.addEventListener("click", () => {
            sessionStorage.setItem("userScore", count.toString());
            sessionStorage.setItem("computerScore", computerScore.toString());
            window.location.href = "next-page.html";
          });
        }
      } else {
        winModal.style.display = "grid";
        winner.innerHTML = "YOU LOST";
        count = parseInt(compScore.innerText);
        count++;
        compScore.innerText = count;
        localStorage.setItem("score22", JSON.stringify(count));
      }
    }, 1500);
  });
});

play.addEventListener("click", () => {
  window.location.reload();
});
ruleBtn.addEventListener("click", () => {
  rulemodal.style.display = "flex";
  setTimeout(() => {
    ruleimg.style.transform = "translateY(0)";
  }, 200);
});
let close = document.querySelector(".close");
close.addEventListener("click", () => {
  ruleimg.style.transform = "translateY(-200%)";
  setTimeout(() => {
    rulemodal.style.display = "none";
  }, 200);
});
