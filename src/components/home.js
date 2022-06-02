



const home = () => {
    const contentDiv = document.querySelector(".content");
    const mainEle = document.querySelector("main");
    let buisName = document.createElement("h1");
    buisName.classList.add("name")
    buisName.textContent="Noodle Bar";

    let infoContainer = document.createElement("div");
    infoContainer.classList.add("info-contain")

    let infoContainTitle = document.createElement("p");
    infoContainTitle.classList.add("info-contain-title")
    infoContainTitle.textContent = "When & Where"

    infoContainer.prepend(infoContainTitle);

    let infoContentContainer = document.createElement("div");
    infoContentContainer.classList.add("info-content-container")
    
    infoContainer.appendChild(infoContentContainer)

    // HOURS HTML 
    let hoursContain = document.createElement("div")
    hoursContain.classList.add("info-content")
    let hoursTitle = document.createElement("p")
    hoursTitle.classList.add("content-titles")
    // hours.classList.add("hours")
    hoursTitle.textContent = "Hours"
    let monFri = document.createElement("p")
    monFri.textContent = "Mon - Fri: 9am-10pm"
    let sat = document.createElement("p")
    sat.textContent = "Sat: 12pm-10pm"
    let sunday = document.createElement("p")
    sunday.textContent = "Sun: 12pm-8pm"
    

    // LOCATION HTML

    let locationContain = document.createElement("div")
    locationContain.classList.add("info-content")

    let locationTitle = document.createElement("p")
    locationTitle.classList.add("content-titles")
    locationTitle.textContent = "Locations"
    let locationOne = document.createElement("p")
    locationOne.textContent = "GA - fake addy addy"
    let locationTwo = document.createElement("p")
    locationTwo.textContent = "SC - fake addy addy"
    let locationThree = document.createElement("p")
    locationThree.textContent = "FL - fake addy addy"
    
    
    mainEle.appendChild(buisName)
    mainEle.appendChild(infoContainer)
    infoContentContainer.appendChild(hoursContain)
    infoContentContainer.appendChild(locationContain)

    hoursContain.appendChild(hoursTitle)
    hoursContain.appendChild(monFri)
    hoursContain.appendChild(sat)
    hoursContain.appendChild(sunday)

    locationContain.appendChild(locationTitle)
    locationContain.appendChild(locationOne)
    locationContain.appendChild(locationTwo)
    locationContain.appendChild(locationThree)
}


export default home;