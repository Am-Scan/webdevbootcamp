let heart = document.getElementById("heart");

let body = document.querySelector("body");

function leftPosition() {
  random = Math.floor(Math.random() * 100 + 1);
  heart.style.left = random + "%";
}

function createHeart() {
  let newHeart = document.createElement("p");
  newHeart.innerHTML= "♥";
  newHeart.className = "heart";
  newHeart.style.left = Math.random() * 100 + "%";
  newHeart.style.animationDuration = Math.random() * 3 + 2 + "s";
  body.appendChild(newHeart);
}

setInterval(createHeart,1000);

setTimeout(setInterval(heart.remove(),5000));