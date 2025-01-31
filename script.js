document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contact-form");

  contactForm.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent actual form submission

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      let isValid = true;

      // Clear previous error messages
      document.querySelectorAll(".error-message").forEach(el => el.remove());

      // Validate name
      if (!name) {
          showError("name", "Name is required.");
          isValid = false;
      }

      // Validate email
      if (!email) {
          showError("email", "Email is required.");
          isValid = false;
      } else if (!validateEmail(email)) {
          showError("email", "Please enter a valid email address.");
          isValid = false;
      }

      // Validate message
      if (!message) {
          showError("message", "Message is required.");
          isValid = false;
      }

      if (isValid) {
          showNotification(`Thank you, ${name}! Your message has been received.`);
          contactForm.reset();
      }
  });

  function showError(fieldId, message) {
      const field = document.getElementById(fieldId);
      const errorMessage = document.createElement("div");
      errorMessage.className = "error-message";
      errorMessage.style.color = "red";
      errorMessage.textContent = message;
      field.parentNode.insertBefore(errorMessage, field.nextSibling);
  }

  function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(String(email).toLowerCase());
  }

  function showNotification(message) {
      const notification = document.createElement("div");
      notification.className = "notification";
      notification.style.backgroundColor = "#4CAF50";
      notification.style.color = "white";
      notification.style.padding = "10px";
      notification.style.marginTop = "10px";
      notification.style.borderRadius = "5px";
      notification.textContent = message;
      contactForm.appendChild(notification);
      setTimeout(() => {
          notification.remove();
      }, 3000);
  }
});