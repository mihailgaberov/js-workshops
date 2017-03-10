/**
 * Created by Mihail on 3/9/2017.
 */
function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function diff21(n) {
  var diff = Math.abs(n - 21);
  return n > 21 ? diff * 2 : diff;
}

function parrotTrouble(talking, hour) {
  return !!(talking && ((hour < 7 && hour >= 0) || (hour > 20 && hour <= 23)));
}

function make10(a, b) {
  return (a === 10 || b === 10) || a + b === 10;
}

function nearHundred(n) {
  return (n >= 90 && n <= 110) || (n >= 190 && n <= 210);
}

function posNeg(a, b, negative) {
  if (negative)
    return a < 0 && b < 0;
  else
    return ((a < 0 && b >= 0) || (a >= 0 && b < 0));
}

function sleepIn(weekday, vacation) {
  return !weekday || vacation;
}

module.exports = {
  add: add,
  substract: substract,
  diff21: diff21,
  parrotTrouble: parrotTrouble,
  make10: make10,
  nearHundred: nearHundred,
  posNeg: posNeg,
  sleepIn: sleepIn
};