class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  push(data) {
    let node = new Node(data);

    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }

    this.length++;
  }

  itemAt(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let current = this.head;
    let counter = 0;

    while (counter < index) {
      current = current.next;
      counter++;
    }

    return current.data;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let current = this.head;

    if (index === 0) {
      this.head = current.next;
    } else {
      let counter = 0;
      let previous = null;

      while (counter < index) {
        previous = current;
        current = current.next;

        counter++;
      }

      // Set previous node's next
      // to the node after the deleted node
      previous.next = current.next;
      this.length--;
    }

    return current.data;
  }

  // return index of found node
  // assume data is unique for simplication purposes
  search(data) {
    let index = 0;
    let current = this.head;

    while (current) {
      if (data === current.data) return index;
      current = current.next;

      index++;
    }

    return null;
  }
}
