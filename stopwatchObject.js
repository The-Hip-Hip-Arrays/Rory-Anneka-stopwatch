var clockFace = document.getElementById('clock');
var startButton = document.getElementById('startButton');
var stopButton = document.getElementById('stopButton');
var clearButton = document.getElementById('clearButton');

function Stopwatch() {
  this.seconds = 0;
  this.minutes = 0;
  this.hours = 0;
  var clockStarted = false;
  var time = null;

  this.tick = function(){
    this.seconds++;
    if(this.seconds >= 60){
      this.seconds = 0;
      this.minutes++;
    }
    if(this.minutes >= 60) {
      this.minutes = 0;
      this.hours++;
    }
    this.clockFace.textContent = padwithZero(this.hours) + ":" + padwithZero(this.minutes) + ":" + padwithZero(this.seconds);
  };

  this.start = function(){
    if(this.clockStarted === false) {
      var self = this;
      time = setInterval(function() {
        self.tick();
      }, 1000);
      clockStarted = true;
    }
  };

  this.stop = function(){
    clearInterval(time);
    clockStarted = false;
  };

  this.clear = function(){
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.clockFace.textContent = padwithZero(this.hours) + ":" + padwithZero(this.minutes) + ":" + padwithZero(this.seconds);
  };

  startButton.onclick = this.start;
  stopButton.onclick = this.stop;
  clearButton.onclick = this.clear;
}

function padwithZero(number) {
  if(number.toString().length === 1) {
    return '0' + number;
  } else {
    return number;
  }
}

var stopwatch = new Stopwatch;
