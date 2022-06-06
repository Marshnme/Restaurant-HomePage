"use strict";
(self["webpackChunkrestaurant_homepage"] = self["webpackChunkrestaurant_homepage"] || []).push([["index"],{

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/contact.js":
/*!***********************************!*\
  !*** ./src/components/contact.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });





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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);

/***/ }),

/***/ "./src/components/home.js":
/*!********************************!*\
  !*** ./src/components/home.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });




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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);

/***/ }),

/***/ "./src/components/menu.js":
/*!********************************!*\
  !*** ./src/components/menu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_ramen_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/ramen.svg */ "./src/images/ramen.svg");



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
            imgTag.classList.add("ramen-img")
            imgTag.src = _images_ramen_svg__WEBPACK_IMPORTED_MODULE_0__
            // imgTag.width = "65"
        item.appendChild(imgTag)
        item.appendChild(exampleText)
    })

    
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/home */ "./src/components/home.js");
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/menu */ "./src/components/menu.js");
/* harmony import */ var _components_contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/contact */ "./src/components/contact.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





const bodyEle = document.querySelector("body");

const contentDiv = document.createElement("div");
contentDiv.classList.add("content", "home-img");

const navEle = document.createElement("nav");
navEle.classList.add("nav");

const homeNav = document.createElement("p");
homeNav.textContent = "Home";
const menuNav = document.createElement("p");
menuNav.textContent = "Menu";
const contactNav = document.createElement("p");
contactNav.textContent = "Contact";
navEle.appendChild(homeNav)
navEle.appendChild(menuNav)
navEle.appendChild(contactNav)

const mainEle = document.createElement("main");

bodyEle.appendChild(contentDiv);
contentDiv.appendChild(navEle)
contentDiv.appendChild(mainEle)


function displayHome(){
    mainEle.replaceChildren();
    return (0,_components_home__WEBPACK_IMPORTED_MODULE_0__["default"])()
}

function displayMenu(){
    mainEle.replaceChildren();
    return (0,_components_menu__WEBPACK_IMPORTED_MODULE_1__["default"])()
}

function displayContact(){
    mainEle.replaceChildren();
    return (0,_components_contact__WEBPACK_IMPORTED_MODULE_2__["default"])()
}

homeNav.addEventListener("click",displayHome)
menuNav.addEventListener("click",displayMenu)
contactNav.addEventListener("click",displayContact)

window.onload = displayHome()



/***/ }),

