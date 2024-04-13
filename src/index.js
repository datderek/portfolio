import './style.css';

const menuButton = document.querySelector('.menu-toggle-button');
const menuLinks = document.querySelector('.menu-links');

menuButton.addEventListener('click', () => {
  menuButton.classList.toggle('expand');
  if (menuLinks.classList.contains('expand')) {
    menuLinks.classList.remove('expand');

    menuLinks.addEventListener('animationend', () => {
      menuLinks.classList.remove('collapse');
    }, { once: true });
    
    menuLinks.classList.add('collapse')
  } else {
    menuLinks.classList.add('expand');
  }
});