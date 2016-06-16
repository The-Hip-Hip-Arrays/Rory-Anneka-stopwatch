var seconds = 0, minutes = 0, hours = 0;

var h1 = document.getElementsByTagName('h1')[0];

var start = document.getElementById('startButton');
var stop = document.getElementById('stopButton');
var clear = document.getElementById('clearButton');

function add(){
  seconds++;
}

function startClock() {
  setInterval(function(){
    add();
  }, 1000);
}

start.onclick = add;
