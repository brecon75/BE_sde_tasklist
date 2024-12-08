const form = document.getElementById("contactForm");
const resultDiv = document.getElementById("result");
const displayName = document.getElementById("displayName");
const displayEmail = document.getElementById("displayEmail");
const displayMessage = document.getElementById("displayMessage");

const charCount = document.getElementById("charCount");
const messageInput = document.getElementById("message");


messageInput.addEventListener("input", function() {
  const remainingChars = 200 - messageInput.value.length;
  charCount.textContent = `${remainingChars} characters remaining`;
});


form.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission to backend


  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;


  if (!name || !email || !message) {
    alert("All fields must be filled out!");
    return;
  }

  displayName.textContent = name;
  displayEmail.textContent = email;
  displayMessage.textContent = message;


  resultDiv.style.display = "block";
});
