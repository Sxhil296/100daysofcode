let btn = document.querySelector('#new-quote')
let quote = document.querySelector('.quote')
let person = document.querySelector('.person')

btn.addEventListener('click', getNewQuote);

function getNewQuote() {
    const apiUrl = "https://api.quotable.io/random";
    fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
        quote.textContent = `"${data.content}"`;
        person.textContent = `-${data.author}`
    })
    .catch((error) => {
        console.error("Error fetching data:", error);
    });
}
getNewQuote();