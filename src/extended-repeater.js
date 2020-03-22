module.exports = function repeater(str, options) {
  //let add = options.addition;
  //let addSep = options.additionSeparator;
  if (typeof str !== 'string') {
    str.toString();
  } else if (typeof options.addition !== 'string') {
    options.addition.toString();
  }; 
  
  if ('separator' in options === false) {
    options.separator = '+';
    } else if ('additionSeparator' in options === false) {
      options.additionSeparator = '|';
    };

  if ('repeatTimes' in options === false) {
    options.repeatTimes = -1;
    } else if ('additionRepeatTimes' in options === false) {
      options.additionRepeatTimes = -1;
    }; 
  
  let addTo = options.addition + options.additionSeparator;
  let addToRepeated = addTo.repeat(options.additionRepeatTimes - 1) + options.addition;
  let preBase = str + addToRepeated + options.separator;
  let base = str + addToRepeated;
  let almostResult = preBase.repeat(options.repeatTimes - 1);
  let result = almostResult + base;

  return result;
};
  