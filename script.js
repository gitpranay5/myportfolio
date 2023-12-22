function toggleMenu(){
    const menu = document.querySelector(" .menu-links");
    const icon = document.querySelector(" .hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active");
}