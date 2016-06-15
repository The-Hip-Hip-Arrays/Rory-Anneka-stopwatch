var seconds = 0, minutes = 0, hours = 0;

var h1 = document.getElementsByTagName('h1')[0];

var start = document.getElementById('startButton');

function add(){
  seconds++;
}

start.onclick = add;
