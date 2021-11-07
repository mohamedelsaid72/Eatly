/* Preloader */
window.onload = () => {
  setTimeout(() => {
    document.querySelector(".loader").classList.remove("active");
  }, 3000);
};
/* Preloader */

/* Menu toggle */
let menu_icon = document.querySelector(".menu-icon"),
  links = document.querySelector(".links"),
  close = document.querySelector(".close");
menu_icon.addEventListener("click", () => {
  links.classList.add("active");
});
close.addEventListener("click", () => {
  links.classList.remove("active");
});

let link = document.querySelectorAll(".navbar .container .links li");
link.forEach((link) => {
  link.addEventListener("click", () => {
    links.classList.remove("active");
  });
});
/* Menu toggle */

/* Sticky Navbar */
window.addEventListener("scroll", () => {
  if (window.scrollY > document.querySelector(".navbar").offsetHeight) {
    document.querySelector(".navbar").classList.add("sticky");
  } else {
    document.querySelector(".navbar").classList.remove("sticky");
  }
});
/* Sticky Navbar */

/* Change Recipes */
let recipesLinks = document.querySelectorAll(".recipes-container ul li"),
  mealNames = document.querySelectorAll(".meal-name");

recipesLinks.forEach(function (recipeLink) {
  recipeLink.addEventListener("click", () => {
    document
      .querySelector(".recipes-container ul li.checked")
      .classList.remove("checked");
    recipeLink.classList.add("checked");
    document
      .querySelector(".menu-content .meals .meals-inner .meal-name.active")
      .classList.remove("active");
    let target = recipeLink.dataset.filter;
    mealNames.forEach(function (mealName) {
      if (mealName.classList.contains(target)) {
        mealName.classList.add("active");
      }
    });
  });
});
/* Change Recipes */

/* Testimonials Slider */
let i = 0;
let classes = ["one", "two", "three", "four", "five"];
let arrows = document.querySelectorAll(".arrows span");
let slides = document.querySelectorAll(".slide");

arrows.forEach(function (arrow) {
  arrow.addEventListener("click", () => {
    if (arrow.className === "right") {
      i++;
      if (i >= classes.length) {
        i = 0;
      }
    } else if (arrow.className === "left") {
      i--;
      if (i < 0) {
        i = classes.length - 1;
      }
    }
    let target = classes[i];
    slides.forEach(function (slide) {
      slide.classList.remove("active");
      if (slide.classList.contains(target)) {
        slide.classList.add("active");
      }
    });
  });
});
/* Testimonials Slider */
