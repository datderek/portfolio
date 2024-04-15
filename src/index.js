import './style.css';
import Battleship from './assets/images/battleships.png';
import SoundScribe from './assets/images/soundscribe.png';
import Yum from './assets/images/yum.png'
import WeatherMan from './assets/images/weatherman.png';
import TicTacToe from './assets/images/tictactoe.png';

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


const battleshipImg = new Image();
battleshipImg.src = Battleship;
const soundScribeImg = new Image();
soundScribeImg.src = SoundScribe;
const yumImg = new Image();
yumImg.src = Yum;
const weatherManImg = new Image();
weatherManImg.src = WeatherMan;
const ticTacToeImg = new Image();
ticTacToeImg.src = TicTacToe;

const projects = [
  {
    'name': 'Yum',
    'description': 'A social culinary platform for home cooks and professional chefs',
    'img': yumImg,
  },
    {
    'name': 'SoundScribe',
    'description': 'A Discord bot that transcribes audio in real-time',
    'img': soundScribeImg,
  },
  {
    'name': 'Battleships',
    'description': 'A single player recreation of the classic Battleship game',
    'img': battleshipImg,
  },
  {
    'name': 'WeatherMan',
    'description': 'Another one of those Weather apps... but made by me',
    'img': weatherManImg,
  },
  {
    'name': 'Tic Tac Toe',
    'description': 'Get three in a row!',
    'img': ticTacToeImg,
  }
]

const projectList = document.querySelector('.projects-container');

projects.forEach((project) => {
  const projectContainer = document.createElement('li');
  projectContainer.classList.add('project');
  const projectImage = project.img;
  projectImage.classList.add('project-image');
  const projectDetails = document.createElement('div');
  projectDetails.classList.add('project-details');
  const projectName = document.createElement('h3');
  projectName.classList.add('project-name');
  projectName.textContent = project.name;
  const projectDescription = document.createElement('h4');
  projectDescription.classList.add('project-description');
  projectDescription.textContent = project.description;
  projectDetails.appendChild(projectName);
  projectDetails.appendChild(projectDescription);
  projectContainer.appendChild(projectImage);
  projectContainer.appendChild(projectDetails);
  projectList.appendChild(projectContainer);
})