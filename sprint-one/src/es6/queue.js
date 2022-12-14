class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  enqueue(value) {
    if (this.head === undefined) {
      this.head = 0;
    }
    if (this.tail === undefined) {
      this.tail = 0;
    }
    this.storage[this.tail] = value;
    this.tail++;
  }

  dequeue() {
    var output = this.storage[this.head];
    delete this.storage[this.head];
    this.head++;
    return output;
  }

  size() {
    return Object.keys(this.storage).length;
  }
}