document.addEventListener("DOMContentLoaded", function () {
  // Function to add a notification
  window.addNotification = function () {
    // Get the title and message from input fields
    const title = document.getElementById("notificationTitle").value;
    const message = document.getElementById("notificationMessage").value;

    // Check if both title and message are provided
    if (title && message) {
      // Create a new list item
      const li = document.createElement("li");
      li.classList.add("notification-item");
      li.innerHTML = `<strong>${title}</strong>: ${message}`;

      // Append the new item to the notifications list
      document.getElementById("notificationItems").appendChild(li);

      // Clear input fields
      document.getElementById("notificationTitle").value = "";
      document.getElementById("notificationMessage").value = "";
    } else {
      alert("Please enter both title and message.");
    }
  };
});
