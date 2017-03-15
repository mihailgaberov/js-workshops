/**
 * Created by Mihail on 3/15/2017.
 */

function cigarParty(cigars, isWeekend) {
  if (isWeekend) {
    return cigars >= 40
  } else {
    return (cigars >= 40 && cigars <= 60)
  }
}

function dateFashion(you, yourDate) {
  if ((you >= 8 || yourDate >= 8) && (you > 2 && yourDate > 2)) {
    return 2
  } else if (you <= 2 || yourDate <= 2) {
    return 0
  } else {
    return 1
  }
}

function squirrelPlay(temp, isSummer) {
  if (isSummer) {
    return (temp >= 60 && temp <= 100);
  } else {
    return (temp >= 60 && temp <= 90);
  }
}

function caughtSpeeding(speed, isBirthday) {
  var res = 0;

  if (isBirthday) {
    if (speed >= 66 && speed <= 85) {
      res = 1;
    } else if (speed >= 86) {
      res = 2;
    }
  } else {
    if (speed >= 61 && speed <= 80) {
      res = 1;
    } else if (speed >= 81) {
      res = 2;
    }
  }

  return res;
}

function sortaSum(a, b) {
  var sum = a + b;
  if (sum >= 10 && sum <= 19) {
    return 20;
  } else {
    return sum;
  }
}

function alarmClock(day, vacation) {
  var sevenOclock = '7:00';
  var tenOclock = '10:00';
  var alarmOff = 'off';
  var isWeekend = (day == 6 || day == 0);

  if (vacation) {
    if (isWeekend) {
      return alarmOff;
    } else {
      return tenOclock;
    }
  } else {
    if (isWeekend) {
      return tenOclock;
    } else {
      return sevenOclock;
    }
  }
}

function love6(a, b) {
  var sum = a + b;
  var diff = Math.abs(a - b);
  return (a === 6 || b === 6 || sum === 6 || diff === 6);
}

function in1to10(n, outsideMode) {
  if (outsideMode) {
    return (n <= 1 || n >= 10);
  } else {
   return n >= 1 && n <= 10;
  }
}

module.exports = {
  cigarParty: cigarParty,
  dateFashion: dateFashion,
  squirrelPlay: squirrelPlay,
  caughtSpeeding: caughtSpeeding,
  sortaSum: sortaSum,
  alarmClock: alarmClock,
  love6: love6,
  in1to10: in1to10
};