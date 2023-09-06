const ayat = document.querySelector(".text-area");
const ayatNo = document.querySelector(".number");
const button = document.querySelector(".btn");

button.addEventListener("click", getAyat);

function getAyat() {
  const apiUrl = "https://api.alquran.cloud/v1/ayah/random/en.asad"
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
console.log(data)
      let text = data["data"]["text"]
      let surah = data["data"]["surah"]["englishName"]
      let ayah = data["data"]["surah"]["number"]

      ayat.textContent = text
      ayatNo.textContent =`${surah}:${ayah}`
    });
}
