import './styles/main.scss';
import './ts/App';
import { App } from './ts/App';

const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");
const mobileNav = document.querySelector(".mobile-nav");
const navMenu = document.querySelector(".nav-menu");

menuIcon?.addEventListener("click", () => {
  mobileNav?.classList.toggle("show");
	navMenu?.classList.toggle("show");
});
closeIcon?.addEventListener("click", () => {
	mobileNav?.classList.toggle("show");
});

const app = new App();
app.initialize();