(function(global) {
  'use strict';

  var isNumber = function(value) {
    if (typeof value !== 'number' || isNaN(value) || !isFinite(value)) {
      throw new TypeError('Value must be a number');
    }
    return value;
  };

  var finishTrickResult = function(value) {
    if (value !== 64) {
      throw new TypeError('Wrong finish trick value');
    }
    return value;
  };

  global.pointsCalculator = {
    isNumber: isNumber,
    finishTrickResult: finishTrickResult
  };
}(window));