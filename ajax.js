// const url = "https://api.quotable.io/random";

// function reqListener() {
//   console.log(this.responseText);
// }

// const req = new XMLHttpRequest();
// req.addEventListener("load", reqListener);
// // btn.addEventListener("click", requestAnimationFrame);
// req.open("GET", "https://api.quotable.io/random");
// req.send();
const btn = document.getElementById("btn");
btn.addEventListener("click", getQuotes);
// const quote = document.getElementById("quote");
// const author = document.getElementById("author");

function getQuotes(e) {
  e.preventDefault();

  const https = new XMLHttpRequest();

  https.open("GET", "https://api.quotable.io/random", true);

  https.onload = function () {
    if (this.status === 200) {
      // console.log(this.responseText);

      const response = JSON.parse(this.responseText);
      let output = "";
      response.forEach((quote) => {
        output += `
        <li>Quote: ${quote.text}</li>
        <li>Author: ${quote.author}</li>
        <hr>
        `;
      });

      document.getElementById("quote").innerHTML = output;
    }
  };

  https.send();
}
