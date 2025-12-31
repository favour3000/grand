let slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

setInterval(nextSlide, 5000);
showSlide(currentSlide);const testimonials = document.querySelectorAll(".Testimonial-slide");
const dots = document.querySelectorAll(".dot");
let testimonialIndex = 0;

function showTestimonial(index) {
  testimonials.forEach(t => t.classList.remove("active"));
  dots.forEach(d => d.classList.remove("active"));

  testimonials[index].classList.add("active");
  dots[index].classList.add("active");
}

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    testimonialIndex = i;
    showTestimonial(testimonialIndex);
  });
});

showTestimonial(testimonialIndex);const menuIcon = document.querySelector(".menu-icon");
const navItems = document.querySelector(".nav-items");

menuIcon.addEventListener("click", () => {
  navItems.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", () => {

  const slides = document.querySelectorAll(".hero-section .slide");
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  // Auto slide
  setInterval(nextSlide, 5000);

  // Navigation buttons
  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);

  // Init
  showSlide(currentSlide);

});
