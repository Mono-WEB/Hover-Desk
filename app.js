const board = document.querySelector("#board");
const colored = ['#00736e', '#23b9ce', '#00c585', '#ffb500', '#ed1941'];
const SQUARES_NUMBER = 400;

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));
  board.append(square);

  square.addEventListener("mouseleave", () => removeColor(square));
  board.append(square);
}

function setColor(element) {
  const color = getRandomColor()
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}`
}

function removeColor(element) {
  element.style.backgroundColor = "#1d1d1d";
  element.style.boxShadow = `0 0 2px #000, 0 0 10px #000`
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colored.length)
  return colored[index]
}