let gameFrame = 0;
let score = 0;
let timerCount;
const scoreContainer = document.querySelector('.score-container');
const floorHeight = canvas.height * .065;

// Initiates game frame rate for all animations, maintained at constant speed, clears canvas every frame
function frameRate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    scoreContainer.innerHTML = `Score: ${score}`;
    gameFrame++;
    requestAnimationFrame(frameRate);
    randomNumber = Math.floor(Math.random() * 100) + 100;
}

function scoreCount() {
    timerCount = setInterval(function () {
        if (!endGame) {
            score++; // Increment score by 1
        }
    }, 1000); // 1000ms = 1 second
}

frameRate();
scoreCount();