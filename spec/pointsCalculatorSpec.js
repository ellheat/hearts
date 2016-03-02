(function(global) {
  'use strict';

  var pointsCalc = global.pointsCalculator;

  describe('Hearts card game calculator', function() {
    it('throws when the value is not a number', function () {
      expect(function () {
        pointsCalc.isNumber();
      }).toThrowError(TypeError);
      expect(function () {
        pointsCalc.isNumber(null);
      }).toThrowError(TypeError);
      expect(function () {
        pointsCalc.isNumber('');
      }).toThrowError(TypeError);
      expect(function () {
        pointsCalc.isNumber([]);
      }).toThrowError(TypeError);
    });
    it('throws when the value is not 64', function () {
      expect(function () {
        pointsCalc.finishTrickResult(50);
      }).toThrowError(TypeError);
      expect(function () {
        pointsCalc.finishTrickResult(1);
      }).toThrowError(TypeError);
      expect(function () {
        pointsCalc.finishTrickResult(100);
      }).toThrowError(TypeError);
    });
    it('accept when value is 64', function () {
      expect(pointsCalc.finishTrickResult(64)).toEqual(64);
    });
  });
}(window));
