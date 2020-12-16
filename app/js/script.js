const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

// Hamburger animation
btnHamburger.addEventListener('click', function () {
  console.log('click hamburger');

   if (header.classList.contains('open')) { // Close hamburger menu
      body.classList.remove('noscroll');
      header.classList.remove('open');
      fadeElems.forEach(function (element) {
        element.classList.remove('fade-in');
        element.classList.add('fade-out');
      });
      document.getElementById("menuBtn").src = "/images/icons/menu.svg";

   } else { // Open hamburger menu
      body.classList.add('noscroll');
      header.classList.add('open');
      fadeElems.forEach(function (element) {
        element.classList.remove('fade-out');
        element.classList.add('fade-in');
      });
      document.getElementById("menuBtn").src = "/images/icons/close.svg";
      document.getElementById("menuBtn").style.width = "31.4167px";

  }

});