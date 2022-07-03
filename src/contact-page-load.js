import "./style.css";

function develop_contact() {
    const contact = document.createElement("div");
    contact.classList.toggle("contact");
    const contact_h2 = document.createElement("h2");
    contact_h2.textContent = "Contact Us";
    const contact_section = document.createElement("section");
    contact_section.classList.toggle("contact-section");
    const contact_section_h3 = document.createElement("h3");
    contact_section_h3.textContent = "Great Chef";
    const contact_section_p = document.createElement("p");
    contact_section_p.textContent = "fakeEmail@fake.com";
    contact_section.append(contact_section_h3, contact_section_p);
    contact.append(contact_h2, contact_section);
    return contact;
}

export { develop_contact };