

let myLinkedList = {
    head: {
        value: 1,
        next: {
            value: 2,
            next: {
                value: 3,
                next: {
                    value: 4,
                    next: null
                }
            }
        }
    }
}


class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head
        this.length = 1
    }

    append(value) {
        const newNode = {
            value: value,
            next: null
        }
        this.tail.next = newNode
        this.tail = newNode
        this.length++
        return this
    }

    prepend(value) {
        const newNode = {
            value: value,
            next: this.head
        }
        this.head = newNode
        this.length++
        return this
    }

    insert(index, value) {
        if (index === 0) {
            this.prepend(value)
            return this.toString()
        }
        const newNode = {
            value: value,
            next: null
        }
        let nodeIndex = this.head
        for(let i = 0; i <= index; i++) {
            if (i === index-1) {
                break
            }
            nodeIndex = nodeIndex.next
        }
        newNode.next = nodeIndex.next
        nodeIndex.next = newNode
        this.length++
        return this
    }

    toString() {
        let str = ""
        let currentNode = this.head
        for (let i = 0; i < this.length; i++) {
            str += currentNode.value + " -> "
            currentNode = currentNode.next
        }
        return str
    }

    reverseTry() {

        let current = this.head //1

        this.tail = this.head

        let proximo = current.next //2

        while (proximo) {
            const aux = proximo.next
            proximo.next = current
            current = proximo
            proximo = aux
        }

        this.head.next = null
        this.head = current

    }

    reverse() {
        if (this.length === 1) {
            return this
        }
        let first = this.head
        this.tail = this.head
        let second = first.next
        while (second) {
            const temp = second.next
            second.next = first
            first = second
            second = temp
        }
        this.head.next = null
        this.head = first


    }

}

ll = new LinkedList(1)
ll.append(2)
ll.append(3)
ll.append(4)
ll.reverseTry()
console.log(ll.toString())

