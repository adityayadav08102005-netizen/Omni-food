/////////////////////////////////////////////////
// Set current year

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();

yearEl.textContent = currentYear;

/////////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

////////////////////////////////////////////////
// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    // Scroll back to top
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({
        behavior: "smooth",
      });
    }

    // Close the mobile navigation
    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});

////////////////////////////////////////////////
// Sticky header

// ===== Modal Script =====
const aboutBtn = document.getElementById("aboutBtn");   // Navbar About Creator button
const aboutModal = document.getElementById("aboutModal"); // Modal container
const closePopup = document.querySelector(".close");    // X button inside modal

// Open modal when About Creator is clicked
aboutBtn.addEventListener("click", (e) => {
  e.preventDefault();
  aboutModal.style.display = "flex";
});

// Close modal when X is clicked
closePopup.addEventListener("click", () => {
  aboutModal.style.display = "none";
});

// Close modal if user clicks outside modal-content
window.addEventListener("click", (e) => {
  if (e.target === aboutModal) {
    aboutModal.style.display = "none";
  }
});