/***/ "./src/images/ramen.svg":
/*!******************************!*\
  !*** ./src/images/ramen.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3f226babe7671861af69.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsT0FBTzs7Ozs7Ozs7Ozs7Ozs7QUN0RnRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsSUFBSTs7Ozs7Ozs7Ozs7Ozs7O0FDekVvQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qiw4Q0FBSTtBQUM3QjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLElBQUk7Ozs7Ozs7Ozs7Ozs7OztBQy9EaUI7QUFDQTtBQUNNO0FBQ3RCO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyw0REFBSTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyw0REFBSTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVywrREFBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS8uL3NyYy9zdHlsZS5jc3M/ZTMyMCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlLy4vc3JjL2NvbXBvbmVudHMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlLy4vc3JjL2NvbXBvbmVudHMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlLy4vc3JjL2NvbXBvbmVudHMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIlxyXG5cclxuXHJcblxyXG5cclxuY29uc3QgY29udGFjdCA9ICgpID0+IHtcclxuICAgIGNvbnN0IG1haW5FbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcclxuICAgIFxyXG4gICAgbGV0IGluZm9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgaW5mb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaW5mby1jb250YWluXCIpXHJcbiAgICBcclxuICAgIGxldCBjb250YWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgICBjb250YWN0VGl0bGUuY2xhc3NMaXN0LmFkZChcIm5hbWVcIilcclxuICAgIGNvbnRhY3RUaXRsZS50ZXh0Q29udGVudD1cIkNvbnRhY3QgVXNcIjtcclxuXHJcbiAgICBtYWluRWxlLmFwcGVuZENoaWxkKGNvbnRhY3RUaXRsZSlcclxuICAgIG1haW5FbGUuYXBwZW5kQ2hpbGQoaW5mb0NvbnRhaW5lcilcclxuXHJcbiAgICBsZXQgaW5mb0NvbnRhaW5UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXHJcbiAgICBpbmZvQ29udGFpblRpdGxlLmNsYXNzTGlzdC5hZGQoXCJpbmZvLWNvbnRhaW4tdGl0bGVcIilcclxuICAgIGluZm9Db250YWluVGl0bGUudGV4dENvbnRlbnQgPSBcIkNhbGwgb3IgRW1haWxcIlxyXG5cclxuICAgIGluZm9Db250YWluZXIucHJlcGVuZChpbmZvQ29udGFpblRpdGxlKVxyXG5cclxuICAgIGxldCBpbmZvQ29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIGluZm9Db250ZW50Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpbmZvLWNvbnRlbnQtY29udGFpbmVyXCIpXHJcbiAgICBpbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGluZm9Db250ZW50Q29udGFpbmVyKVxyXG5cclxuICAgIC8vIFBob25lIExpc3QgaHRtbFxyXG4gICAgXHJcbiAgICBsZXQgcGhvbmVOdW1Db250YWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgcGhvbmVOdW1Db250YWluLmNsYXNzTGlzdC5hZGQoXCJpbmZvLWNvbnRlbnRcIilcclxuXHJcbiAgICBsZXQgcGhvbmVOdW1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXHJcbiAgICBwaG9uZU51bVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJjb250ZW50LXRpdGxlc1wiKVxyXG4gICAgcGhvbmVOdW1UaXRsZS50ZXh0Q29udGVudCA9IFwiUGhvbmUgTnVtYmVyc1wiXHJcbiAgICBwaG9uZU51bUNvbnRhaW4uYXBwZW5kQ2hpbGQocGhvbmVOdW1UaXRsZSlcclxuICAgICBcclxuICAgIGxldCBwaG9uZU51bU9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXHJcbiAgICBwaG9uZU51bU9uZS50ZXh0Q29udGVudCA9IFwiR0EgLSAxMjMtNDU2LTc4OVwiXHJcbiAgICBwaG9uZU51bUNvbnRhaW4uYXBwZW5kQ2hpbGQocGhvbmVOdW1PbmUpXHJcblxyXG4gICAgbGV0IHBob25lTnVtVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcclxuICAgIHBob25lTnVtVHdvLnRleHRDb250ZW50ID0gXCJTQyAtIDEyMy0xMjMtMTIzXCJcclxuICAgIHBob25lTnVtQ29udGFpbi5hcHBlbmRDaGlsZChwaG9uZU51bVR3bylcclxuXHJcbiAgICBsZXQgcGhvbmVOdW1UaHJlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXHJcbiAgICBwaG9uZU51bVRocmVlLnRleHRDb250ZW50ID0gXCJGTCAtIDc3Ny03NzctNzc3XCJcclxuICAgIHBob25lTnVtQ29udGFpbi5hcHBlbmRDaGlsZChwaG9uZU51bVRocmVlKVxyXG5cclxuXHJcblxyXG4gICAgLy8gZW1haWwgaHRtbFxyXG4gICAgXHJcbiAgICBsZXQgZW1haWxDb250YWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgZW1haWxDb250YWluLmNsYXNzTGlzdC5hZGQoXCJpbmZvLWNvbnRlbnRcIilcclxuXHJcbiAgICBsZXQgZW1haWxUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXHJcbiAgICBlbWFpbFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJjb250ZW50LXRpdGxlc1wiKVxyXG4gICAgZW1haWxUaXRsZS50ZXh0Q29udGVudCA9IFwiRW1haWxzXCJcclxuICAgIGVtYWlsQ29udGFpbi5hcHBlbmRDaGlsZChlbWFpbFRpdGxlKVxyXG4gICAgIFxyXG4gICAgbGV0IGVtYWlsT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcclxuICAgIGVtYWlsT25lLnRleHRDb250ZW50ID0gXCJHQW5vb2RsZXNAZW1haWwuY29tXCJcclxuICAgIGVtYWlsQ29udGFpbi5hcHBlbmRDaGlsZChlbWFpbE9uZSlcclxuXHJcbiAgICBsZXQgZW1haWxUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxyXG4gICAgZW1haWxUd28udGV4dENvbnRlbnQgPSBcIlNDbm9vZGxlc0BlbWFpbC5jb21cIlxyXG4gICAgZW1haWxDb250YWluLmFwcGVuZENoaWxkKGVtYWlsVHdvKVxyXG5cclxuICAgIGxldCBlbWFpbFRocmVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcclxuICAgIGVtYWlsVGhyZWUudGV4dENvbnRlbnQgPSBcIkZMbm9vZGxlc0BlbWFpbC5jb21cIlxyXG4gICAgZW1haWxDb250YWluLmFwcGVuZENoaWxkKGVtYWlsVGhyZWUpXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIGluZm9Db250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHBob25lTnVtQ29udGFpbilcclxuICAgIGluZm9Db250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGVtYWlsQ29udGFpbilcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3Q7IiwiXHJcblxyXG5cclxuXHJcbmNvbnN0IGhvbWUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xyXG4gICAgY29uc3QgbWFpbkVsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xyXG4gICAgbGV0IGJ1aXNOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gICAgYnVpc05hbWUuY2xhc3NMaXN0LmFkZChcIm5hbWVcIilcclxuICAgIGJ1aXNOYW1lLnRleHRDb250ZW50PVwiTm9vZGxlIEJhclwiO1xyXG5cclxuICAgIGxldCBpbmZvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGluZm9Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImluZm8tY29udGFpblwiKVxyXG5cclxuICAgIGxldCBpbmZvQ29udGFpblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBpbmZvQ29udGFpblRpdGxlLmNsYXNzTGlzdC5hZGQoXCJpbmZvLWNvbnRhaW4tdGl0bGVcIilcclxuICAgIGluZm9Db250YWluVGl0bGUudGV4dENvbnRlbnQgPSBcIldoZW4gJiBXaGVyZVwiXHJcblxyXG4gICAgaW5mb0NvbnRhaW5lci5wcmVwZW5kKGluZm9Db250YWluVGl0bGUpO1xyXG5cclxuICAgIGxldCBpbmZvQ29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBpbmZvQ29udGVudENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaW5mby1jb250ZW50LWNvbnRhaW5lclwiKVxyXG4gICAgXHJcbiAgICBpbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGluZm9Db250ZW50Q29udGFpbmVyKVxyXG5cclxuICAgIC8vIEhPVVJTIEhUTUwgXHJcbiAgICBsZXQgaG91cnNDb250YWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgaG91cnNDb250YWluLmNsYXNzTGlzdC5hZGQoXCJpbmZvLWNvbnRlbnRcIilcclxuICAgIGxldCBob3Vyc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcclxuICAgIGhvdXJzVGl0bGUuY2xhc3NMaXN0LmFkZChcImNvbnRlbnQtdGl0bGVzXCIpXHJcbiAgICAvLyBob3Vycy5jbGFzc0xpc3QuYWRkKFwiaG91cnNcIilcclxuICAgIGhvdXJzVGl0bGUudGV4dENvbnRlbnQgPSBcIkhvdXJzXCJcclxuICAgIGxldCBtb25GcmkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxyXG4gICAgbW9uRnJpLnRleHRDb250ZW50ID0gXCJNb24gLSBGcmk6IDlhbS0xMHBtXCJcclxuICAgIGxldCBzYXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxyXG4gICAgc2F0LnRleHRDb250ZW50ID0gXCJTYXQ6IDEycG0tMTBwbVwiXHJcbiAgICBsZXQgc3VuZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcclxuICAgIHN1bmRheS50ZXh0Q29udGVudCA9IFwiU3VuOiAxMnBtLThwbVwiXHJcbiAgICBcclxuXHJcbiAgICAvLyBMT0NBVElPTiBIVE1MXHJcblxyXG4gICAgbGV0IGxvY2F0aW9uQ29udGFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIGxvY2F0aW9uQ29udGFpbi5jbGFzc0xpc3QuYWRkKFwiaW5mby1jb250ZW50XCIpXHJcblxyXG4gICAgbGV0IGxvY2F0aW9uVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxyXG4gICAgbG9jYXRpb25UaXRsZS5jbGFzc0xpc3QuYWRkKFwiY29udGVudC10aXRsZXNcIilcclxuICAgIGxvY2F0aW9uVGl0bGUudGV4dENvbnRlbnQgPSBcIkxvY2F0aW9uc1wiXHJcbiAgICBsZXQgbG9jYXRpb25PbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxyXG4gICAgbG9jYXRpb25PbmUudGV4dENvbnRlbnQgPSBcIkdBIC0gZmFrZSBhZGR5IGFkZHlcIlxyXG4gICAgbGV0IGxvY2F0aW9uVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcclxuICAgIGxvY2F0aW9uVHdvLnRleHRDb250ZW50ID0gXCJTQyAtIGZha2UgYWRkeSBhZGR5XCJcclxuICAgIGxldCBsb2NhdGlvblRocmVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcclxuICAgIGxvY2F0aW9uVGhyZWUudGV4dENvbnRlbnQgPSBcIkZMIC0gZmFrZSBhZGR5IGFkZHlcIlxyXG4gICAgXHJcbiAgICBcclxuICAgIG1haW5FbGUuYXBwZW5kQ2hpbGQoYnVpc05hbWUpXHJcbiAgICBtYWluRWxlLmFwcGVuZENoaWxkKGluZm9Db250YWluZXIpXHJcbiAgICBpbmZvQ29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChob3Vyc0NvbnRhaW4pXHJcbiAgICBpbmZvQ29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChsb2NhdGlvbkNvbnRhaW4pXHJcblxyXG4gICAgaG91cnNDb250YWluLmFwcGVuZENoaWxkKGhvdXJzVGl0bGUpXHJcbiAgICBob3Vyc0NvbnRhaW4uYXBwZW5kQ2hpbGQobW9uRnJpKVxyXG4gICAgaG91cnNDb250YWluLmFwcGVuZENoaWxkKHNhdClcclxuICAgIGhvdXJzQ29udGFpbi5hcHBlbmRDaGlsZChzdW5kYXkpXHJcblxyXG4gICAgbG9jYXRpb25Db250YWluLmFwcGVuZENoaWxkKGxvY2F0aW9uVGl0bGUpXHJcbiAgICBsb2NhdGlvbkNvbnRhaW4uYXBwZW5kQ2hpbGQobG9jYXRpb25PbmUpXHJcbiAgICBsb2NhdGlvbkNvbnRhaW4uYXBwZW5kQ2hpbGQobG9jYXRpb25Ud28pXHJcbiAgICBsb2NhdGlvbkNvbnRhaW4uYXBwZW5kQ2hpbGQobG9jYXRpb25UaHJlZSlcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhvbWU7IiwiaW1wb3J0IGljb24gZnJvbSBcIi4uL2ltYWdlcy9yYW1lbi5zdmdcIjtcclxuXHJcblxyXG5jb25zdCBtZW51ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbWFpbkVsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xyXG5cclxuICAgIGxldCBpbmZvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGluZm9Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImluZm8tY29udGFpblwiLCBcImluZm8tY29udGFpbi1tZW51XCIpXHJcbiAgICBcclxuICAgIGxldCBtZW51VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgICBtZW51VGl0bGUuY2xhc3NMaXN0LmFkZChcIm5hbWVcIilcclxuICAgIG1lbnVUaXRsZS50ZXh0Q29udGVudD1cIk1lbnVcIjtcclxuXHJcbiAgICBtYWluRWxlLmFwcGVuZENoaWxkKG1lbnVUaXRsZSlcclxuICAgIG1haW5FbGUuYXBwZW5kQ2hpbGQoaW5mb0NvbnRhaW5lcilcclxuXHJcbiAgICBcclxuICAgIFxyXG4gICAgbGV0IG1lbnVJdGVtT25lQ29udGFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIG1lbnVJdGVtT25lQ29udGFpbi5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtXCIsXCJtZW51LWl0ZW0tb25lXCIpXHJcblxyXG4gICAgbGV0IG1lbnVJdGVtVHdvQ29udGFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIG1lbnVJdGVtVHdvQ29udGFpbi5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtXCIsXCJtZW51LWl0ZW0tdHdvXCIpXHJcblxyXG4gICAgbGV0IG1lbnVJdGVtVGhyZWVDb250YWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgbWVudUl0ZW1UaHJlZUNvbnRhaW4uY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbVwiLFwibWVudS1pdGVtLXRocmVlXCIpXHJcblxyXG4gICAgbGV0IG1lbnVJdGVtRm91ckNvbnRhaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBtZW51SXRlbUZvdXJDb250YWluLmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW1cIixcIm1lbnUtaXRlbS1mb3VyXCIpXHJcblxyXG4gICAgbGV0IG1lbnVJdGVtRml2ZUNvbnRhaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBtZW51SXRlbUZpdmVDb250YWluLmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW1cIixcIm1lbnUtaXRlbS1maXZlXCIpXHJcblxyXG4gICAgbGV0IG1lbnVJdGVtU2l4Q29udGFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIG1lbnVJdGVtU2l4Q29udGFpbi5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtXCIsXCJtZW51LWl0ZW0tc2l4XCIpXHJcblxyXG4gICAgaW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51SXRlbU9uZUNvbnRhaW4pXHJcbiAgICBpbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVJdGVtVHdvQ29udGFpbilcclxuICAgIGluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQobWVudUl0ZW1UaHJlZUNvbnRhaW4pXHJcbiAgICBpbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVJdGVtRm91ckNvbnRhaW4pXHJcbiAgICBpbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVJdGVtRml2ZUNvbnRhaW4pXHJcbiAgICBpbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVJdGVtU2l4Q29udGFpbilcclxuXHJcbiAgICBsZXQgYWxsSXRlbXMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tZW51LWl0ZW1cIildO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGFsbEl0ZW1zKVxyXG5cclxuICAgIGFsbEl0ZW1zLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGxldCBleGFtcGxlVGV4dD0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcclxuICAgICAgICBleGFtcGxlVGV4dC50ZXh0Q29udGVudCA9IFwiZm9vZCBmb29kIGZvb2QgZm9vZFwiXHJcbiAgICBcclxuICAgICAgICBsZXQgaW1nVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxyXG4gICAgICAgICAgICBpbWdUYWcuY2xhc3NMaXN0LmFkZChcInJhbWVuLWltZ1wiKVxyXG4gICAgICAgICAgICBpbWdUYWcuc3JjID0gaWNvblxyXG4gICAgICAgICAgICAvLyBpbWdUYWcud2lkdGggPSBcIjY1XCJcclxuICAgICAgICBpdGVtLmFwcGVuZENoaWxkKGltZ1RhZylcclxuICAgICAgICBpdGVtLmFwcGVuZENoaWxkKGV4YW1wbGVUZXh0KVxyXG4gICAgfSlcclxuXHJcbiAgICBcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lbnU7IiwiaW1wb3J0IGhvbWUgZnJvbSBcIi4vY29tcG9uZW50cy9ob21lXCJcclxuaW1wb3J0IG1lbnUgZnJvbSBcIi4vY29tcG9uZW50cy9tZW51XCJcclxuaW1wb3J0IGNvbnRhY3QgZnJvbSBcIi4vY29tcG9uZW50cy9jb250YWN0XCJcclxuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIlxyXG5cclxuY29uc3QgYm9keUVsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xyXG5cclxuY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbmNvbnRlbnREaXYuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRcIiwgXCJob21lLWltZ1wiKTtcclxuXHJcbmNvbnN0IG5hdkVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XHJcbm5hdkVsZS5jbGFzc0xpc3QuYWRkKFwibmF2XCIpO1xyXG5cclxuY29uc3QgaG9tZU5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG5ob21lTmF2LnRleHRDb250ZW50ID0gXCJIb21lXCI7XHJcbmNvbnN0IG1lbnVOYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxubWVudU5hdi50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xyXG5jb25zdCBjb250YWN0TmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbmNvbnRhY3ROYXYudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcclxubmF2RWxlLmFwcGVuZENoaWxkKGhvbWVOYXYpXHJcbm5hdkVsZS5hcHBlbmRDaGlsZChtZW51TmF2KVxyXG5uYXZFbGUuYXBwZW5kQ2hpbGQoY29udGFjdE5hdilcclxuXHJcbmNvbnN0IG1haW5FbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcclxuXHJcbmJvZHlFbGUuYXBwZW5kQ2hpbGQoY29udGVudERpdik7XHJcbmNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobmF2RWxlKVxyXG5jb250ZW50RGl2LmFwcGVuZENoaWxkKG1haW5FbGUpXHJcblxyXG5cclxuZnVuY3Rpb24gZGlzcGxheUhvbWUoKXtcclxuICAgIG1haW5FbGUucmVwbGFjZUNoaWxkcmVuKCk7XHJcbiAgICByZXR1cm4gaG9tZSgpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlNZW51KCl7XHJcbiAgICBtYWluRWxlLnJlcGxhY2VDaGlsZHJlbigpO1xyXG4gICAgcmV0dXJuIG1lbnUoKVxyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5Q29udGFjdCgpe1xyXG4gICAgbWFpbkVsZS5yZXBsYWNlQ2hpbGRyZW4oKTtcclxuICAgIHJldHVybiBjb250YWN0KClcclxufVxyXG5cclxuaG9tZU5hdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixkaXNwbGF5SG9tZSlcclxubWVudU5hdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixkaXNwbGF5TWVudSlcclxuY29udGFjdE5hdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixkaXNwbGF5Q29udGFjdClcclxuXHJcbndpbmRvdy5vbmxvYWQgPSBkaXNwbGF5SG9tZSgpXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=