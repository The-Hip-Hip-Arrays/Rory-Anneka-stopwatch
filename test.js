test('testing environment', function(assert) {
  var actual = 1;
  var expected = 1;
  assert.equal(actual, expected, 'should pass test')
});

test('checks to see that h1.textContent element exists for clock and displays correctly', function(assert){
  assert.equal(h1.textContent, "00:00:00", 'h1 with tag clock exists and displays "00:00:00"')
});


test('check to see if seconds exists', function(assert){
  assert.ok(typeof seconds === 'number', 'seconds exists as a number')
});

test('check to see if minutes exists', function(assert){
  assert.ok(typeof minutes === 'number', 'minutes exists as a number')
});

test('check to see if hours exists', function(assert){
  assert.ok(typeof hours === 'number', 'hours exists as a number')
});

test('check to see if h1 variable exists', function(assert){
  assert.ok(typeof h1 === 'object', 'h1 object that represents the DOM element exists')
});

test('checks to see if timer function exists', function(assert){
  assert.ok(typeof add === 'function', 'add function exists')
});

test('checks to see if add makes seconds increase and that 4 seconds pass', function(assert){
  var done = assert.async();
  add();
  setTimeout(function() {
    assert.ok(seconds > 0,'seconds increase when add is called')
    assert.ok(seconds <= 10, 'seconds under 10')
    done();
  }, 4000)
});

test('check to see if start button exists', function(assert){
  assert.ok(document.getElementById('startButton'), 'start button object that represents the DOM element exists')
});

test('check to see if stop button exists', function(assert){
  assert.ok(document.getElementById('stopButton'), 'stop button object that represents the DOM element exists')
});

test('check to see if clear button exists', function(assert){
  assert.ok(document.getElementById('clearButton'), 'clear button object that represents the DOM element exists')
});

startClock();
//clock should be zero
test('checks to see if add makes seconds increase by more than 2 seconds', function(assert){
  var done = assert.async();
  add();
  setTimeout(function() {
    assert.ok(seconds > 2,'seconds increase by more than 2 startClock is called')
    assert.ok(seconds <= 10, 'seconds under 10')
    done();
  }, 3000)
});

test('checks to see if stopClock stops the clock', function(assert){
  var done = assert.async();
  setTimeout(function() {
    assert.ok(seconds > 1,'seconds increase by more than 1 startClock is called')
    done();
  }, 2000)

  setTimeout(function() {
    stopClock();
    assert.ok(seconds <= 10, 'seconds under 10 when stopClock is called')
  }, 4000)

  setTimeout(function() {
    clearClock();
    assert.ok(seconds === 0, 'seconds is cleared back to zero when clearClock is called')
  }, 5000)
});

test('when 60 seconds passes, minutes changes to 1', function(assert){
  var done = assert.async();
  setTimeout(function() {
    startClock();
  }, 6000)
  setTimeout(function() {
    assert.equal(h1.textContent[4], "1", 'minutes should change to 1 in the string after 60 seconds')
    done();
  }, 82000)
});

test('when start is already clicked, start should not be able to be clicked again', function(assert) {
  clearClock();
  startClock();
  startClock();
  startClock();
  var done = assert.async();
  setTimeout(function() {
    assert.ok(seconds < 10, 'seconds should continue to increment by 1')
    done();
  }, 8000)
});
