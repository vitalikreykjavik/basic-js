module.exports = function countCats(data) {
  let result = 0;
  for (let i = 0; i < data.length; i++) {
    let howMuch = data[i].filter(a => a === '^^')
    result += howMuch.length;
  };
  return result;  
};
