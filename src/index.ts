import './styles/main.scss';
import './ts/App';
import { App } from './ts/App';

const menuBar = document.querySelector(".menu-bar");
const menuButton = document.querySelector(".menu-button");
menuButton?.addEventListener("click", () => {
	menuBar?.classList.toggle("hide-menu");
});

const app = new App();
app.initialize();