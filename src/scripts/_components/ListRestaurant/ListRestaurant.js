import dataRestaurant from "../../../public/data/DATA.json";
import "../RestaurantItem/RestaurantItem";
import "./../../../styles/ListRestaurant.scss";

class ListRestaurant extends HTMLElement {
  connectedCallback() {
    this.render();
    this.renderData();
  }

  fetchData() {
    // Menangani error jika data tidak ada
    try {
      return dataRestaurant.restaurants || [];
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
      return [];
    }
  }

  renderData() {
    const containerRestaurant = this.querySelector(
      ".list_restaurant__container"
    );
    const data = this.fetchData();

    if (data.length === 0) {
      containerRestaurant.innerHTML =
        '<p class="list_restaurant__empty">No restaurants available</p>';
      return;
    }

    data.forEach((restaurant) => {
      const restaurantItemElement = document.createElement("restaurant-item");
      restaurantItemElement.dataRestaurant = restaurant;
      containerRestaurant.appendChild(restaurantItemElement);
    });
  }

  render() {
    this.innerHTML = `
      <section class="list_restaurant">
        <header class="list_restaurant__header">
          <h2 class="list_restaurant__main-title">
            List Restaurant
          </h2>
        </header>
        
        <div class="list_restaurant__container">
        </div>
      </section>
    `;
  }
}

customElements.define("list-restaurant", ListRestaurant);
