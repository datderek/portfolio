import Battleship from '../assets/images/battleships.png';
import SoundScribe from '../assets/images/soundscribe.png';
import TicTacToe from '../assets/images/tictactoe.png';
import WeatherMan from '../assets/images/weatherman.png';
import Yum from '../assets/images/yum.png';

const createImageElement = (src) => {
  const imageElement = new Image();
  imageElement.src = src;
  return imageElement;
}

const projects = [
  {
    'name': 'Yum',
    'description': 'A social culinary platform for home cooks and professional chefs',
    'link': 'https://github.com/jackfales/yum',
    'img': createImageElement(Yum)
  },
  {
    'name': 'Battleships',
    'description': 'A single player recreation of the classic Battleship game',
    'link': 'https://github.com/datderek/battleship.git',
    'img': createImageElement(Battleship)
  },
  {
    'name': 'SoundScribe',
    'description': 'A Discord bot that transcribes audio in real-time',
    'link': 'https://github.com/datderek/SoundScribe.git',
    'img': createImageElement(SoundScribe)
  },
  {
    'name': 'WeatherMan',
    'description': 'Another one of those Weather apps... but made by me',
    'link': 'https://github.com/datderek/weatherman.git',
    'img': createImageElement(WeatherMan)
  },
  {
    'name': 'Tic Tac Toe',
    'description': 'Get three in a row!',
    'link': 'https://github.com/datderek/odinproject/tree/main/tictactoe',
    'img': createImageElement(TicTacToe)
  },
]

export default class Display {
  static start() {
    this.#loadProjects();
    this.#initializeObserver();
  }

  static #loadProjects() {
    const projectList = document.querySelector('.projects-container');

    projects.forEach((project) => {
      const projectContainer = document.createElement('li');
      projectContainer.classList.add('project');
      
      const projectLinkWrapper = document.createElement('a');
      projectLinkWrapper.href = project.link;

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
      projectContainer.appendChild(projectLinkWrapper);
      projectContainer.appendChild(projectDetails);
      projectList.appendChild(projectContainer);
    })
  }

  static #initializeObserver() {
    const observerOptions = {
      root: null,
      threshold: 0,
      rootMargin: '0px 0px -33% 0px'
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('in-view');
              observer.unobserve(entry.target);
          }
      });
    }, observerOptions);

    const titleContainers = document.querySelectorAll('.title-container');

    titleContainers.forEach((titleContainer) => {
      observer.observe(titleContainer);
    })
  }
}
