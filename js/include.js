// include.js - versi fix Hostinger
function includeHTML() {
  const elements = document.querySelectorAll("[data-include]");

  elements.forEach((el) => {
    const file = el.getAttribute("data-include");

    if (file) {
      fetch("/" + file) // FIX untuk hosting
        .then((response) => {
          if (!response.ok) {
            throw new Error("File tidak ditemukan: " + file);
          }
          return response.text();
        })
        .then((data) => {
          el.innerHTML = data;
          initBurgerMenu();
        })
        .catch((error) => {
          console.error("Error loading file:", error);
        });
    }
  });
}

function initBurgerMenu() {
  const burger = document.getElementById("burger");
  const navMenu = document.getElementById("nav-menu");

  if (burger && navMenu) {
    burger.onclick = function (e) {
      e.stopPropagation();
      navMenu.classList.toggle("active");
    };

    document.addEventListener("click", function (event) {
      if (!burger.contains(event.target) && !navMenu.contains(event.target)) {
        navMenu.classList.remove("active");
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", includeHTML);
