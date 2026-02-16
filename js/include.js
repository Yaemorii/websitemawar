// include.js - versi sederhana
function includeHTML() {
  const elements = document.querySelectorAll('[data-include]');

  elements.forEach(el => {
    const file = el.getAttribute('data-include');
    
    if (file) {
      fetch(file)
        .then(response => response.text())
        .then(data => {
          el.innerHTML = data;
          initBurgerMenu();
        })
        .catch(error => {
          console.error("Error loading file:", error);
        });
    }
  });
}

function initBurgerMenu() {
  const burger = document.getElementById("burger");
  const navMenu = document.getElementById("nav-menu");
  
  if (burger && navMenu) {
    // Hapus event listener lama jika ada
    burger.onclick = null;
    
    // Tambahkan event listener baru
    burger.onclick = function() {
      navMenu.classList.toggle("active");
    };
    
    // Tutup menu saat klik di luar
    document.addEventListener('click', function(event) {
      if (!burger.contains(event.target) && !navMenu.contains(event.target)) {
        navMenu.classList.remove("active");
      }
    });
  }
}

// Jalankan saat halaman dimuat
document.addEventListener("DOMContentLoaded", includeHTML);