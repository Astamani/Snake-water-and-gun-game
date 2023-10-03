const imageElement = document.getElementById("photo");
const btn = document.getElementById("btn")
const computerImageElement = document.getElementById("computer");
const cardElement = document.getElementById("card");
const cardElement_1 = document.getElementById("card-2");
const photo1Button = document.getElementById("snake");
const photo2Button = document.getElementById("water");
const photo3Button = document.getElementById("gun");
const photoUrl = ['snake.jpg', 'water.jpg', 'gun.jpg']
console.log(photo1Button)
const choise = ['snake', 'water', 'gun']
function choosephoto(photoIndex) {
  cardElement.style.transform = "rotateY(180deg)"
  cardElement_1.style.transform = "rotateY(180deg)"
  const selectUrl = photoUrl[photoIndex];
  imageElement.src = selectUrl;
  playgame(choise[photoIndex]);
}
photo1Button.addEventListener("click", () => choosephoto(0))
photo2Button.addEventListener("click", () => choosephoto(1))
photo3Button.addEventListener("click", () => choosephoto(2))

function randomGenerate() {
  const computerChoice = Math.floor(Math.random() * choise.length)
  computerImageElement.src = photoUrl[computerChoice]
  return choise[computerChoice]
}
function playgame(userChoice) {
  const result = document.getElementById("result")
  const computerChoice = randomGenerate()
  btn.style.visibility = "hidden"
  if ((userChoice === "snake" && computerChoice === "water") || (userChoice === "gun" && computerChoice === "snake") || (userChoice === "water" && computerChoice === "gun")) {
    result.innerText = "Humans strike back! Take that, machines!"
  }
  else if (userChoice === computerChoice) {
    result.innerText = "No one's trigger-happy today! It's a tie game!"
  }
  else {
    result.innerText = "Beep boop, I'm too cool for you!"
  }
}
const playAgainButton = document.getElementById("play");
playAgainButton.addEventListener("click", () => {
  cardElement.style.transform = "rotateY(0deg)"
  cardElement_1.style.transform = "rotateY(0deg)"
  btn.style.visibility="visible"
  // Allow the user to make a new choice by enabling the photo buttons again
  photo1Button.disabled = false;
  photo2Button.disabled = false;
  photo3Button.disabled = false;
});
