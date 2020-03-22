module.exports = function getSeason(date) {
  if (date == null) {
    return 'Unable to determine the time of year!';
  } else if ((date instanceof Date !== true)) {
    throw new Error();
  } else if ((Object.prototype.toString.call(date) === "[object Date]") === false) {
    throw new Error();
  };
  
  var month = date.getMonth();
  var result = (month < 2) ? 'winter' :
    (month < 5) ? 'spring' :
    (month < 8) ? 'summer' :
    (month < 11) ? 'autumn' : 
    'winter';
     return result;
};
