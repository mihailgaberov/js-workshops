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

function monkeyTrouble(aSmile, bSmile) {
  return aSmile && bSmile || !aSmile && !bSmile;
}

function sumDouble(a, b) {
  if (a == b)
    return (a + b) * 2;
  else
    return a + b;
}

function notString(str) {
  if (str.startsWith('not'))
    return str;
  else
    return 'not ' + str;
}

function missingChar(str, n) {
  if (n === 0)
    return str.substr(1, str.length);
  else
    return str.substr(0, n) + str.substr(n + 1, str.length);
}

function frontBack(str) {
  if (str.length <= 1)
    return str;
  else
    return str.slice(-1) + str.slice(1, str.length - 1) + str[0];
}

function front3(str) {
  if (str.length <= 3)
    return str * 3;
  else
    return str.substr(0, 3) * 3;
}

module.exports = {
  add: add,
  substract: substract,
  diff21: diff21,
  parrotTrouble: parrotTrouble,
  make10: make10,
  nearHundred: nearHundred,
  posNeg: posNeg,
  sleepIn: sleepIn,
  monkeyTrouble: monkeyTrouble,
  sumDouble: sumDouble,
  notString: notString,
  missingChar: missingChar,
  frontBack: frontBack,
  front3: front3
};