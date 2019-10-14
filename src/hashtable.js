class HashTable {
  constructor() {
    this.bucketSize = 23;
    this.buckets = [];
    this.buckets.length = this.bucketSize;
  }

  computeHash(key) {
    let total = 0;

    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }

    return total % this.bucketSize;
  }

  // put(key, value) {
  //   let hash = this.computeHash(key);
  //   console.log(hash);
  //   if (this.buckets[hash] !== undefined) {
  //     throw "we are not handling collisions yet...";
  //   }

  //   this.buckets[hash] = value;
  // }

  // separate chaining method - collision resolution technique
  // put(key, value) {
  //   let keyType = typeof key;

  //   if (keyType !== "string" && keyType !== "integer") {
  //     throw new Error("key must be integer or string");
  //   }

  //   let hash = this.computeHash(key);

  //   if (this.buckets[hash] === undefined) {
  //     this.buckets[hash] = {};
  //   }

  //   let chain = this.buckets[hash];

  //   if (chain.hasOwnProperty(key)) {
  //     throw new Error("Duplicate key is not allowed");
  //   }

  //   chain[key] = value;
  // }

  // separate chaining method - collision resolution technique
  // get(key) {
  //   let keyType = typeof key;

  //   if (keyType !== "string" && keyType !== "integer") {
  //     return undefined;
  //   }

  //   let hash = this.computeHash(key);

  //   if (this.buckets[hash] === undefined) {
  //     return undefined;
  //   }

  //   let chain = this.buckets[hash];

  //   if (chain.hasOwnProperty(key)) {
  //     return chain[key];
  //   }

  //   return undefined;
  // }

  // collision resolution using open addressing
  put(key, value) {
    let keyType = typeof key;

    if (keyType !== "string" && keyType !== "integer") {
      throw new Error("key must be integer or string");
    }

    let hash = this.computeHash(key);

    if (this.buckets[hash] === undefined) {
      this.buckets[hash] = {};
      this.buckets[hash][key] = value;
      return;
    } else if (this.buckets[hash].hasOwnProperty(key)) {
      throw "Duplicate Key is not allowed";
    }

    // collision found - lets probe for the next slot
    let bucketId = hash + 1;

    do {
      if (bucketId >= this.bucketSize) {
        // Reached the end.
        // Start from the beginning
        bucketId = 0;
      }

      if (this.buckets[hash] === undefined) {
        // found an empty slot
        this.buckets[bucketId] = {};
        this.buckets[bucketId][key] = value;

        return;
      }

      bucketId++;
    } while (bucketId !== hash);

    // Couldn't find any free slots.
    throw "Hash Table is full. Rehashing needed";
  }

  // collision found - lets probe for the next slot
  get(key) {
    let keyType = typeof key;
    if (keyType !== "string" && keyType !== "number") {
      return undefined;
    }

    let hash = this.computeHash(key);

    if (this.buckets[hash] === undefined) {
      return undefined;
    } else if (this.buckets[hash].hasOwnProperty(key)) {
      // Key found. Return value
      return this.buckets[hash][key];
    }

    // Possible Collision.
    // Iterate through the table using the
    // probing sequence used by the put function
    let bucketId = hash + 1;

    do {
      if (bucketId >= this._bucketSize) {
        // Reached the end.
        // Start from the beginning
        bucketId = 0;
      }

      if (this._buckets[bucketId] === undefined) {
        // Found an empty slot
        return undefined;
      } else if (this._bucekts[bucketId].hasOwnProperty(key)) {
        // Key found. Return value
        return this._buckets[hash][key];
      }

      bucketId++;
    } while (bucketId !== hash);

    // Couldn't find the key and exhausted the
    // whole hash table.
    return undefined;
  }
}

let hashTable = new HashTable();

hashTable.put("hello", "world");
hashTable.put("holla", function() {
  return "at you";
});

console.log(hashTable.get("hello"));
