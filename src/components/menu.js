import icon from "../images/ramen.svg";


const menu = () => {
    const mainEle = document.querySelector("main");

    let infoContainer = document.createElement("div");
    infoContainer.classList.add("info-contain", "info-contain-menu")
    
    let menuTitle = document.createElement("h1");
    menuTitle.classList.add("name")
    menuTitle.textContent="Menu";

    mainEle.appendChild(menuTitle)
    mainEle.appendChild(infoContainer)

    let menuItemOneContain = document.createElement("div")
    let imgTag = document.createElement("img")
    imgTag.src = icon
    imgTag.width = "80"
    
    infoContainer.appendChild(imgTag)
    
}


export default menu;