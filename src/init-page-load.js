import "./style.css";
import { develop_home } from "./home-page-load";

function develop_nav() {
    const nav = document.createElement("nav");
    nav.classList.toggle("tab-bar");
    const nav_ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const button1 = document.createElement("button");
    button1.classList.toggle("tab-bar-ul-button");
    button1.setAttribute("type", "button");
    button1.setAttribute("id", "home");
    button1.textContent = "Home";
    li1.appendChild(button1);
    const li2 = document.createElement("li");
    const button2 = document.createElement("button");
    button2.classList.toggle("tab-bar-ul-button");
    button2.setAttribute("type", "button");
    button2.setAttribute("id", "menu");
    button2.textContent = "Menu";
    li2.appendChild(button2);
    const li3 = document.createElement("li");
    const button3 = document.createElement("button");
    button3.classList.toggle("tab-bar-ul-button");
    button3.setAttribute("type", "button");
    button3.setAttribute("id", "contact");
    button3.textContent = "Contact";
    li3.appendChild(button3);
    nav_ul.append(li1, li2, li3);
    nav_ul.classList.toggle("tab-bar-ul");
    nav.appendChild(nav_ul);
    return nav;
}



function init_page() {
    const content = document.querySelector("#content");
    content.classList.toggle("content");
    const nav = develop_nav();
    const home = develop_home();
    content.append(nav, home);
    return content;
} 

export { init_page, develop_nav };