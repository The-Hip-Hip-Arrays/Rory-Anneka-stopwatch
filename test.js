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
