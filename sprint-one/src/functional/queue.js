var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    if (someInstance.head === undefined) {
      someInstance.head = 0;
    }
    storage[someInstance.size()] = value;
  };

  someInstance.dequeue = function() {
    var output = storage[someInstance.head];
    someInstance.head += 1;
    return output;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
