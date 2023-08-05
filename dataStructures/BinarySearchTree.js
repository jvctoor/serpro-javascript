

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
console.log(JSON.stringify(traverse(tree.root)))


