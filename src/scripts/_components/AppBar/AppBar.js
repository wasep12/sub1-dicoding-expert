import logo from "../../../public/images/logo/restaurant.png";
import "../../../styles/AppBar.scss";

class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <header>
    <nav class="nav">
      <div class="nav__logo">
        <img src="${logo}" alt="Restaurant app logo" width="120" />
      </div>
      
      <a aria-label="hamburger-button" href="#" id="hamburger" class="nav-hamburger__button">☰</a>
      
      <ul class="nav__list">
        <li class="nav__item">
          <a href="/" class="nav__link">Home</a>
        </li>
        <li class="nav__item">
          <a href="#" class="nav__link">Favorite</a>
        </li>
        <li class="nav__item">
          <a href="https://www.linkedin.com/in/wasep-abdul-aziz-54410a24a/" class="nav__link" target="_blank" rel="noopener noreferrer">About Us</a>
        </li>
      </ul>
    </nav>
  </header>
      `;
  }
}

customElements.define("app-bar", AppBar);
