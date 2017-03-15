/**
 * Created by Mihail on 3/15/2017.
 */
var assert = require('assert');
var check = require('../src/logic-checker');

describe('Logic checker', function() {
  it('should defined if a party was successful', function() {
    var res = check.cigarParty(30, false);
    assert.equal(res, false);

    res = check.cigarParty(50, false);
    assert.equal(res, true);

    res = check.cigarParty(70, true);
    assert.equal(res, true);

    res = check.cigarParty(30, true);
    assert.equal(res, false);

    res = check.cigarParty(50, true);
    assert.equal(res, true);

    res = check.cigarParty(60, false);
    assert.equal(res, true);

    res = check.cigarParty(61, false);
    assert.equal(res, false);
  });

  it('should define if we get table', function () {
    var res = check.dateFashion(5, 10);
    assert.equal(res, 2);

    res = check.dateFashion(5, 2);
    assert.equal(res, 0);

    res = check.dateFashion(5, 5);
    assert.equal(res, 1);

    res = check.dateFashion(3, 3);
    assert.equal(res, 1);

    res = check.dateFashion(10, 2);
    assert.equal(res, 0);

    res = check.dateFashion(2, 9);
    assert.equal(res, 0);
  });

  it('should define if the squirrels can play', function () {
    var res = check.squirrelPlay(70, false);
    assert.equal(res, true);

    res = check.squirrelPlay(95, false);
    assert.equal(res, false);

    res = check.squirrelPlay(95, true);
    assert.equal(res, true);

    res = check.squirrelPlay(90, false);
    assert.equal(res, true);

    res = check.squirrelPlay(90, true);
    assert.equal(res, true);

    res = check.squirrelPlay(50, false);
    assert.equal(res, false);
  });

  it('should define if we get a ticket', function () {
    var res = check.caughtSpeeding(60, false);
    assert.equal(res, 0);

    res = check.caughtSpeeding(65, false);
    assert.equal(res, 1);

    res = check.caughtSpeeding(65, true);
    assert.equal(res, 0);

    res = check.caughtSpeeding(80, false);
    assert.equal(res, 1);

    res = check.caughtSpeeding(85, false);
    assert.equal(res, 2);

    res = check.caughtSpeeding(70, false);
    assert.equal(res, 1);
  });

  it('should return sum,  if sum is between 10 and 19, return 20', function () {
    var res = check.sortaSum(3, 4);
    assert.equal(res, 7);

    res = check.sortaSum(9, 4);
    assert.equal(res, 20);

    res = check.sortaSum(10, 11);
    assert.equal(res, 21);

    res = check.sortaSum(12, -3);
    assert.equal(res, 9);

    res = check.sortaSum(-3, 12);
    assert.equal(res, 9);

    res = check.sortaSum(4, 5);
    assert.equal(res, 9);
  });

  it('should return the correct alarm clock value', function () {
    var res = check.alarmClock(1, false);
    assert.equal(res, '7:00');

    res = check.alarmClock(5, false);
    assert.equal(res, '7:00');

    res = check.alarmClock(0, false);
    assert.equal(res, '10:00');

    res = check.alarmClock(6, false);
    assert.equal(res, '10:00');

    res = check.alarmClock(0, true);
    assert.equal(res, 'off');

    res = check.alarmClock(6, true);
    assert.equal(res, 'off');
  });

  it('should return true if one of the numbers, or their sum, or substract is 6', function () {
    var res = check.love6(6, 4);
    assert.equal(res, true);

    res = check.love6(4, 5);
    assert.equal(res, false);

    res = check.love6(1, 5);
    assert.equal(res, true);

    res = check.love6(1, 6);
    assert.equal(res, true);

    res = check.love6(1, 7);
    assert.equal(res, true);

    res = check.love6(7, 5);
    assert.equal(res, false);
  });
});