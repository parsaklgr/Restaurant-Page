import "./style.css";

function develop_menu() {
    const menu = document.createElement("div");
    menu.classList.toggle("menu");
    const headers = ["pizaa", "hamnurger", "pasta", "noodle", "steak", "cheese"]
    for (let i = 0; i < 6; i++){
        let food = document.createElement("section");
        food.classList.toggle("menu-food");
        let header = document.createElement("h2");
        header.textContent = headers[i];
        let p = document.createElement("p");
        p.textContent = "delicious!";
        food.append(header, p);
        menu.appendChild(food);
    }
    return menu;
}

export { develop_menu };
    