import { GET_RESTAURANT_NEWS } from "../../services/service";
import "./../../../styles/NewsListRestaurant.scss";
import "../NewsRestaurant/NewsItemRestaurant";

class NewsListRestaurant extends HTMLElement {
  connectedCallback() {
    this.render();
    this.renderData();
  }

  async fetchData() {
    return await GET_RESTAURANT_NEWS("restaurant indonesian", 3);
  }

  async renderData() {
    const containerRestaurant = this.querySelector(
      ".news-list-restaurant__container"
    );
    try {
      const data = await this.fetchData();

      // Clear existing items before rendering new data
      containerRestaurant.innerHTML = "";

      data.articles.forEach((article) => {
        const restaurantItemElement = document.createElement(
          "restaurant-news-item"
        );
        restaurantItemElement.dataRestaurant = article;
        containerRestaurant.appendChild(restaurantItemElement);
      });
    } catch (error) {
      // Better error handling: display an error message in the UI
      containerRestaurant.innerHTML = `<p class="error-message">Error fetching news: ${error.message}</p>`;
    }
  }

  render() {
    this.innerHTML = `
      <section class="news-list-restaurant">
        <header class="news-list-restaurant__header">
          <h2 class="news-list-restaurant__main-title">
            News Restaurant
          </h2>
        </header>
        
        <div class="news-list-restaurant__container">
          <!-- News items will be appended here -->
        </div>
      </section>
    `;
  }
}

customElements.define("news-list-restaurant", NewsListRestaurant);
