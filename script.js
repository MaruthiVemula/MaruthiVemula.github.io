// Scroll button animation
const scrollButton = document.querySelector('#hero-btn');
scrollButton.addEventListener('click', () => {
  window.scrollTo({
    top: 750,
    behavior: 'smooth'
  });
});
