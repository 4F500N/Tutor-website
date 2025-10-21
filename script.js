// Toggle / Hamburger mobile menu
document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(".navbar .mobile-menu-toggle");

  const mobileMenu = document.querySelector(".navbar .mobile-menu-items");

  toggleButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
  });
});

// Change navbar bg on scroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 0) {
    navbar.classList.add("navbar-scroll");
  } else {
    navbar.classList.remove("navbar-scroll");
  }
});

// Scroll to top when clicking "Home" or "Contact" on the same page
const homeLinks = document.querySelectorAll(
  'a[href="index.html"], a[href="#home"]'
);
const contactLinks = document.querySelectorAll(
  'a[href="contact.html"], a[href="#contact"]'
);

homeLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    if (
      window.location.pathname.endsWith("index.html") ||
      window.location.pathname === "/"
    ) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });
});

contactLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    if (window.location.pathname.endsWith("contact.html")) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });
});
