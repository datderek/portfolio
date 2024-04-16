import './style.css';
import Display from './modules/Display.js';
import InteractionHandler from './modules/InteractionHandler.js';

window.addEventListener('DOMContentLoaded', () => {
  Display.start();
  InteractionHandler.start();
})
