// Example of controlling robot movement and speed
document.getElementById('move-forward').addEventListener('click', function() {
    console.log('Moving forward...');
    // Send command to robot here (e.g., via WebSocket or API)
});

document.getElementById('move-backward').addEventListener('click', function() {
    console.log('Moving backward...');
    // Send command to robot here
});

document.getElementById('move-left').addEventListener('click', function() {
    console.log('Moving left...');
    // Send command to robot here
});

document.getElementById('move-right').addEventListener('click', function() {
    console.log('Moving right...');
    // Send command to robot here
});

document.getElementById('stop').addEventListener('click', function() {
    console.log('Stopping robot...');
    // Send stop command to robot here
});

document.getElementById('speed').addEventListener('input', function() {
    let speed = document.getElementById('speed').value;
    document.getElementById('speed-value').textContent = speed;
    console.log(`Speed set to ${speed}`);
});
