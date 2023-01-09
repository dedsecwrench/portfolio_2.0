const toggleBtn = document.querySelector('.header__toggle-btn');
const navbarContent = document.querySelector('.header__left');
console.log(navbarContent);

toggleBtn.addEventListener('click', () => {
  navbarContent.classList.toggle('collapse');
});