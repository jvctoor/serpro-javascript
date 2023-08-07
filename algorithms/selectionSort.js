

const numbers = [8, 3, 1, 2, 20, 102]

function selectionSort(array) {

    let len = array.length

    for (let i = 0; i < len; i++) {
        minItem = i
        let temp = array[i]
        for (let j = i+1; j < len; j++) {
            if (array[j] < array[minItem]) {
                minItem = j
            }
        }
        array[i] = array[minItem]
        array[minItem] = temp
    }


}

selectionSort(numbers)
console.log(numbers)