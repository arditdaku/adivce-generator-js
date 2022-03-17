const randomButton = document.getElementById("random");
const cardTitle = document.getElementById("card-title");
const cardContent = document.getElementById("card-content");

async function fetchAdvice() {
  let data = await fetch("	https://api.adviceslip.com/advice");
  data = data.json();
  return data;
}

function displayAdvice(data) {
  fetchAdvice().then((data) => {
    cardTitle.innerHTML = "ADVICE #" + data.slip.id;
    cardContent.innerHTML = data.slip.advice;
  });
}

randomButton.addEventListener("click", async function () {
  this.classList.add("active");
  displayAdvice();
  setTimeout(function () {
    this.classList.remove("active");
  }, 800);
});
