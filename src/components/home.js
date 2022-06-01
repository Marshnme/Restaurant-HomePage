



const home = () => {
    const contentDiv = document.querySelector(".content");
    contentDiv.classList.add("home-img")
    const mainEle = document.querySelector("main");
    let headerTest = document.createElement("h1");
    headerTest.textContent="Home";
    
    
    mainEle.appendChild(headerTest)
}


export default home;