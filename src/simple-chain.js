const chainMaker = {
  result: [],
  getLength() {
    return this.result.length;
  },
  addLink(value) {
    this.result.push(value);  
    return this;  
  },
  removeLink(position) {
    if (position < this.result.length && position > 0 && isNaN(position) === false) {
      this.result.splice(position - 1, 1);
      return this;
    } else {
      throw new Error();
    };
  },
  reverseChain() {
    this.result.reverse();
    return this;
  },
  finishChain() {
    this.result = this.result.map(chainValue => `( ${chainValue} )`).join('~~');
    return this.result;
  }
};

module.exports = chainMaker;