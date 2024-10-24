import "../../../styles/Hero.scss";

class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <section class="hero">
        <div class="hero__content">
          <h1 class="hero__main-title">
          Discover the Best Restaurants and Cafes in Indonesia
          </h1>
          <hr class="custom-line">
          <p class="hero__description">Explore top-notch restaurants and cafes across Indonesia offering a variety of authentic dishes from the archipelago. Experience unforgettable dining with exceptional food quality and service. </p>
        </div>
      </section>
    `;
  }
}

customElements.define("hero-app", Hero);
