// Mengubah background color pada header/navbar ketika di scroll
const headersection = document.getElementById('header');

window.addEventListener('scroll', () => {
  if (this.scrollY >= 85) {
    headersection.classList.add('on-scroll');
  } else {
    headersection.classList.remove('on-scroll');
  }
});
