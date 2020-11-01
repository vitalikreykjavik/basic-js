module.exports = function repeater(str, options) {
  if (!str) {
    str = 'null'
  }
  
  if (str) {
    if (typeof(str) !== 'string') {
      str.toString();
    }
  }

  if ("addition" in options) {
    if (typeof(options.addition) !== 'string') {
      options.addition = options.addition.toString();
    }
  }
 
  if (!options.separator) {
    options.separator = '+'
  };

  if (!options.additionSeparator) {
    options.additionSeparator = '|'
  };
  
  if (!options.repeatTimes) {
    options.repeatTimes = 0;
  };

  if (typeof options.repeatTimes === "undefined") {
      options.repeatTimes = 1;
    };


  if (!options.additionRepeatTimes) {
    options.additionRepeatTimes = 0;
  };

  if (typeof options.additionRepeatTimes === "undefined") {
    options.additionRepeatTimes = 1;
  };

  let prerareAddition = '';
  let preOkayAddition = '';
  let okayAddition = '';

  if (options.addition) {
    prerareAddition = options.addition + options.additionSeparator;
  } 

  if (options.additionRepeatTimes > 1) {
    preOkayAddition = prerareAddition.repeat(options.additionRepeatTimes);
    okayAddition = preOkayAddition.slice(0, -options.additionSeparator.length)
  } else if (options.additionRepeatTimes === 1) {
    okayAddition = options.addition;
  }

  let toExtend = str + okayAddition + options.separator;
  let preResult = toExtend.repeat(options.repeatTimes);
  result = preResult.slice(0, -options.separator.length);

  return result;
};