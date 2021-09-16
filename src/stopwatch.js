console.log("javascript file opens");

document.getElementById("startButton").addEventListener('click', startStopwatch);
document.getElementById("stopButton").addEventListener('click', stopStopwatch);
document.getElementById("resetButton").addEventListener('click', resetStopwatch);

let elapsedTime = 0;
let lastLoopTime = 0;
let isStarted = false;


function startStopwatch() {
  isStarted = true;
  console.log("inside start function");
}

function stopStopwatch() {
  isStarted = false;
  console.log("inside stop function");
}

function resetStopwatch() {
  elapsedTime = 0;
  console.log("inside reset function");
}

function loop() {
  if (isStarted) {
    elapsedTime += performance.now() - lastLoopTime;
  }

  const elapsedMilliseconds = Math.floor(elapsedTime);
  const elapsedSeconds = Math.floor(elapsedTime / 1000);
  const elapsedMinutes = Math.floor(elapsedSeconds / 60);
  const elapsedHours = Math.floor(elapsedMinutes / 60);

  const displayMilliseconds = String(elapsedMilliseconds % 1000).padStart(3, "0");
  const displaySeconds = String(elapsedSeconds % 60).padStart(2, "0");
  const displayMinutes = String(elapsedMinutes % 60).padStart(2, "0");
  const displayHours = String(elapsedHours % 24).padStart(2, "0");


  console.log(elapsedTime);

  document.getElementById("time").innerText = `${displayHours}:${displayMinutes}:${displaySeconds}:${displayMilliseconds}`;

  lastLoopTime = performance.now();
  requestAnimationFrame(loop);
}



loop();
