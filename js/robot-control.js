document.addEventListener("DOMContentLoaded", function() {
    const statusDisplay = document.getElementById("robot-status");

    // Function to update status display
    function updateStatus(message) {
        statusDisplay.textContent = message;
    }

    // Event listeners for movement buttons
    document.getElementById("move-forward").addEventListener("click", () => {
        updateStatus("Moving forward...");
        // Send command to move forward (e.g., publish to ROS topic)
    });

    document.getElementById("move-backward").addEventListener("click", () => {
        updateStatus("Moving backward...");
        // Send command to move backward
    });

    document.getElementById("move-left").addEventListener("click", () => {
        updateStatus("Turning left...");
        // Send command to turn left
    });

    document.getElementById("move-right").addEventListener("click", () => {
        updateStatus("Turning right...");
        // Send command to turn right
    });

    document.getElementById("stop").addEventListener("click", () => {
        updateStatus("Robot stopped.");
        // Send command to stop the robot
    });
});
