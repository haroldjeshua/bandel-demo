import generateJoke from "./generateJoke";
import "./styles/main.scss";
import logo from "./assets/layer5.svg";

const logoImg = document.querySelector("#logoImg");

logoImg.src = logo;

const jokeBtn = document.getElementById("jokeBtn");
jokeBtn.addEventListener("click", generateJoke);

generateJoke();
