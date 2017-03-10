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

  it('should return true when one of the given integers is negative or if "negative" is true and both are negative', function () {
    var res = calc.posNeg(1, -1, false);
    assert.equal(res, true);

    res = calc.posNeg(-1, 1, false);
    assert.equal(res, true);

    res = calc.posNeg(-4, -5, true);
    assert.equal(res, true);

    res = calc.posNeg(-4, -5, false);
    assert.equal(res, false);

    res = calc.posNeg(-4, 5, false);
    assert.equal(res, true);

    res = calc.posNeg(-4, 5, true);
    assert.equal(res, false);

    res = calc.posNeg(1, 1, false);
    assert.equal(res, false);

    res = calc.posNeg(-1, -1, false);
    assert.equal(res, false);

    res = calc.posNeg(1, -1, true);
    assert.equal(res, false);

    res = calc.posNeg(-1, 1, true);
    assert.equal(res, false);

    res = calc.posNeg(1, 1, true);
    assert.equal(res, false);

    res = calc.posNeg(-1, -1, true);
    assert.equal(res, true);

    res = calc.posNeg(5, -5, false);
    assert.equal(res, true);

    res = calc.posNeg(-6, 6, false);
    assert.equal(res, true);

    res = calc.posNeg(-5, -6, false);
    assert.equal(res, false);

    res = calc.posNeg(-2, -1, false);
    assert.equal(res, false);

    res = calc.posNeg(1, 2, false);
    assert.equal(res, false);

    res = calc.posNeg(-5, 6, true);
    assert.equal(res, false);

    res = calc.posNeg(-5, -5, true);
    assert.equal(res, true);
  });

  it('should return true if we sleep in - it is not an weekday or we are on vacation', function () {
    var res = calc.sleepIn(false, false);
    assert.equal(res, true);

    res = calc.sleepIn(true, false);
    assert.equal(res, false);

    res = calc.sleepIn(false, true);
    assert.equal(res, true);

    res = calc.sleepIn(true, true);
    assert.equal(res, true);
  });

  it('should return true if both monkeys are smiling or both are not', function () {
    var res = calc.monkeyTrouble(true, true);
    assert.equal(res, true);

    res = calc.monkeyTrouble(false, false);
    assert.equal(res, true);

    res = calc.monkeyTrouble(false, true);
    assert.equal(res, false);

    res = calc.monkeyTrouble(true, false);
    assert.equal(res, false);
  });

  it('should return the sum of two given integers or double their sum if they are the same', function () {
    var res = calc.sumDouble(1, 2);
    assert.equal(res, 3);

    res = calc.sumDouble(3, 2);
    assert.equal(res, 5);

    res = calc.sumDouble(2, 2);
    assert.equal(res, 8);

    res = calc.sumDouble(-1, 0);
    assert.equal(res, -1);

    res = calc.sumDouble(3, 3);
    assert.equal(res, 12);

    res = calc.sumDouble(0, 0);
    assert.equal(res, 0);

    res = calc.sumDouble(0, 1);
    assert.equal(res, 1);

    res = calc.sumDouble(3, 4);
    assert.equal(res, 7);
  });

  it('should string with "not" added in front, if is already there return the string itself', function () {
    var res = calc.notString('candy');
    assert.equal(res, 'not candy');

    res = calc.notString('x');
    assert.equal(res, 'not x');

    res = calc.notString('not bad');
    assert.equal(res, 'not bad');

    res = calc.notString('bad');
    assert.equal(res, 'not bad');

    res = calc.notString('is not');
    assert.equal(res, 'not is not');

    res = calc.notString('no');
    assert.equal(res, 'not no');
  });

  it('should return a new string where the char at index n has been removed', function () {
    var res = calc.missingChar('kitten', 1);
    assert.equal(res, 'ktten');

    res = calc.missingChar('kitten', 0);
    assert.equal(res, 'itten');

    res = calc.missingChar('kitten', 4);
    assert.equal(res, 'kittn');

    res = calc.missingChar('Hi', 0);
    assert.equal(res, 'i');

    res = calc.missingChar('Hi', 1);
    assert.equal(res, 'H');

    res = calc.missingChar('code', 0);
    assert.equal(res, 'ode');

    res = calc.missingChar('code', 1);
    assert.equal(res, 'cde');

    res = calc.missingChar('code', 2);
    assert.equal(res, 'coe');

    res = calc.missingChar('code', 3);
    assert.equal(res, 'cod');

    res = calc.missingChar('chocolate', 8);
    assert.equal(res, 'chocolat');
  });

  it('should return a new string where the first and last chars have been exchanged.', function () {
    var res = calc.frontBack('code');
    assert.equal(res, 'eodc');

    res = calc.frontBack('a');
    assert.equal(res, 'a');

    res = calc.frontBack('ba');
    assert.equal(res, 'ab');

    res = calc.frontBack('abc');
    assert.equal(res, 'cba');

    res = calc.frontBack('');
    assert.equal(res, '');

    res = calc.frontBack('Chocolate');
    assert.equal(res, 'ehocolatC');

    res = calc.frontBack('aavJ');
    assert.equal(res, 'Java');

    res = calc.frontBack('hello');
    assert.equal(res, 'oellh');
  });

  it('should return a new string which is 3 copies of the front', function () {
    var res = calc.front3('Java');
    assert.equal(res, 'JavJavJav');

    res = calc.front3('Chocolate');
    assert.equal(res, 'ChoChoCho');

    res = calc.front3('abc');
    assert.equal(res, 'abcabcabc');

    res = calc.front3('abcXYZ');
    assert.equal(res, 'abcabcabc');

    res = calc.front3('ab');
    assert.equal(res, 'ababab');

    res = calc.front3('a');
    assert.equal(res, 'aaa');

    res = calc.front3('');
    assert.equal(res, '');
  });
});