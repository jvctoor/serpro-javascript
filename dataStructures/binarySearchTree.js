

class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insertTry(value) {
        let node = new Node(value)
        let current = this.root
        while(current.right || current.left) {
            if (value < current.value) {
                current = current.left
            }
            if (value > current.value) {
                current = current.right
            }
        }
        if (value < current.value) {
            current.left = node
        }
        if (value > current.value) {
            current.right = node
        }
    }

    insert(value) {
        let node = new Node(value)
        if (this.root === null) {
            this.root = node
        } else {
            let currentNode = this.root
            while(true) {
                if(value < currentNode.value) {
                    // Left
                    if(!currentNode.left) {
                        currentNode.left = node
                        return this
                    }
                    currentNode = currentNode.left
                } else {
                    // Right
                    if(!currentNode.right) {
                        currentNode.right = node
                        return this
                    }
                    currentNode = currentNode.right
                }
            }
        }


     }

    lookup(value) {
        if (!this.root) {
            return null
        }
        let currentNode = this.root
        while(currentNode) {
            if (value < currentNode.value) {
                currentNode = currentNode.left
            } else if (value > currentNode.value) {
                currentNode = currentNode.right
            } else if (value === currentNode.value) {
                return currentNode
            }
        }
        return false
    }

    remove(value) {
        if (!this.root) {
            return false;
        }
        let currentNode = this.root;
        let parentNode = null;
        while(currentNode){
            if(value < currentNode.value){
                parentNode = currentNode;
                currentNode = currentNode.left;
            } else if(value > currentNode.value){
                parentNode = currentNode;
                currentNode = currentNode.right;
            } else if (currentNode.value === value) {
                //We have a match, get to work!

                //Option 1: No right child:
                if (currentNode.right === null) {
                    if (parentNode === null) {
                        this.root = currentNode.left;
                    } else {

                        //if parent > current value, make current left child a child of parent
                        if(currentNode.value < parentNode.value) {
                            parentNode.left = currentNode.left;

                            //if parent < current value, make left child a right child of parent
                        } else if(currentNode.value > parentNode.value) {
                            parentNode.right = currentNode.left;
                        }
                    }

                    //Option 2: Right child which doesnt have a left child
                } else if (currentNode.right.left === null) {
                    currentNode.right.left = currentNode.left;
                    if(parentNode === null) {
                        this.root = currentNode.right;
                    } else {

                        //if parent > current, make right child of the left the parent
                        if(currentNode.value < parentNode.value) {
                            parentNode.left = currentNode.right;

                            //if parent < current, make right child a right child of the parent
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = currentNode.right;
                        }
                    }

                    //Option 3: Right child that has a left child
                } else {

                    //find the Right child's left most child
                    let leftmost = currentNode.right.left;
                    let leftmostParent = currentNode.right;
                    while(leftmost.left !== null) {
                        leftmostParent = leftmost;
                        leftmost = leftmost.left;
                    }

                    //Parent's left subtree is now leftmost's right subtree
                    leftmostParent.left = leftmost.right;
                    leftmost.left = currentNode.left;
                    leftmost.right = currentNode.right;

                    if(parentNode === null) {
                        this.root = leftmost;
                    } else {
                        if(currentNode.value < parentNode.value) {
                            parentNode.left = leftmost;
                        } else if(currentNode.value > parentNode.value) {
                            parentNode.right = leftmost;
                        }
                    }
                }
                return true;
            }
        }
    }

    breadthFirstSearch() {
        let currentNode = this.root
        let list = []
        let queue = []
        queue.push(currentNode)
        while (queue.length > 0) {
            currentNode = queue.shift()
            list.push(currentNode.value)
            if (currentNode.left) {
                queue.push(currentNode.left)
            }
            if (currentNode.right) {
                queue.push(currentNode.right)
            }
        }
        return list
    }

    breadthFirstSearchR(queue, list) {
        if (queue.length === 0) {
            return list;
        }
        let currentNode = queue.shift()
        list.push(currentNode.value)
        if (currentNode.left) {
            queue.push(currentNode.left)
        }
        if (currentNode.right) {
            queue.push(currentNode.right)
        }
        return this.breadthFirstSearchR(queue, list)

    }

    DFSInOrder() {
        return traverseInOrder(this.root, [])
    }

    DFSPreOrder() {
        return traversePreOrder(this.root, [])
    }

    DFSPostOrder() {
        return traversePostOrder(this.root, [])
    }



}

function traverseInOrder(node, list) {
    if (node.left) {
        traverseInOrder(node.left, list)
    }
    list.push(node.value)
    if (node.right) {
        traverseInOrder(node.right, list)
    }
    //list.push(node.value)
    return list
}


function traverse(node) {
    if (node === null) {
        return null;
    }

    const tree = {
        value: node.value,
        left: traverse(node.left),
        right: traverse(node.right)
    };

    return tree;
}


tree = new BinarySearchTree()
tree.insert(9)
tree.insert(10)
tree.remove(10)
tree.insert(11)
tree.insert(12)
tree.insert(13)
tree.insert(14)
//console.log(JSON.stringify(traverse(tree.root)))
//console.log(tree.breadthFirstSearch())
//console.log(tree.breadthFirstSearch([tree.root], []))
console.log(tree.DFSInOrder())


