/* BACK TO TOP */

// Get the button
let mybutton = document.getElementById("backToTopBtn");

// When the user scrolls down 100px from the top, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
