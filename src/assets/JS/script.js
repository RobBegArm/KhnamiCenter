"use strict";
const log = console.log;

//Smooth scrolling animation
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const href = link.getAttribute("href");
    //Scroll back to top
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    //Scroll to other links
    else if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});

//Gallery

const galleryButtonLeft = document.querySelector(".gallery-btn-left");
const galleryButtonRight = document.querySelector(".gallery-btn-right");
const galleryImg = document.querySelectorAll(".gallery-img");
const galleryImgBox = document.querySelector(".gallery-img-box");
const galleryNavElArray = document.querySelectorAll(".gallery-nav-bullet");

//Current Active image number and total images number
let currentImage = 1;
const totalImageNumber = 7;

//Event Listeners for gallery arrows
galleryButtonLeft.addEventListener("click", e => {
  changeGalleryImage("left");
});

galleryButtonRight.addEventListener("click", e => {
  changeGalleryImage("right");
});

//Event Listeners for gallery bullets
galleryNavElArray.forEach(el => {
  let idString = el.id.toString();
  let id = idString[idString.length - 1];
  el.addEventListener("click", e => {
    setGalleryImage(id);
  });
});

//Sets the gallery image directly
const setGalleryImage = function (imageNo) {
  changeGalleryNavBullet("ellipse-outline");
  currentImage = parseInt(imageNo);
  changeImg();
  changeGalleryNavBullet("ellipse");
};

//Changes the gallery image by arrows
const changeGalleryImage = function (direction) {
  changeGalleryNavBullet("ellipse-outline");
  shiftImgNo(direction);
  changeImg();
  changeGalleryNavBullet("ellipse");
};

// Shift the number of active image
const shiftImgNo = function (direction) {
  switch (direction) {
    case "right":
      if (currentImage === totalImageNumber) {
        currentImage = 1;
      } else if (currentImage < totalImageNumber) {
        currentImage++;
      }
      break;
    case "left":
      if (currentImage === 1) {
        currentImage = totalImageNumber;
      } else if (currentImage > 1) {
        currentImage--;
      }
      break;
  }
};

//Waits for the end of animation
galleryImgBox.addEventListener(
  "animationend",
  function () {
    this.classList.remove("shade");
  },
  false
);

// Change the image according to active image number
const changeImg = function () {
  galleryImg[currentImage - 1].classList.remove("invisible");
  galleryImg.forEach((el, i) => {
    if (i !== currentImage - 1) {
      el.classList.add("invisible");
    }
  });
  galleryImgBox.classList.add("shade");
};

// Select All Gallery Images
// const galleryImg1 = new Image();
// galleryImg1.src = "./assets/content/images/gallery/Gallery-img-1.jpg";
// galleryImgBox.style.background = galleryImg1;

// Change the nav bullet according to bullet type (ellipse/ellipse-outline)
const changeGalleryNavBullet = function (type) {
  galleryNavElArray[
    currentImage - 1
  ].innerHTML = `<ion-icon name="${type}" class="gallery-nav-icon"></ion-icon>`;
};

// Change language dropdown menu visibility onclick

const langSelectBtns = document.querySelectorAll(".lang-select-dropdown-btn");
const langSelectDropdownContents = document.querySelectorAll(
  ".lang-select-dropdown-content"
);

let dropdownContentVisible = false;

//Toggles the visibility of contents
langSelectBtns.forEach((el, i) => {
  el.addEventListener("click", () => {
    !dropdownContentVisible;
    langSelectDropdownContents[i].classList.toggle("hidden-content");
  });
});

// Hides Dropdown Content on click if it is visible
const hideDropdownContents = function () {
  if (!dropdownContentVisible) {
    langSelectDropdownContents.forEach(el => {
      el.classList.add("hidden-content");
    });
  }
};

document.addEventListener("click", hideDropdownContents);
