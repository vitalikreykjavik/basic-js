module.exports = function calculateHanoi(diskNumber, turnsSpeed) {
    let result = {};
    let turnsToDone = 2 ** diskNumber - 1;
    let timeNeeded = turnsToDone / (turnsSpeed / 3600);
    result.turns = turnsToDone;
    result.seconds = timeNeeded;
    return result; 
  };