const toggleBtn = document.querySelector('.toggle-btn');
const menu = document.querySelector('ul');

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('show');
});