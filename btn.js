const toggleBtn = document.getElementById("mobile-icon");
const mobileMenu = document.getElementById("navbar-mobile");
let toggle = false;

toggleBtn.addEventListener("click", () => {
  if (toggle) {
    mobileMenu.classList.add("d-none");
    toggle = false;
  } else {
    mobileMenu.classList.remove("d-none");
    toggle = true;
  }
});
