// carousel.js
let slideIndex = 0;
let slides = document.querySelectorAll(".carousel-slide");
let prevBtn = document.querySelector(".carousel-btn.prev");
let nextBtn = document.querySelector(".carousel-btn.next");
let autoRotateInterval = null;

function showSlide(index) {
  if (index >= slides.length) slideIndex = 0;
  if (index < 0) slideIndex = slides.length - 1;

  slides.forEach((slide, i) => {
    slide.style.display = i === slideIndex ? "block" : "none";
  });
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);
}

function startAutoRotate() {
  stopAutoRotate();
  autoRotateInterval = setInterval(nextSlide, 5000); // rotates every 5s
}

function stopAutoRotate() {
  if (autoRotateInterval) clearInterval(autoRotateInterval);
}

// Event listeners
nextBtn.addEventListener("click", () => {
  nextSlide();
  startAutoRotate();
});
prevBtn.addEventListener("click", () => {
  prevSlide();
  startAutoRotate();
});

// Init
showSlide(slideIndex);
startAutoRotate();
