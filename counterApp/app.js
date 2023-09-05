const countEl = document.getElementById("count");
const incrementBtn = document.getElementById("increment-btn");
const decrementBtn = document.getElementById("decrement-btn");

let counter = 0;

function updateCounter() {
  countEl.textContent = counter;
}

incrementBtn.addEventListener("click", () => {
  counter++;
  updateCounter();
});

decrementBtn.addEventListener("click", () => {
  if (counter > 0) {
    counter--;
    updateCounter();
  }
});
