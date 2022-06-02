


const menu = () => {
    const mainEle = document.querySelector("main");

    let infoContainer = document.createElement("div");
    infoContainer.classList.add("info-contain")
    
    let menuTitle = document.createElement("h1");
    menuTitle.classList.add("name")
    menuTitle.textContent="Menu";

    mainEle.appendChild(menuTitle)
    mainEle.appendChild(infoContainer)

    
    
}


export default menu;