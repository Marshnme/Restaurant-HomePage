import home from "./components/home"
import menu from "./components/menu"
import contact from "./components/contact"
import "./style.css"

const bodyEle = document.querySelector("body");

const contentDiv = document.createElement("div");
contentDiv.classList.add("content");

const navEle = document.createElement("nav");
navEle.classList.add("nav");

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
    mainEle.replaceChildren();
    return home()
}

function displayMenu(){
    mainEle.replaceChildren();
    return menu()
}

function displayContact(){
    mainEle.replaceChildren();
    return contact()
}

homeNav.addEventListener("click",displayHome)
menuNav.addEventListener("click",displayMenu)
contactNav.addEventListener("click",displayContact)


