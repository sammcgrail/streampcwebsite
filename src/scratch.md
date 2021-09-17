
As part of the interview process we would like to see you complete a simple coding task in real time. During the task you will be sharing your screen.
 
The exercise is to write a GUI stopwatch application starting with an empty project (no prewritten code) using whichever language and development tools you are most comfortable with. The stopwatch application has these requirements:


	•	It continuously displays the stopwatch timer
	•	It has controls to start, stop and reset the timer
 
The task should take about 30 mins.
 
We are interested in your thought process during the exercise so be prepared to provide some narration and also answer questions on-the-fly.





provide examples of how to do problem with TDD





hls

websockets

artchiveture

















DateTime and associated formatting?

consider set interval ... but


requestAnimationFrame()

performance.now()





onclick mayb bad


































old js file

console.log("stopwatchjsfile");

document.getElementById("startButton").addEventListener('click', startTimer);

function startTimer() {
  console.log("Timer started!");
};

function stopTimer() {
  console.log("Timer stopped!");
};

function resetTimer() {
  console.log("Timer reset!");
};

window.requestAnimationFrame(callback);




console.log("stopwatchjsfile");

document.getElementById("startButton").addEventListener('click', startTimer);
document.getElementById("stopButton").addEventListener('click', stopTimer);
document.getElementById("resetButton").addEventListener('click', resetTimer);

function startTimer() {
  console.log("Timer started!");
}

function stopTimer() {
  console.log("Timer stopped!");
}

function resetTimer() {
  console.log("Timer reset!");
}

function loop() {
  console.log('tick!', performance.now());

  fetch('google.com').then(response => {
    console.log(response);
    fetch('cnn.com').then(cnnResponse => {
      console.log(cnnResponse);
    });
  });
  console.log('hi');

  const response = await fetch('google.com');
  const cnnResponse = await fetch('cnn.com');

  //loop();
  //requestAnimationFrame(loop);
  setTimeout(loop, 0);
}

loop();

