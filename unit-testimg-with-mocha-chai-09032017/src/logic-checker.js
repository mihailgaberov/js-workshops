/**
 * Created by Mihail on 3/15/2017.
 */

function cigarParty(cigars, isWeekend) {
  if (isWeekend) {
    return cigars >= 40;
  } else {
    return (cigars >= 40 && cigars <= 60);
  }
}


module.exports = {
  cigarParty: cigarParty
};