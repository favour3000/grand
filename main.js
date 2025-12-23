let slides = document.querySelectorAll('.slide');
let dots = document.querySelectorAll('.dot');
let current = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
    dots[i].classList.toggle('active-dot', i === index);
  });
}

document.querySelector('.next').onclick = () => {
  current = (current + 1) % slides.length;
  showSlide(current);
};

document.querySelector('.prev').onclick = () => {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
};

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    current = i;
    showSlide(current);
  });
});

// Auto-slide every 5 seconds
setInterval(() => {
  current = (current + 1) % slides.length;
  showSlide(current);
}, 5000);
