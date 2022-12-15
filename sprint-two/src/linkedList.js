var LinkedList = function() {
  var list = {};

  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //create variable (insert) set equal to calling node(value);)
    var newNode = Node(value);
    // if there is no head
    if (list.head === null) {
      // set head to the node we just created
      list.head = newNode;
      // set tail to the node we just created
      list.tail = newNode;
    } else {
      // current list's tail next value to equal node we just created
      list.tail.next = newNode;
      // set list's tail to node we just created
      list.tail = newNode;
    }
  };

  // removes first node from the list then returns its value
  list.removeHead = function() {
    // declare output variable then set equal to list.head's value
    var output = list.head.value;
    // if there is only one node in the list (head and tail the same)
    if (list.head === list.tail) {
      // set head to null
      list.head = null;
      // set tail to null
      list.tail = null;
      //otherwise
    } else {
      // update the list's head - should equal current head's next node
      list.head = list.head.next;
    }
    // return output variable
    return output;
  };

  // TODO: refactor this
  // edge cases... if head is null, return false
  list.contains = function(target) {
    // traverse the list and check if looked at node is = to target
    // while loop
      // look at the head, check if value = target
      // if it is, return true
      // else we look at next
    // if node that we're looking at has no next pointer, and value != target, return false
    if (list.head === null) {
      return false;
    } else {
      var look = list.head;
      while (look.next !== null) {
        if (look.value === target) {
          return true;
        } else {
          look = look.next;
          if (look.value === target) {
            return true;
          }
        }
      }
      return false;
    }
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// linked list contains a list of nodes
// node is an object (contains a value and a link to the next)
// find is linear time
// adding to list is constant time (adds to the tail)
