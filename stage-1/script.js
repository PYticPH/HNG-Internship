// Function to update the time display

function updateTime() {
    // Get the current time in milliseconds since the Unix epoch (January 1, 1970)
    const currentTimeMs = new Date().getTime();

    // Select the target HTML element
    const timeElement = document.getElementById('current-time');

    // Check if the element exists before trying to update its content
    if (timeElement) {
        timeElement.textContent = currentTimeMs;
    }
}

// Initial call to display the time immediately
updateTime();

// Set an interval to call the updateTime function every 100 milliseconds (0.1 second)
const intervalId = setInterval(updateTime, 100);