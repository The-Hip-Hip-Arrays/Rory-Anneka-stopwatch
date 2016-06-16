var seconds = 0, minutes = 0, hours = 0;

var h1 = document.getElementsByTagName('h1')[1];
var start = document.getElementById('startButton');
var stop = document.getElementById('stopButton');
var clear = document.getElementById('clearButton');
var time;

function add(){
  seconds++;
  if(seconds >= 60){
    seconds = 0;
    minutes++;
  }
  if(minutes >= 60) {
    minutes = 0;
    hours++;
  }
  h1.textContent = padwithZero(hours) + ":" + padwithZero(minutes) + ":" + padwithZero(seconds);
}

function startClock() {
    time = setInterval(function(){
      add();
    }, 1000);
}

function stopClock() {
  clearInterval(time);
}

function clearClock() {
  h1.textContent = "00:00:00"
  hours = 0;
  minutes = 0;
  seconds = 0;
}

start.onclick = startClock;
stop.onclick = stopClock;
clear.onclick = clearClock;

function padwithZero(number) {
  if(number.toString().length === 1) {
    return '0' + number;
  } else {
    return number;
  }
}
