class HashTable {
  constructor() {
    this.table = {};
  }

  hash(key) {
    let hashValue = 0;
    for (let i=0; i< key.length; i++) {
        hashValue += key.charCodeAt(i);
        console.log(key, hashValue);
    }
    return hashValue;
  }

  set(key, value) {
    let index = this.hash(key);
    this.table[index] = value;
  }

  get(key) {
    let index = this.hash(key);
    return this.table[index];
  }
}
  
const myHashTable = new HashTable();
myHashTable.set("name", "Farhod");
myHashTable.set("age", 41);
myHashTable.set("city", "Kuala Lumpur");
  
console.log("name:", myHashTable.get("name"));
console.log("age:", myHashTable.get("age"));
console.log("city:", myHashTable.get("city"));
  