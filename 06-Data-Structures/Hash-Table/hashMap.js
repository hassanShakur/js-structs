class HashTable {
  constructor(size = 17) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    const SOMEPRIME = 53;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let charCode = key[i].charCodeAt(0);
      total = (total * SOMEPRIME + charCode) % this.keyMap.length;
    }

    return total;
  }

  set(key, value) {
    const index = this._hash(key);
    // If the index is empty, create a new nested array at the index
    !this.keyMap[index] && (this.keyMap[index] = []);
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    const index = this._hash(key);
    if (!this.keyMap[index]) return undefined;

    // Loop over the sub array
    for (let i = 0; i < this.keyMap[index].length; i++) {
      //   keyMap[index[i[0=>key, 1=>val], i[otherKey, otherVal])]]
      if (this.keyMap[index][i][0] === key)
        return this.keyMap[index][i][1];
    }
  }
}

const hashMap = new HashTable();

hashMap.set('apple', '🍏');
hashMap.set('mango', '🥭');
hashMap.set('banana', '🍌');
hashMap.set('orange', '🍊');

console.log(hashMap.get('apple'));
// console.log(hashMap.keyMap);
