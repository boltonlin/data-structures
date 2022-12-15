var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  this.children.push(child);
};

 // traverse the tree
treeMethods.contains = function(target) {
  console.log('looking for ' + target);
  console.log('looking at ' + this.value);
  var output = false;
  // if this value is equal to target
  if (this.value === target) {
    return true;
  } else {
    // if there are children
    if (this.children.length > 0) {
      // look through each of its children - for each child
      for (var i = 0; i < this.children.length; i++) {
        // call contains on each child
        output = this.children[i].contains(target);
        // if we found target, return true
        if (output === true) return true;
      }
    }
  }
  return output;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
