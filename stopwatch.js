var seconds = 0, minutes = 0, hours = 0;

var h1 = document.getElementsByTagName('h1')[0];

var start = document.getElementById('startButton');
var stop = document.getElementById('stopButton');
var clear = document.getElementById('clearButton');
var time;

function add(){
  seconds++;
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
  seconds = 0;
}

start.onclick = add;
