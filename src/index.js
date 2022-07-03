import { init_page } from "./init-page-load";
import { develop_home } from "./home-page-load";
import { develop_menu } from "./menu-page-load";
import { develop_contact } from "./contact-page-load";

function delete_children_exept_nav(element) {
    while (element.lastElementChild != element.firstElementChild) {
        element.removeChild(element.lastElementChild);
    } 
}

function develop_div(div_developer) {
    const content = document.querySelector("#content");
    delete_children_exept_nav(content);
    const div = div_developer();
    content.appendChild(div);
}

function develop() {
    const content = document.querySelector("#content");
    init_page();
    const homeButton = document.querySelector("#home");
    homeButton.addEventListener("click", develop_div.bind(content, develop_home));
    const menuButton = document.querySelector("#menu");
    menuButton.addEventListener("click", develop_div.bind(content, develop_menu));
    const contactButton = document.querySelector("#contact");
    contactButton.addEventListener("click", develop_div.bind(content, develop_contact));
}

develop();