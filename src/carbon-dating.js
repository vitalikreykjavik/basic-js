const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string' || sampleActivity === null) {
    return false;
  } else if (isNaN(Number.parseFloat(sampleActivity)) === true) {
    return false;
  };
  
  let activity = Number.parseFloat(sampleActivity);
  if (activity > 15 || activity <= 0) {
    return false;
  };
  
  let k = 0.693 / HALF_LIFE_PERIOD;
  let years = Math.log(MODERN_ACTIVITY / activity) / k; 
  return Math.ceil(years);
};
