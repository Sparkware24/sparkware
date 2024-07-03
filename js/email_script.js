// Initialize EmailJS
(function () {
  emailjs.init("9ZyYDtNNEepuOYIxI"); // Replace with your EmailJS public key
})();

// Handle contact form submission
document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  // Collect form data
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("message").value;

  console.log(name, email, subject, message);

  // Send email using EmailJS
  emailjs
    .send("service_m95spyl", "template_pa0fw5t", {
      name,
      email,
      subject,
      message,
    })
    .then(
      function (response) {
        alert("Message sent successfully!");
      },
      function (error) {
        alert("Failed to send message.");
      }
    );

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("subject").value = "";
  document.getElementById("message").value = "";
});
