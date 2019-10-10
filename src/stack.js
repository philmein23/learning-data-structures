class Stack {
  constructor() {
    this.top = -1;
    this.values = [];
  }

  push(value) {
    this.top++;
    this.values.push(value);
  }

  pop() {
    if (this.top < 0) return null;

    let poppedValue = this.values[this.top];

    this.top--;
    this.values.length--;

    return poppedValue;
  }

  peek() {
    return this.values[this.top];
  }
}
