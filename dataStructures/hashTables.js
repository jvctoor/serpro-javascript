
class HashTable {
    constructor(size) {
        this.data = new Array(size)
    }

    // O underline significa que teoricamente é um método privado
    _hash(key) {
        let hash = 0
        for (let i = 0; i<= key.length ; i++) {
            hash = (hash + key.charCodeAt(i)* i) % this.data.length
        }
        return hash
    }

    set(key, value) {
        let idx = this._hash(key)
        this.data[idx] = value
    }

    get(key) {
        let idx = this._hash(key)
        return this.data[idx]
    }

}

const myHashTable = new HashTable(50)

myHashTable.set('grapes', 10000)
console.log(myHashTable.get('grapes'))




