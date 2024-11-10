// Load settings from localStorage on page load
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("speed-limit").value = localStorage.getItem("speedLimit") || 5;
    document.getElementById("sensitivity").value = localStorage.getItem("sensitivity") || 5;
    document.getElementById("resolution").value = localStorage.getItem("resolution") || "1080p";
    document.getElementById("frame-rate").value = localStorage.getItem("frameRate") || 30;
    document.getElementById("theme").value = localStorage.getItem("theme") || "light";
    document.getElementById("sound").checked = JSON.parse(localStorage.getItem("sound") || "true");
});

// Save settings to localStorage on button click
document.getElementById("save-settings").addEventListener("click", function() {
    localStorage.setItem("speedLimit", document.getElementById("speed-limit").value);
    localStorage.setItem("sensitivity", document.getElementById("sensitivity").value);
    localStorage.setItem("resolution", document.getElementById("resolution").value);
    localStorage.setItem("frameRate", document.getElementById("frame-rate").value);
    localStorage.setItem("theme", document.getElementById("theme").value);
    localStorage.setItem("sound", document.getElementById("sound").checked);

    alert("Settings saved successfully!");
});
