class Queue {
  constructor() {
    this.head = 0;
    this.values = [];
  }

  enqueue(value) {
    this.values.push(value);
  }

  dequeue() {
    if (this.head === 0 || this.head >= this.values.length) {
      return null;
    }
    let dequeuedItem = this.values[this.head];
    this.head++;

    if (this.head === 100) {
      // We have 100 items in garbage
      // Remove items at indexes 0 to 99.
      this.values.splice(0, 99);

      // reset head
      this.head = 0;
    }

    return dequeuedItem;
  }

  peek() {
    if (this.head === 0 || this.head >= this.values.length) {
      return null;
    }

    return this.values[this.head];
  }
}

let queue = new Queue();
queue.enqueue(5);
queue.enqueue(23);
queue.enqueue(34);
queue.enqueue(45);
queue.enqueue(99);

queue.dequeue();

console.log(queue.values);
