module.exports = function createDreamTeam(members) {
  result  = [];
  if (members === null || Array.isArray(members) !== true) {
    return false;
  } else if (members.length === 0) {
    return false;
  };
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] !== 'string') {
      continue;
    } else if (typeof members[i] === 'string') {
			let withBlank = members[i].trim();
      result += withBlank.charAt(0);
    } else {
      return false;
    };
  };
  if (result.length === 0) {
    return false;
  } else {
    result = result.toUpperCase();
    return result.split('').sort().join('');
  };
};