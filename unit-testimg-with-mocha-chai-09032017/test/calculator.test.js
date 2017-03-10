/**
 * Created by Mihail on 3/9/2017.
 */
var assert = require('assert');
var calc = require('../src/calculator');

describe('Numbers calculator', function() {
  it('should be able to sum two given numbers', function() {
    var res = calc.add(3, 4);
    assert.equal(res, 7);
  });

  it('should be able to substract two given numbers', function() {
    var res = calc.substract(6, 3);
    assert.equal(res, 3);
  });

  it('should return the absolute difference between n and 21 when given int n, ' +
    'except return double the absolute difference if n is over 21.', function() {
    var res = calc.diff21(1);
    assert.equal(res, 20);

    res = calc.diff21(21);
    assert.equal(res, 0);

    res = calc.diff21(31);
    assert.equal(res, 20);

    res = calc.diff21(0);
    assert.equal(res, 21);

    res = calc.diff21(-7);
    assert.equal(res, 28);
  });

  it('should calculate when we are in trouble. ' +
    'We are in trouble if the parrot is talking and the hour is before 7 or after 20.' +
    'The "hour" parameter is the current hour time in the range 0..23. ' +
    ' Return True if we are in trouble. ', function() {
    var res = calc.parrotTrouble(true, 6);
    assert.equal(res, true);

    res = calc.parrotTrouble(true, 7);
    assert.equal(res, false);

    res = calc.parrotTrouble(false, 6);
    assert.equal(res, false);

    res = calc.parrotTrouble(true, 21);
    assert.equal(res, true);

    res = calc.parrotTrouble(false, 21);
    assert.equal(res, false);

    res = calc.parrotTrouble(false, 20);
    assert.equal(res, false);

    res = calc.parrotTrouble(true, 23);
    assert.equal(res, true);

    res = calc.parrotTrouble(false, 23);
    assert.equal(res, false);

    res = calc.parrotTrouble(true, 20);
    assert.equal(res, false);

    res = calc.parrotTrouble(false, 12);
    assert.equal(res, false);
  });
  
  it('should return true if one of two given interegers is equal to 10 or their sum is 10', function () {
    var res = calc.make10(9, 10);
    assert.equal(res, true);

    res = calc.make10(9, 9);
    assert.equal(res, false);

    res = calc.make10(1, 9);
    assert.equal(res, true);

    res = calc.make10(10, 1);
    assert.equal(res, true);

    res = calc.make10(10, 10);
    assert.equal(res, true);

    res = calc.make10(8, 2);
    assert.equal(res, true);

    res = calc.make10(8, 3);
    assert.equal(res, false);

    res = calc.make10(10, 42);
    assert.equal(res, true);

    res = calc.make10(12, -2);
    assert.equal(res, true);
  });
  
  it('should return true if a given integer is within 10 of 100 or 200', function () {
    var res = calc.nearHundred(93);
    assert.equal(res, true);

    res = calc.nearHundred(90);
    assert.equal(res, true);

    res = calc.nearHundred(89);
    assert.equal(res, false);

    res = calc.nearHundred(110);
    assert.equal(res, true);

    res = calc.nearHundred(111);
    assert.equal(res, false);

    res = calc.nearHundred(121);
    assert.equal(res, false);

    res = calc.nearHundred(-101);
    assert.equal(res, false);

    res = calc.nearHundred(-209);
    assert.equal(res, false);

    res = calc.nearHundred(190);
    assert.equal(res, true);

    res = calc.nearHundred(209);
    assert.equal(res, true);

    res = calc.nearHundred(0);
    assert.equal(res, false);

    res = calc.nearHundred(5);
    assert.equal(res, false);

    res = calc.nearHundred(5);
    assert.equal(res, false);

    res = calc.nearHundred(-50);
    assert.equal(res, false);

    res = calc.nearHundred(191);
    assert.equal(res, true);

    res = calc.nearHundred(189);
    assert.equal(res, false);

    res = calc.nearHundred(200);
    assert.equal(res, true);

    res = calc.nearHundred(210);
    assert.equal(res, true);

    res = calc.nearHundred(211);
    assert.equal(res, false);

    res = calc.nearHundred(290);
    assert.equal(res, false);
  });
});