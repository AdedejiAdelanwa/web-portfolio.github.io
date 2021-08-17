const navBar = document.getElementById("navbar");
const navLinks = document.getElementById("nav-links");
const openMenu = document.getElementById("open");
const closeMenu = document.getElementById("close");
const aboutLink = document.getElementById("about-link");
const detailsEl = document.getElementById("details");
const yearEl = document.getElementById("year");

openMenu.addEventListener("click", () => {
  openMenu.style.display = "none";
  closeMenu.style.display = "block";
  navBar.style.position = "fixed";
  navBar.style.backgroundColor = "rgba(39, 39, 39, 0.7)";
  navBar.style.height = "60vh";
  navBar.style.justifyContent = "flex-end";
  navLinks.style.display = "flex";
  navLinks.style.flexDirection = "column";
  navLinks.height = "60%";
});

closeMenu.addEventListener("click", () => {
  closeMenu.style.display = "none";
  openMenu.style.display = "block";
  navBar.style.height = "12vh";
  navBar.style.backgroundColor = "rgb(39, 39, 39)";
  navLinks.style.display = "none";
  navBar.style.justifyContent = "center";
});

aboutLink.addEventListener("click", () => {
  console.log("Link");
  detailsEl.setAttribute("open", "true");
});

yearEl.innerText = new Date().getFullYear();
