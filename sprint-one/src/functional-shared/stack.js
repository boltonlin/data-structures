var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    storage: {}
  };
  extend(someInstance, stackMethods);
  return someInstance;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var stackMethods = {};

stackMethods.push = function (value) {
  this.storage[this.size()] = value;
}

stackMethods.pop = function () {
  var output = this.storage[this.size() - 1];
  delete this.storage[this.size() - 1];
  return output;
}

stackMethods.size = function () {
  return Object.keys(this.storage).length;
}