export default class InteractionHandler {
  static menuButton = document.querySelector('.menu-toggle-button');
  static menuLinks = document.querySelector('.menu-links');
  
  static #attachListeners() {
    this.menuButton.addEventListener('click', () => {
      this.menuButton.classList.toggle('expand');

      if (this.menuLinks.classList.contains('expand')) {
        this.menuLinks.classList.remove('expand');
    
        this.menuLinks.addEventListener('animationend', () => {
          this.menuLinks.classList.remove('collapse');
        }, { once: true });
        
        this.menuLinks.classList.add('collapse')
      } else {
        this.menuLinks.classList.add('expand');
      }
    });
  }

  static start() {
    InteractionHandler.#attachListeners();
  }
}