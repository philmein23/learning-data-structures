class Set {
  constructor() {
    this.set = {};
    this.size = 0;
  }

  add(data) {
    if (!this.set.hasOwnProperty(data)) {
      this.set[data] = true;
      this.size++;
    }
  }

  remove(data) {
    if (this.set.hasOwnProperty(data)) {
      delete this.set[data];
      this.size--;
    }
  }

  member(data) {
    if (this.set.hasOwnProperty(data)) {
      return true;
    } else {
      return false;
    }
  }

  union(secondset) {
    let unionSet = new Set();
    for (let key in this.set) {
      if (this.set.hasOwnProperty(key)) {
        unionSet.add(key);
      }
    }

    for (let key in secondset.set) {
      if (!unionSet.hasOwnProperty(key)) {
        unionSet.add(key);
      }
    }

    return unionSet;
  }

  intersect(secondset) {
    let intersect = new Set();

    for (let key in this.set) {
      if (secondset.set.hasOwnProperty(key)) {
        intersect.add(key);
      }
    }

    return intersect;
  }
}
