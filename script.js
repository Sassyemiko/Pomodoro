let timeLeft = 1 * 60; // 25 minutes in seconds
let timerId = null;
let isRunning = false;

const timeDisplay = document.getElementById('time-display');
const statusText = document.getElementById('status-text');

function updateDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    
    // Add a zero if seconds are less than 10 (e.g., 09 instead of 9)
    seconds = seconds < 10 ? '0' + seconds : seconds;
    
    timeDisplay.textContent = `${minutes}:${seconds}`;
}

function startTimer() {
    if (isRunning) return; // Don't start if already running
    
    isRunning = true;
    statusText.textContent = "📚 Stay Focused!";
    
    timerId = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateDisplay();
        } else {
            clearInterval(timerId);
            isRunning = false;
            statusText.textContent = "🎉 Time's up! Take a break.";
            alert("Study session complete!");
        }
    }, 1000); // Run every 1 second
}

function pauseTimer() {
    clearInterval(timerId);
    isRunning = false;
    statusText.textContent = "⏸️ Paused";
}

function resetTimer() {
    pauseTimer();
    timeLeft = 25 * 60;
    updateDisplay();
    statusText.textContent = "Ready to study?";
}