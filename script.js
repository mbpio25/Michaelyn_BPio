let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Dot controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Remove active class from all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Show current slide and highlight matching dot
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// Auto-play
function autoPlaySlides() {
  slideIndex++;
  if (slideIndex > document.getElementsByClassName("slides").length) {
    slideIndex = 1;
  }
  showSlides(slideIndex);
  setTimeout(autoPlaySlides, 4000); // Change every 4s
}
autoPlaySlides();

// Dot click events
let dots = document.getElementsByClassName("dot");
for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", function() {
    currentSlide(i + 1);
  });
}

// Arrow click events
document.querySelector(".prev").addEventListener("click", function() {
  plusSlides(-1);
});
document.querySelector(".next").addEventListener("click", function() {
  plusSlides(1);
});
