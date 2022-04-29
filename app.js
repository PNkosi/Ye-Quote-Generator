const quoteEl = document.querySelector(".quote");
const quoteBtn = document.getElementById("quoteBtn");

quoteBtn.addEventListener("click", generateQoute);

function generateQoute() {
  fetch("https://api.kanye.rest/")
    .then((res) => {
      return res.json();
    })

    .then((data) => {
      quoteEl.textContent = `"${data.quote}"`;
    })

    .catch((error) => {
      console.log("Error ocurred. " + error);
    });
}

generateQoute();
