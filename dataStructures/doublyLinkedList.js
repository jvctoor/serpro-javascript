

class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Adicionar um nó no final da lista
    append(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    // Adicionar um nó no início da lista
    prepend(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
    }

    // Inserir um nó após um determinado nó
    insertAfter(afterNode, data) {
        const newNode = new Node(data);

        if (!afterNode) {
            return;
        }

        newNode.prev = afterNode;
        newNode.next = afterNode.next;

        if (afterNode.next) {
            afterNode.next.prev = newNode;
        } else {
            this.tail = newNode;
        }

        afterNode.next = newNode;
    }

    // Remover um nó da lista
    remove(node) {
        if (!node) {
            return;
        }

        if (node.prev) {
            node.prev.next = node.next;
        } else {
            this.head = node.next;
        }

        if (node.next) {
            node.next.prev = node.prev;
        } else {
            this.tail = node.prev;
        }
    }

    // Imprimir a lista
    print() {
        let current = this.head;
        const result = [];

        while (current) {
            result.push(current.data);
            current = current.next;
        }

        console.log(result.join(' <-> '));
    }
}

// Exemplo de uso
const list = new DoublyLinkedList();
list.append(1);
list.append(2);
list.prepend(0);
list.insertAfter(list.head, 1.5);
list.print(); // Saída: 0 <-> 1 <-> 1.5 <-> 2
