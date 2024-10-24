import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.scss";
import "./_components/AppBar/AppBar";
import "./_components/Hero/Hero";
import "./_components/Footer/Footer";
import "./_components/ListRestaurant/ListRestaurant";
import "./_components/NewsListRestaurant/NewsListRestaurant";

document.addEventListener("DOMContentLoaded", () => {
  const hamburgerButton = document.getElementById("hamburger");

  hamburgerButton.addEventListener("click", () => {
    const navList = document.querySelector(".nav__list");
    navList.classList.toggle("active");
  });
});
