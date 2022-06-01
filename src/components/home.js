



const home = () => {
    const mainEle = document.querySelector("main");
    let headerTest = document.createElement("h1");
    headerTest.textContent="Header";
    
    
    mainEle.appendChild(headerTest)
}


export default home;