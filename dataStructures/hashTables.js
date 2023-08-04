
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
        if (!this.data[idx]) {
            this.data[idx] = []
        }
        this.data[idx].push([key, value])
    }

    get(key) {
        let idx = this._hash(key)
        const currentBucket = this.data[idx]
        if (currentBucket) {
            for(let i = 0; i < currentBucket.length; i++) {
                if(currentBucket[i][0] === key) {
                    return currentBucket[i][1]
                }
            }
        }
    }

    keys() {
        let keysList = []
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                console.log(this.data[i])
                keysList.push(this.data[i][0][0])
            }
        }
        return keysList
    }

}

const myHashTable = new HashTable(50)

myHashTable.set('grapes', 10000)
myHashTable.set('joao', 10000)
console.log(myHashTable.get('grapes'))
console.log(myHashTable.keys())




