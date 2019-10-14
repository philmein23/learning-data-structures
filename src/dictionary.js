class Dictionary {
  constructor() {
    this.data = {};
    this.length = 0;
  }

  add(key, value) {
    let keyType = typeof key;

    if (keyType !== "string" && keyType !== "integer") {
      throw new Error("key type can only be a string or integer");
    }

    if (this.data.hasOwnProperty(key)) {
      throw new Error("Cannot duplicate key");
    }

    this.data[key] = value;
    this.length++;
  }

  find(key) {
    if (key === null) {
      return undefined;
    }

    let keyType = typeof key;

    if (keyType !== "string" && keyType !== "integer") {
      throw new Error("key type can only be a string or integer");
    }

    if (this.data.hasOwnProperty(key)) {
      return this.data[key];
    }

    return undefined;
  }

  remove(key) {
    if (this.data.hasOwnProperty(key)) {
      delete this.data[key];
      this.length--;
    }
  }

  size() {
    return this.length;
  }
}

let dict = new Dictionary();

dict.add("age", 32);
dict.remove("age");

console.log(dict.data);
