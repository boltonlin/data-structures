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
    this.storage[this.size()] = value;
  }

  dequeue() {
    var output = this.storage[this.head];
    this.head += 1;
    return output;
  }

  size() {
    return Object.keys(this.storage).length;
  }
}