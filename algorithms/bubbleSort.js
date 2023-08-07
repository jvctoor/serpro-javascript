

const numbers = [8, 3, 1, 2, 20, 102]

function bubbleSort(array) {

    let len = array.length

    for (let i = 0 ; i < len ; i++) {
        for (let j = 0; j<len ; j++) {
            if (array[j] > array[j+1]) {
                let temp = array[j]
                array[j] = array[j+1]
                array[j+1] = temp
            }
        }
    }
}

bubbleSort(numbers)
console.log(numbers)