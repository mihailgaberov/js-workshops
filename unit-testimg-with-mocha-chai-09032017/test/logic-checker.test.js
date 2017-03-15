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
});