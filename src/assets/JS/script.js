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

let selectedImage = 1;
const imagesNumber = 3;

const galleryButtonLeft = document.querySelector(".gallery-btn-left");
const galleryButtonRight = document.querySelector(".gallery-btn-right");
const galleryImgBox = document.querySelector(".gallery-img-box");

const galleryNavElArray = document.querySelectorAll(".gallery-nav-bullet");
const galleryNavEl1 = document.querySelector("#gallery_bullet_1");
const galleryNavEl2 = document.querySelector("#gallery_bullet_2");
const galleryNavEl3 = document.querySelector("#gallery_bullet_3");

// galleryNavElArray[0]

galleryButtonLeft.addEventListener("click", e => {
  changeGalleryNavBullet("ellipse-outline");
  shiftImgNo("left");
  changeImg();
  changeGalleryNavBullet("ellipse");
});

galleryButtonRight.addEventListener("click", e => {
  changeGalleryNavBullet("ellipse-outline");
  shiftImgNo("right");
  changeImg();
  changeGalleryNavBullet("ellipse");
});

const changeGalleryImage = function (direction) {
  changeGalleryNavBullet("ellipse-outline");
  shiftImgNo("right");
  changeImg();
  changeGalleryNavBullet("ellipse");
};

// Shift the number of active image
const shiftImgNo = function (direction) {
  switch (direction) {
    case "right":
      if (selectedImage === imagesNumber) {
        selectedImage = 1;
      } else if (selectedImage < imagesNumber) {
        selectedImage++;
      }
      break;
    case "left":
      if (selectedImage === 1) {
        selectedImage = imagesNumber;
      } else if (selectedImage > 1) {
        selectedImage--;
      }
      break;
  }
};

// Change the image according to active image number
const changeImg = function () {
  galleryImgBox.style.background = `url('/assets/content/images/Gallery-img-${selectedImage}-original.jpg')`;
};

// Change the nav bullet according to bullet type (ellipse/ellipse-outline)
const changeGalleryNavBullet = function (type) {
  galleryNavElArray[
    selectedImage - 1
  ].innerHTML = `<ion-icon name="${type}" class="gallery-nav-icon"></ion-icon>`;
};
