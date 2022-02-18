// setup nav
const navBtn = document.getElementById("nav-btn");
const navClose = document.getElementById("nav-close");
const navBar = document.getElementById("navbar");

// show navbar 
navBtn.addEventListener("click", () => {
    navBar.classList.add("showNav")
});

// hide navbar 
navClose.addEventListener("click", () => {
    navBar.classList.remove("showNav")
});

