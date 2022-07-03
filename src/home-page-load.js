import Restaurant from "./jay.jpg";

function develop_headline() {
    const headline = document.createElement("section");
    headline.classList.toggle("headline");
    headline.setAttribute("id", "headline");
    const headline_p = document.createElement("p");
    headline_p.textContent = "Welcome to the best restaurant of town!";
    headline.appendChild(headline_p);
    return headline;
}

function develop_image() {
    const image = document.createElement("section");
    image.classList.toggle("image");
    const image_img = document.createElement("img");
    image_img.classList.toggle("image-img");
    image_img.setAttribute("src", Restaurant);
    image_img.setAttribute("alt", "A restaurant");
    const image_p = document.createElement("p");
    const image_p_span1 = document.createElement("span");
    image_p_span1.textContent = "Photo by ";
    const image_p_a1 = document.createElement("a");
    image_p_a1.setAttribute("href", "https://unsplash.com/@jaywennington?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText");
    image_p_a1.textContent = "Jay Wennington";
    const image_p_span2 = document.createElement("span");
    image_p_span2.textContent = "on";
    const image_p_a2 = document.createElement("a");
    image_p_a2.setAttribute("href", "https://unsplash.com/s/photos/restaurant?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText");
    image_p_a2.textContent = "Unsplash";
    image_p.append(image_p_span1, image_p_a1, image_p_span2, image_p_a2);
    image.append(image_img, image_p);
    return image;
}

function develop_home() {
    const home = document.createElement("div");
    home.classList.toggle("home");
    home.appendChild(develop_headline());
    home.appendChild(develop_image());
    return home;
}

export { develop_home };