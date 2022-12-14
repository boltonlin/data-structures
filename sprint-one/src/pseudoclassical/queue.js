var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Queue.prototype.enqueue = function (value) {
  if (this.head === undefined) {
    this.head = 0;
  }
  this.storage[this.size()] = value;
}

Queue.prototype.dequeue = function () {
  var output = this.storage[this.head];
  this.head += 1;
  return output;
}

Queue.prototype.size = function () {
  return Object.keys(this.storage).length;
}