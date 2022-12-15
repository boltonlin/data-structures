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
  console.log(this.value);
  var output = false;
   // if this value is equal to target
   if (this.value === target) {
     // return true
     return true;
     // otherwise
   } else {
     // if there are children
     console.log(this.children);
     if (this.children.length > 0) {
        // look through each of its children - for each child
        for (var i = 0; i < this.children.length; i++) {
           // call contains on each child
           return this.children[i].contains(target);
        }
     } else {
      return false;
     }
   }
   return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
