

class Node {
    constructor(data) {
        this.data = data;
        this.next = null; // Próximo nó na linked list
    }
}

class Stack {
    constructor() {
        this.top = null; // Topo da pilha, inicialmente vazio
        this.size = 0;   // Tamanho da pilha
    }

    // Empilha um elemento no topo da pilha
    push(data) {
        const newNode = new Node(data);
        newNode.next = this.top; // O próximo nó é o antigo topo
        this.top = newNode;      // O novo nó é o topo
        this.size++;
    }

    // Desempilha o elemento do topo da pilha e o retorna
    pop() {
        if (this.isEmpty()) {
            return "A pilha está vazia";
        }
        const poppedNode = this.top;
        this.top = poppedNode.next; // O próximo nó se torna o novo topo
        this.size--;
        return poppedNode.data;
    }

    // Retorna o elemento do topo da pilha sem removê-lo
    peek() {
        if (this.isEmpty()) {
            return "A pilha está vazia";
        }
        return this.top.data;
    }

    // Verifica se a pilha está vazia
    isEmpty() {
        return this.size === 0;
    }

    // Retorna o tamanho da pilha
    getSize() {
        return this.size;
    }

    // Limpa a pilha, removendo todos os elementos
    clear() {
        this.top = null;
        this.size = 0;
    }
}

// Exemplo de uso da classe Stack com linked list
const stack = new Stack();

console.log(stack.isEmpty()); // true

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.peek()); // 3
console.log(stack.pop()); // 3
console.log(stack.getSize()); // 2

stack.clear();
console.log(stack.isEmpty()); // true
