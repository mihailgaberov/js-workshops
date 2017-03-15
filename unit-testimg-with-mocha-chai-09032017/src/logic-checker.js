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
  } else if (you <= 2 || yourDate <=2 ) {
    return 0
  } else {
    return 1
  }
}


module.exports = {
  cigarParty: cigarParty,
  dateFashion: dateFashion
};