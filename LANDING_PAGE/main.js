const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click" , (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
        menuBtnIcon.setAttribute("class",isOpen ? "ri-close-line" : "ri-menu-line");
 
});

navLinks.addEventListener("click" , (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

scrollRevealOption().reveal(".header_image img" ,{
    ...scrollRevealOption,
    origin: "right",
});

scrollRevealOption().reveal(".header_content h2" ,{
    ...scrollRevealOption,
    delay: 500,
});

scrollRevealOption().reveal(".header_content h1" ,{
    ...scrollRevealOption,
    delay: 1000,
});

scrollRevealOption().reveal(".header_content p" ,{
    ...scrollRevealOption,
    delay: 1500,
});

scrollRevealOption().reveal(".header_content .header_btn" ,{
    ...scrollRevealOption,
    delay: 2000,
});

scrollRevealOption().reveal(".header_content .socials" ,{
    ...scrollRevealOption,
    delay: 2500,
});

scrollRevealOption().reveal(".header_bar" ,{
    ...scrollRevealOption,
    delay: 3000,
});


