
// ROBOT CONTROLS

// Example JavaScript for the robot controls
document.getElementById('move-forward').addEventListener('click', () => {
    document.getElementById('robot-status').textContent = 'Moving Forward...';
    // Send control signal to robot
});

document.getElementById('move-backward').addEventListener('click', () => {
    document.getElementById('robot-status').textContent = 'Moving Backward...';
    // Send control signal to robot
});

document.getElementById('move-left').addEventListener('click', () => {
    document.getElementById('robot-status').textContent = 'Turning Left...';
    // Send control signal to robot
});

document.getElementById('move-right').addEventListener('click', () => {
    document.getElementById('robot-status').textContent = 'Turning Right...';
    // Send control signal to robot
});

document.getElementById('stop').addEventListener('click', () => {
    document.getElementById('robot-status').textContent = 'Stopped';
    // Send stop signal to robot
});

document.getElementById('speed').addEventListener('input', (event) => {
    const speed = event.target.value;
    document.getElementById('speed-value').textContent = speed;
    // Send speed adjustment signal to robot
});

document.getElementById('reset').addEventListener('click', () => {
    document.getElementById('robot-status').textContent = 'Resetting Robot...';
    // Send reset signal to robot
});



// CAMERA


// Handle Start Camera Feed button
document.getElementById('start-camera').addEventListener('click', function() {
    document.getElementById('camera').play();
});

// Handle Start Control Panel button
document.getElementById('start-control').addEventListener('click', function() {
    alert('Opening the Control Panel...');
    // Logic to open control panel
});

// Handle View Robot Status button
document.getElementById('view-status').addEventListener('click', function() {
    alert('Displaying the Robot Status...');
    // Display status information (Battery, Speed, etc.)
});

document.getElementById('view-analytics').addEventListener('click', function() {
    window.location.href = '/analytics';  // Replace with actual URL or page for analytics
});



document.getElementById('emergency-stop').addEventListener('click', function() {
    console.log('Emergency Stop Activated');
});

document.getElementById('pick-up-object').addEventListener('click', function() {
    console.log('Picking up object');
});

document.getElementById('flip').addEventListener('click', function() {
    console.log('Flipping');
});

document.getElementById('activate-sensors').addEventListener('click', function() {
    console.log('Sensors Activated');
});

function updateStatus(statusText) {
    document.getElementById('robot-status').textContent = statusText;
}

document.getElementById('reset').addEventListener('click', function() {
    console.log('Resetting Robot');
    updateStatus('Ready');
});
