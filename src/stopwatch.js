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

  const elapsedSeconds = Math.floor(elapsedTime / 1000);

  const elapsedMinutes = Math.floor(elapsedSeconds / 60);

  const displaySeconds = elapsedSecondsxdl;;lkjh cxz

  const displayMinutes =


    document.getElementById("time").innerText = elapsedMinutes + ":" + elapsedSeconds;



  lastLoopTime = performance.now();


  requestAnimationFrame(loop);
}

loop();

