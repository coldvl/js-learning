const closedFace = document.querySelector('.closed');
const openFace = document.querySelector('.open');

closedFace.addEventListener('click', () => {
  closedFace.classList.remove('active');
  openFace.classList.add('active');
});

openFace.addEventListener('click', () => {
  openFace.classList.remove('active');
  closedFace.classList.add('active');
});