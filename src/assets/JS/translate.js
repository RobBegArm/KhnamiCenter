// Select all text elements and sort by languages

const allTextElements = Array.from(document.querySelectorAll(".language"));
const englishLanguage = Array.from(document.querySelectorAll(".language--en"));
const russianLanguage = Array.from(document.querySelectorAll(".language--ru"));
const armenianLanguage = Array.from(
  document.querySelectorAll(".language--arm")
);

//Selects the title element, and set an active title
const title = document.querySelector("title");
const titleEN = "Khnami &mdash; Palliative care center";
const titleRU = "Хнами &mdash; Центр паллиативной помощи";
const titleARM = "Խնամի &mdash; Պալիատիվ խնամքի կենտրոն";

// Select all language select elements and sort by languages
const langSelectButtonsEN = document.querySelectorAll(".lang-select--en");
const langSelectButtonsRU = document.querySelectorAll(".lang-select--ru");
const langSelectButtonsARM = document.querySelectorAll(".lang-select--arm");

//Always have an active language, which refers to according array with text elements
let activeTextElements = englishLanguage;

//Translates the page to selected language
function translatePage(newTextElements, newTitle) {
  if (newTextElements == activeTextElements) {
    return;
  }
  activeTextElements.forEach(el => {
    el.classList.add("invisible");
  });
  newTextElements.forEach(el => {
    el.classList.remove("invisible");
  });
  activeTextElements = newTextElements;
  title.innerHTML = newTitle;
}

//Translates to english
langSelectButtonsEN.forEach(el => {
  el.addEventListener("click", e => {
    translatePage(englishLanguage, titleEN);
  });
});
//Translates to russian
langSelectButtonsRU.forEach(el => {
  el.addEventListener("click", e => {
    translatePage(russianLanguage, titleRU);
  });
});
//Translates to armenian
langSelectButtonsARM.forEach(el => {
  el.addEventListener("click", e => {
    translatePage(armenianLanguage, titleARM);
  });
});
