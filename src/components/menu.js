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
    menuItemOneContain.classList.add("menu-item","menu-item-one")

    let menuItemTwoContain = document.createElement("div")
    menuItemTwoContain.classList.add("menu-item","menu-item-two")

    let menuItemThreeContain = document.createElement("div")
    menuItemThreeContain.classList.add("menu-item","menu-item-three")

    let menuItemFourContain = document.createElement("div")
    menuItemFourContain.classList.add("menu-item","menu-item-four")

    let menuItemFiveContain = document.createElement("div")
    menuItemFiveContain.classList.add("menu-item","menu-item-five")

    let menuItemSixContain = document.createElement("div")
    menuItemSixContain.classList.add("menu-item","menu-item-six")

    infoContainer.appendChild(menuItemOneContain)
    infoContainer.appendChild(menuItemTwoContain)
    infoContainer.appendChild(menuItemThreeContain)
    infoContainer.appendChild(menuItemFourContain)
    infoContainer.appendChild(menuItemFiveContain)
    infoContainer.appendChild(menuItemSixContain)

    let allItems = [...document.querySelectorAll(".menu-item")];

    console.log(allItems)

    allItems.map((item) => {
        let exampleText= document.createElement("p")
        exampleText.textContent = "food food food food"
    
        let imgTag = document.createElement("img")
            imgTag.src = icon
            imgTag.width = "65"
        item.appendChild(imgTag)
        item.appendChild(exampleText)
    })

    
}


export default menu;