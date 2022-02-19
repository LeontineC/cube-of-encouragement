const cube = document.querySelector(".cube");
const button = document.querySelector(".button");
let currentClass = "active-1";

//generate random number between 1 and 6

rollCube = () => {
  let randomNumber = Math.floor(Math.random() * 6) + 1;

  const activeClass = "active-" + randomNumber;

  if (currentClass) {
    cube.classList.remove(currentClass);
    cube.classList.add(activeClass);
    currentClass = activeClass;
  }
};

button.addEventListener("click", rollCube);
