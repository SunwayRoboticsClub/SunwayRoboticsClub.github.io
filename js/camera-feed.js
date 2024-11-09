// Camera feed element and control elements
const video = document.getElementById('camera');
const brightnessSlider = document.getElementById('brightness');
const contrastSlider = document.getElementById('contrast');
const brightnessValue = document.getElementById('brightness-value');
const contrastValue = document.getElementById('contrast-value');
const screenshotBtn = document.getElementById('screenshot-btn');
const recordBtn = document.getElementById('record-btn');

// Function to update the video filters based on slider values
function updateVideoFilters() {
    const brightness = brightnessSlider.value;
    const contrast = contrastSlider.value;
    video.style.filter = `brightness(${brightness}%) contrast(${contrast}%)`;

    brightnessValue.textContent = brightness;
    contrastValue.textContent = contrast;
}

// Event listeners for the sliders
brightnessSlider.addEventListener('input', updateVideoFilters);
contrastSlider.addEventListener('input', updateVideoFilters);

// Screenshot functionality
screenshotBtn.addEventListener('click', () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    // Set canvas size to the video dimensions
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    // Draw the current frame from the video on the canvas
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Convert canvas to image data
    const screenshotUrl = canvas.toDataURL('image/png');
    
    // Create a link to download the screenshot
    const link = document.createElement('a');
    link.href = screenshotUrl;
    link.download = 'screenshot.png';
    link.click();
});

// Recording functionality (basic example)
let mediaRecorder;
let recordedChunks = [];

recordBtn.addEventListener('click', () => {
    if (!mediaRecorder || mediaRecorder.state === 'inactive') {
        // Start recording
        const stream = video.captureStream();
        mediaRecorder = new MediaRecorder(stream);

        // Collect recorded chunks
        mediaRecorder.ondataavailable = event => recordedChunks.push(event.data);

        mediaRecorder.onstop = () => {
            const blob = new Blob(recordedChunks, { type: 'video/webm' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'recorded-video.webm';
            link.click();
        };

        mediaRecorder.start();
        recordBtn.textContent = 'Stop Recording';
    } else {
        // Stop recording
        mediaRecorder.stop();
        recordBtn.textContent = 'Start Recording';
    }
});
