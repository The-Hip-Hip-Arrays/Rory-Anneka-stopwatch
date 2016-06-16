test('testing environment', function(assert) {
  var actual = 1;
  var expected = 1;
  assert.equal(actual, expected, 'should pass test')
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

test('checks to see if add makes seconds increase and that 10 seconds pass', function(assert){
  add();
  expect(0);
  setTimeout(function() {
    assert.ok(seconds > 0,'seconds increase when add is called')
    assert.ok(seconds <= 10, 'seconds under 10')
  }, 10)
});

test('check to see if start button exists', function(assert){
  assert.ok(document.getElementById('startButton'), 'start button object that represents the DOM element exists')
});

test('check to see if sstop button exists', function(assert){
  assert.ok(document.getElementById('stopButton'), 'stop button object that represents the DOM element exists')
});
