// Select all text elements and sort by languages

const allTextElements = Array.from(document.querySelectorAll(".language"));
const englishLanguage = Array.from(document.querySelectorAll(".language--en"));
const russianLanguage = Array.from(document.querySelectorAll(".language--ru"));
const armenianLanguage = Array.from(
  document.querySelectorAll(".language--arm")
);

// Selects the title element, and set an active title
const title = document.querySelector("title");
const titleEN = "Khnami &mdash; Palliative care center";
const titleRU = "Хнами &mdash; Центр паллиативной помощи";
const titleARM = "Խնամի &mdash; Պալիատիվ խնամքի կենտրոն";

// Select all language select elements and sort by languages
const langSelectButtonsEN = document.querySelectorAll(".lang-select--en");
const langSelectButtonsRU = document.querySelectorAll(".lang-select--ru");
const langSelectButtonsARM = document.querySelectorAll(".lang-select--arm");

// const patientName = document.querySelector("#patient_name");
// const patientDiagnosis = document.querySelector("#patient_diagnosis");
// const contactName = document.querySelector("#contact_name");
// const contactEmail = document.querySelector("#contact_email");

// Select inputs with text placeholders in the cta form
const txtPlcInputs = document.querySelectorAll(".txtPlcInput");
log(txtPlcInputs);

// Creates an array of placeholder texts
// patientName-patientDiagnosis-contactName-contactEmail
const plcEN = ["Hakob Hakobyan", "Oncology", "Armine Hakobyan"];
const plcRU = ["Акоп Акопян", "Онкология", "Армине Акопян"];
const plcARM = ["Հակոբ Հակոբյան", "Ուռուցքաբանություն", "Արմինե Հակոբյան"];

txtPlcInputs.forEach((el, i) => {});

const translatePlaceholders = function () {};

// Always have an active language, which refers to according array with text elements
let activeTextElements = englishLanguage;

// Translates the page to selected language
const translatePage = function (newTextElements, newTitle) {
  // Check if language is already active
  if (newTextElements == activeTextElements) {
    return;
  }
  // Change visibility of elements
  activeTextElements.forEach(el => {
    el.classList.add("invisible");
  });
  newTextElements.forEach(el => {
    el.classList.remove("invisible");
  });
  activeTextElements = newTextElements;
  title.innerHTML = newTitle;
};

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
