const posters = document.querySelector('.posters');

let isDown = false;
let startX, scrollLeft;

content.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX - content.offsetLeft;
  scrollLeft = content.scrollLeft;
});

content.addEventListener('mouseleave', () => {
  isDown = false;
});

content.addEventListener('mouseup', () => {
  isDown = false;
});

content.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - content.offsetLeft;
  const walk = (x - startX) * 1.5;
  content.scrollLeft = scrollLeft - walk;
});

   