import home from "./components/home"
import menu from "./components/menu"
import contact from "./components/contact"

const bodyEle = document.querySelector("body");

const contentDiv = document.createElement("div");
contentDiv.id = "content";

const navEle = document.createElement("nav");
const mainEle = document.createElement("main");

const homeNav = document.createElement("p");
homeNav.textContent = "Home";

const menuNav = document.createElement("p");
menuNav.textContent = "Menu";

const contactNav = document.createElement("p");
contactNav.textContent = "Contact";

navEle.appendChild(homeNav)
navEle.appendChild(menuNav)
navEle.appendChild(contactNav)

bodyEle.appendChild(contentDiv);
contentDiv.appendChild(navEle)
contentDiv.appendChild(mainEle)


function displayHome(){
    // mainEle.removeChild()
    mainEle.replaceChildren();
    return home()
}

function displayMenu(){
    // mainEle.removeChild()
    mainEle.replaceChildren();
    return menu()
}

function displayContact(){
    // mainEle.removeChild()
    mainEle.replaceChildren();
    return contact()
}

homeNav.addEventListener("click",displayHome)
menuNav.addEventListener("click",displayMenu)
contactNav.addEventListener("click",displayContact)


