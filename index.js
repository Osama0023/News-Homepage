const navbar = document.querySelector("nav");
const openMenue = document.getElementById("menue-open");
const closeMenue = document.getElementById("menue-close");

openMenue.addEventListener("click" ,() =>{
navbar.classList.add("open");
});

closeMenue.addEventListener("click" ,() =>{
    navbar.classList.remove("open");
    });