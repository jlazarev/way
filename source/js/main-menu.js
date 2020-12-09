const header = document.querySelector('.page-header');
const navToggle = document.querySelector('.page-header__menu-button');

header.classList.remove('page-header--nojs');

navToggle.addEventListener('click', function() {
  if (header.classList.contains('page-header--close-menu')) {
    header.classList.remove('page-header--close-menu');
    header.classList.add('page-header--open-menu');
  } else {
    header.classList.add('page-header--close-menu');
    header.classList.remove('page-header--open-menu');
  }
});
