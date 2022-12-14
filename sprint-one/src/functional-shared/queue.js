var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = {
    storage: {}
  };

  extend(someInstance, queueMethods);
  return someInstance;

};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  if (this.head === undefined) {
    this.head = 0;
  }
  this.storage[this.size()] = value;
}

queueMethods.dequeue = function () {
  var output = this.storage[this.head];
  this.head += 1;
  return output;
}

queueMethods.size = function () {
  return Object.keys(this.storage).length;
}
