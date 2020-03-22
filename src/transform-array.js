module.exports = function transform(arr) {
  if (Array.isArray(arr) !== true) {
    throw new Error(); 
  };

  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[0] === '--discard-prev' || arr[0] === '--double-prev') {
      i++;
    };
    if (arr[arr.length - 1] === '--double-next' || arr[arr.length - 1] === '--discard-next') {
      return result;
    };
    if (arr[i] === '--discard-next') {
      i++;
    } else if (arr[i] === '--double-next') {
      result.push(arr[i + 1]);
    } else if (arr[i] === '--discard-prev') {
      result.splice(i - 1, 1);
    } else if (arr[i] === '--double-prev') {
      result.push(arr[i - 1]);
    } else {
      result.push(arr[i]);
    };
  };
  return result;
};


