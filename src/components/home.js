



const home = () => {
    const contentDiv = document.querySelector("#content")
    let headerTest = document.createElement("h1");
    headerTest.textContent="Header";
    
    
    contentDiv.appendChild(headerTest)
}


export default home;