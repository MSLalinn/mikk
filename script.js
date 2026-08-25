const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

const currentPage = document.body.dataset.page;
const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach((item) => {
  if (item.dataset.page === currentPage) {
    item.classList.add("active");
  }
});

const contactForm = document.querySelector("#contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("ขอบคุณสำหรับข้อความ เราจะติดต่อกลับโดยเร็วที่สุด");
    contactForm.reset();
  });
}
