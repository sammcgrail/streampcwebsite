console.log("stopwatchjsfile");

document.getElementById("startButton").addEventListener('click', startTimer);
document.getElementById("stopButton").addEventListener('click', stopTimer);
document.getElementById("resetButton").addEventListener('click', resetTimer);

let isStarted = false;
let elapsedTime = 0;
let lastLoopTime = 0;

function startTimer() {
  isStarted = true;
  console.log("Timer started!");

}

function stopTimer() {
  isStarted = false;
  console.log("Timer stopped!");
}

function resetTimer() {
  console.log("Timer reset!");
  elapsedTime = 0;
}

function loop() {
  if (isStarted) {
    elapsedTime += performance.now() - lastLoopTime;
  }

  console.log(elapsedTime);

  const elapsedMilliseconds = Math.floor(elapsedTime);
  const elapsedSeconds = Math.floor(elapsedTime / 1000);
  const elapsedMinutes = Math.floor(elapsedSeconds / 60);
  const elapsedHours = Math.floor(elapsedMinutes / 60 * 60);

  const displayMilliseconds = String(elapsedMilliseconds % 1000).padStart(3, '0');
  const displaySeconds = String(elapsedSeconds % 60).padStart(2, '0');
  const displayMinutes = String(elapsedMinutes % 60).padStart(2, '0');
  const displayHours = String(elapsedHours % 24).padStart(2, '0');

  document.getElementById("time").innerText = `${displayHours}:${displayMinutes}:${displaySeconds}:${displayMilliseconds}`;

  lastLoopTime = performance.now();


  requestAnimationFrame(loop);
}

loop();

