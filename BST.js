import mergeSort from "./merge-sort.js";

//remove duplicate from the sorted array

function removeDuplicate(array) {
  const newArray = mergeSort(array);
  const newSorted = [];

  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] != newArray[i + 1]) {
      newSorted.push[newArray[i]];
    }
  }
  return newSorted;
}

//class for binary tree
class nodes {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

//sorted array to balanced bst

function balancedTree(arr, start, end) {
  if (start > end) {
    return null;
  }
  let mid = Math.floor(arr.length / 2);
  var new_node = new nodes(arr[mid]);
  root.left = balancedTree(arr, start, mid - 1);
  root.right = balancedTree(arr, mid + 1, end);
  return new_node;
}
//class for binary search tree head(root)

class Tree {
  constructor() {
    this.root = null;
  }
  //append method

  append(appended_value) {
    let newNode = new nodes(appended_value);
    if (this.root == null) {
      this.root = newNode;
      return this;
    }
    let tree = this.root;
    while (true) {
      if (appended_value < tree) {
        if (!tree.left) {
          tree.left = newNode;
          return this;
        }
        tree = tree.left;
      } else {
        if (!tree.right) {
          tree.right = newNode;
          return this;
        }
        tree = tree.right;
      }
      return this;
    }
  }

  //lookup method

  lookup(value) {
    if (!this.root) {
      return false;
    }
    let tree = this.root;

    while (tree) {
      if (value === tree.data) {
        return tree;
      } else if (value < tree.value) {
        tree = tree.left;
      } else {
        tree = tree.right;
      }
    }
  }

  //remove method

  remove(value) {
    if (!this.root) {
      return false;
    }

    let currentNode = this.root;
    let parentNode = null;

    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (value === currentNode.value) {
        //option 1: the parent has no right child
        if (parentNode === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            //if parent>current value,make current left child  a child of parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;
            } else if (currentNode.value > parentNode) {
              parentNode.right = currentNode.left;
            }
          }
          //option2: node to be deleted has no left child, so we make
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if (parentNode === null) {
            this.root = currentNode.right;
          } else {
            //if parent>current,make right child  of of the left parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;
            }
            //if parent <current,make right child of a right child of the parent
            else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }
        } else {
          //Find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }
          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
        return true;
      }
    }
  }
}
