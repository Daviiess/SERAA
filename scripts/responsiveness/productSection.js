/*   const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
  }); */  document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".menu");
  const navContainer = document.querySelector(".cart-container");

  menuBtn.addEventListener("click", () => {
    navContainer.classList.toggle("active");
  });
});
