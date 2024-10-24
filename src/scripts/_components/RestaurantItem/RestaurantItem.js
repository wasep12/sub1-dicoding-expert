import "./../../../styles/RestaurantItem.scss";
class RestaurantItem extends HTMLElement {
  set dataRestaurant(data) {
    if (!data) return; // Cek apakah data ada
    this.render(data);
  }

  render(data) {
    const { id, name, description, pictureId, city, rating } = data;

    // Escape function untuk mencegah XSS
    const escapeHTML = (str) => {
      const div = document.createElement("div");
      div.textContent = str;
      return div.innerHTML;
    };

    // Menambahkan gambar default jika pictureId tidak ada
    const imageUrl = pictureId ? pictureId : "./default-image.jpg";

    // Batasi panjang deskripsi untuk menjaga tampilan tetap rapi
    const truncatedDescription =
      description.length > 150
        ? `${description.substring(0, 150)}...`
        : description;

    this.innerHTML = `
        <article class="restaurant-item">
          <div class="restaurant-item__information">
            <span class="restaurant-item__rating">
            Rating:⭐ ${escapeHTML(rating.toString())}
            </span>
            <img class="restaurant-item__banner" src="${imageUrl}" alt="${escapeHTML(
      name
    )} ${escapeHTML(city)} restaurant image" />
          </div>
          <div class="restaurant-item__description">
            <a class="restaurant-item__link" href="/${escapeHTML(
              id
            )}" aria-label="article ${escapeHTML(name)} ${escapeHTML(city)}">
              ${escapeHTML(name)} - ${escapeHTML(city)}
            </a>
            <p class="restaurant-item__paragraf">${escapeHTML(
              truncatedDescription
            )}</p>
          </div>
        </article>
      `;
  }
}

customElements.define("restaurant-item", RestaurantItem);
