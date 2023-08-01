

const strings = ["a", "b", "c", "d"];

// Adiciona
strings.push("e")
strings.push("f")
// Remove
strings.pop()
// Adiciona no começo
strings.unshift("x")
// Corta, remove e adiciona a partir de um index
strings.splice(0, 2, "h")

//console.log(strings)

class MyArray {
    constructor() {
        this.length = 0
        this.data = {}
    }

    get(index) {
        return this.data[index]
    }

    push(item) {
        this.data[this.length] = item
        this.length++
        return this.length
    }

    pop() {
        const lastItem = this.data[this.length-1]
        delete this.data[this.length-1]
        this.length--
        return lastItem
    }

    delete(index) {
        const item = this.data[index]
        this.shiftItems(index)
        return item
    }

    shiftItems(index) {
        for (let i = index; i < this.length-1; i++) {
            this.data[i] = this.data[i+1]
        }
        delete this.data[this.length-1]
        this.length--
    }


}

const myArray = new MyArray()
myArray.push(1)
myArray.push(2)
myArray.delete(2)

console.log(myArray.get(0))