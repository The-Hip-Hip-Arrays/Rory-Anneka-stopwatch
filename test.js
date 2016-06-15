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
