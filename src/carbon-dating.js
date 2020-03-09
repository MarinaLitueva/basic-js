const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
 
  if (typeof sampleActivity !== typeof "" || !(sampleActivity) || isNaN(Number.parseFloat(sampleActivity))) {
    return false;
  }

  let result = Math.ceil(
    (Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) * HALF_LIFE_PERIOD) / 0.693
  );

  if (result <= 0 || !isFinite(result)) {
    return false;
  }
  return result;
}