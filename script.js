// Handle the contact form submission
document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contact-form");
  
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent actual form submission
  
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
  
      if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been received.`);
        contactForm.reset();
      } else {
        alert("Please fill out all fields before submitting.");
      }
    });
  });
  