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

//Mobile Navbar

const mobileNav = document.querySelector(".main-nav");
const mobileNavBtn = document.querySelector(".btn-mobile-nav");
const mobileNavBtnOpen = document.querySelector(".btn--open-nav");
const mobileNavBtnClose = document.querySelector(".btn--close-nav");
const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
let navBarIsOpen = false;

const toggleNavbar = function () {
  let scrollTop = calculateScrollTop();
  mobileNav.style.top = `${scrollTop}px`;
  mobileNavBtnOpen.classList.toggle("invisible");
  mobileNavBtnClose.classList.toggle("invisible");
  mobileNav.classList.toggle("main-nav--open");
};

const closeNavbar = function () {
  mobileNavBtnOpen.classList.remove("invisible");
  mobileNavBtnClose.classList.add("invisible");
  mobileNav.classList.remove("main-nav--open");
};

mobileNavBtn.addEventListener("click", toggleNavbar);
mobileNavLinks.forEach(el => {
  el.addEventListener("click", closeNavbar);
});

//Moving Modal Window For Mobile Navbar

const calculateScrollTop = function () {
  let scrollTop =
    window.pageYOffset !== undefined
      ? window.pageYOffset
      : (document.documentElement || document.body.parentNode || document.body)
          .scrollTop;
  return scrollTop;
};

//Gallery

const galleryButtonLeft = document.querySelector(".gallery-btn-left");
const galleryButtonRight = document.querySelector(".gallery-btn-right");
const galleryImg = document.querySelectorAll(".gallery-picture");
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

// Gallery on Touch

let userTouchX;

const handleStart = function (e) {
  e.preventDefault();
  userTouchX = e.changedTouches[0].clientX;
};
const handleEnd = function (e) {
  e.preventDefault();
  let slideSize = e.changedTouches[0].clientX - userTouchX;
  if (Math.abs(slideSize) > 50) {
    changeGalleryImage(slideSize > 0 ? "left" : "right");
  }
};

startup();
function startup() {
  galleryImgBox.addEventListener("touchstart", handleStart);
  galleryImgBox.addEventListener("touchend", handleEnd);
}

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

// Select all language select elements
const allLangSelectButtons = document.querySelectorAll(".lang-select");

document.addEventListener("click", hideDropdownContents);
allLangSelectButtons.forEach(el => {
  el.addEventListener("click", hideDropdownContents);
  dropdownContentVisible = false;
});
