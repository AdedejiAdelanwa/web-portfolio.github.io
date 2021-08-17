const navBar = document.getElementById("navbar");
const navLinks = document.getElementById("nav-links");
const openMenu = document.getElementById("open");
const closeMenu = document.getElementById("close");

openMenu.addEventListener("click", () => {
  openMenu.style.display = "none";
  closeMenu.style.display = "block";
  navBar.style.height = "70vh";
  navBar.style.justifyContent = "flex-end";
  navLinks.style.display = "flex";
  navLinks.style.flexDirection = "column";
  navLinks.height = "60%";
});

closeMenu.addEventListener("click", () => {
  closeMenu.style.display = "none";
  openMenu.style.display = "block";
  navBar.style.height = "12vh";
  navLinks.style.display = "none";
  navBar.style.justifyContent = "center";
});
