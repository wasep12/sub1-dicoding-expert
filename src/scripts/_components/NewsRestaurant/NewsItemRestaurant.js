import "./../../../styles/NewsItemRestaurant.scss";

class RestaurantItem extends HTMLElement {
  set dataRestaurant(data) {
    this.render(data);
  }

  render(data) {
    const {
      source = { name: "Unknown Source" },
      author = "-",
      title,
      description,
      urlToImage,
      url,
      publishedAt,
    } = data;

    this.innerHTML = `
      <article class="restaurant-news-item">
        <div class="restaurant-news-item__information">
          <span class="restaurant-news-item__source">
            Source: ${source.name}
          </span>
          <img class="restaurant-news-item__banner" src="${
            urlToImage || "default-image.jpg"
          }" alt="${title}" />
        </div>
        <div class="restaurant-news-item__description">
          <div class="restaurant-news-item__header">
            <p class="restaurant-news-item__author">${author}</p>
            <p class="restaurant-news-item__published">Published: ${new Date(
              publishedAt
            ).toDateString()}</p>
          </div>
          <a class="restaurant-news-item__link" href="${url}" aria-label="article ${title}">${title}</a>
          <p class="restaurant-news-item__paragraf">${description}</p>
        </div>
      </article>
    `;
  }
}

customElements.define("news-item-restaurant", RestaurantItem);
