// Show welcome popup when the page loads
window.onload = function () {
  showWelcomePopup();
};

// Function to show a welcome popup and set the user's name
function showWelcomePopup() {
  let userName = prompt("Please enter your name:");

  // If the user clicks "Cancel", userName will be null
  if (userName !== null && userName.trim() !== '') {
    document.getElementById('welcome-user').innerHTML = userName;
  } else {
    alert("Name cannot be empty. Please try again.");
    showWelcomePopup(); // Retry if no name is entered
  }
}