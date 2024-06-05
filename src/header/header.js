import header from "./header.html?raw";
import "./header.scss";

const main = document.querySelector("main");

main.insertAdjacentHTML("beforebegin", header);
