var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.enqueue = function(value) {
    if (someInstance.head === undefined) {
      someInstance.head = 0;
    }
    if (someInstance.tail === undefined) {
      someInstance.tail = 0;
    }
    storage[someInstance.tail] = value;
    someInstance.tail++;
  };

  someInstance.dequeue = function() {
    var output = storage[someInstance.head];
    delete storage[someInstance.head];
    someInstance.head ++;
    return output;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
