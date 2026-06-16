function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    formMessage.textContent = "Message sent successfully. Thank you for contacting me!";
    formMessage.className = "form-message success";

    contactForm.reset();
  });
});