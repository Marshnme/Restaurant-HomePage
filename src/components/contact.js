




const contact = () => {
    const mainEle = document.querySelector("main");
    
    let infoContainer = document.createElement("div");
    infoContainer.classList.add("info-contain")
    
    let contactTitle = document.createElement("h1");
    contactTitle.classList.add("name")
    contactTitle.textContent="Contact Us";

    mainEle.appendChild(contactTitle)
    mainEle.appendChild(infoContainer)

    let infoContainTitle = document.createElement("p")
    infoContainTitle.classList.add("info-contain-title")
    infoContainTitle.textContent = "Call or Email"

    infoContainer.prepend(infoContainTitle)

    let infoContentContainer = document.createElement("div")
    infoContentContainer.classList.add("info-content-container")
    infoContainer.appendChild(infoContentContainer)

    // Phone List html
    
    let phoneNumContain = document.createElement("div")
    phoneNumContain.classList.add("info-content")

    let phoneNumTitle = document.createElement("p")
    phoneNumTitle.classList.add("content-titles")
    phoneNumTitle.textContent = "Phone Numbers"
    phoneNumContain.appendChild(phoneNumTitle)
     
    let phoneNumOne = document.createElement("p")
    phoneNumOne.textContent = "GA - 123-456-789"
    phoneNumContain.appendChild(phoneNumOne)

    let phoneNumTwo = document.createElement("p")
    phoneNumTwo.textContent = "SC - 123-123-123"
    phoneNumContain.appendChild(phoneNumTwo)

    let phoneNumThree = document.createElement("p")
    phoneNumThree.textContent = "FL - 777-777-777"
    phoneNumContain.appendChild(phoneNumThree)



    // email html
    
    let emailContain = document.createElement("div")
    emailContain.classList.add("info-content")

    let emailTitle = document.createElement("p")
    emailTitle.classList.add("content-titles")
    emailTitle.textContent = "Emails"
    emailContain.appendChild(emailTitle)
     
    let emailOne = document.createElement("p")
    emailOne.textContent = "GAnoodles@email.com"
    emailContain.appendChild(emailOne)

    let emailTwo = document.createElement("p")
    emailTwo.textContent = "SCnoodles@email.com"
    emailContain.appendChild(emailTwo)

    let emailThree = document.createElement("p")
    emailThree.textContent = "FLnoodles@email.com"
    emailContain.appendChild(emailThree)








    infoContentContainer.appendChild(phoneNumContain)
    infoContentContainer.appendChild(emailContain)
}


export default contact;