const btndecrease = document.querySelector(".decrease");
const btnreset = document.querySelector(".reset");
const btnincrease = document.querySelector(".increase");
const updatevalue = document.querySelector("#value");
let count = 0;

btnincrease.addEventListener("click", () => {
  updatevalue.textContent = `${count++}`;
  if (count > 0) {
    updatevalue.style.color = "green";
  }
});

btndecrease.addEventListener("click", () => {
  updatevalue.textContent = `${count--}`;
  if (count < 0) {
    updatevalue.style.color = "red";
  }
});

btnreset.addEventListener("click", () => {
  updatevalue.textContent = `${(count = 0)}`;
  if (count === 0) {
    updatevalue.style.color = "#222";
  }
});
