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
}
