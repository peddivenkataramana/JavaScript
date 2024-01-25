const apiUrl = "https://api.quotable.io/random";

const quoteElement = document.getElementsByClassName("quote")[0];
const authorElement = document.getElementsByClassName("author")[0];

async function fetchQuote(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    quoteElement.innerHTML = data.content;
    authorElement.innerHTML = `- ${data.author}`;
  } catch (error) {
    console.error("Error fetching quote:", error);
  }
}

fetchQuote(apiUrl);

function link() {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      quoteElement.innerHTML +
      "----by" +
      authorElement.innerHTML,
    "Tweet Window",
    "width=600,height=300"
  );
}
