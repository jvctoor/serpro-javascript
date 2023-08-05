

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

    }

}

function traverse(node) {
    const tree = {value: node.value}
    tree.left = node.left === null ? null:
        traverse(node.left)
    tree.right = node.right === null ? null:
        traverse(node.right)
    return tree
}

tree = new BinarySearchTree()
tree.insert(9)
JSON.stringify(traverse(tree.root))


