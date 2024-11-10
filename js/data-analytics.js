// Placeholder: Chart.js initialization for battery, speed, and distance charts
document.addEventListener("DOMContentLoaded", function() {
    const batteryCtx = document.getElementById('battery-chart').getContext('2d');
    const speedCtx = document.getElementById('speed-chart').getContext('2d');
    const distanceCtx = document.getElementById('distance-chart').getContext('2d');

    new Chart(batteryCtx, {
        type: 'line',
        data: {
            labels: ['Time 1', 'Time 2', 'Time 3'], // example labels
            datasets: [{ label: 'Battery Life', data: [100, 95, 90], backgroundColor: 'rgba(54, 162, 235, 0.2)' }]
        }
    });

    new Chart(speedCtx, {
        type: 'line',
        data: {
            labels: ['Time 1', 'Time 2', 'Time 3'],
            datasets: [{ label: 'Speed', data: [1, 2, 3], backgroundColor: 'rgba(75, 192, 192, 0.2)' }]
        }
    });

    new Chart(distanceCtx, {
        type: 'line',
        data: {
            labels: ['Time 1', 'Time 2', 'Time 3'],
            datasets: [{ label: 'Distance Traveled', data: [10, 20, 30], backgroundColor: 'rgba(153, 102, 255, 0.2)' }]
        }
    });
});

// Export data functionality
document.getElementById('export-csv').addEventListener('click', () => {
    exportData('csv');
});

document.getElementById('export-json').addEventListener('click', () => {
    exportData('json');
});

function exportData(format) {
    const data = [
        { timestamp: '2024-01-01 10:00', action: 'Move Forward', status: 'Complete', sensorReadings: 'Battery: 95%' },
        { timestamp: '2024-01-01 10:01', action: 'Move Backward', status: 'Complete', sensorReadings: 'Battery: 94%' }
    ];
    
    const dataStr = format === 'json' ? JSON.stringify(data, null, 2) : convertToCSV(data);
    const blob = new Blob([dataStr], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = `robot_data.${format}`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
}

function convertToCSV(data) {
    const header = Object.keys(data[0]).join(',');
    const rows = data.map(entry => Object.values(entry).join(','));
    return [header, ...rows].join('\n');
}
