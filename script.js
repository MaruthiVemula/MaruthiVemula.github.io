// Scroll button animation
const scrollButton = document.querySelector('#hero-btn');
scrollButton.addEventListener('click', () => {
  window.scrollTo({
    top: 800,
    behavior: 'smooth'
  });
});
