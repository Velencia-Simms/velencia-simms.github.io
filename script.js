/* BACK TO TOP */

let mybutton = document.getElementById("backToTopBtn");

// Show the button when user scrolls down 300px
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// Smooth scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0, 
        behavior: "smooth"
    });
}
