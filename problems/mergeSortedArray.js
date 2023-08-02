

var arr1 = [1, 6, 9, 12]
var arr2 = [4, 7, 8, 20, 102, 105, 1029]

function mergeSortedArrays(arr1, arr2) {

    let pointer1 = 0
    let pointer2 = 0

    let item1 = arr1[pointer1]
    let item2 = arr2[pointer2]

    const novaLista = []

    while (item1 || item2) {
        if (!item2 || item1 < item2) {
            novaLista.push(item1)
            pointer1++
            item1 = arr1[pointer1]
        }
        if (!item1 || item2 < item1) {
            novaLista.push(item2)
            pointer2++
            item2 = arr2[pointer2]
        }
    }

    return novaLista

}

console.log(mergeSortedArrays(arr1, arr2).join(" "))



