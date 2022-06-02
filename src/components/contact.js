




const contact = () => {
    const mainEle = document.querySelector("main");
    
    let infoContainer = document.createElement("div");
    infoContainer.classList.add("info-contain")
    
    let contactTitle = document.createElement("h1");
    contactTitle.classList.add("name")
    contactTitle.textContent="Contact Us";

    mainEle.appendChild(contactTitle)
    mainEle.appendChild(infoContainer)
}


export default contact;