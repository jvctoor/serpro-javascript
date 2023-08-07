

function fiboRecursivo(number) {

    if (number < 2) {
        return number
    }

    return fiboRecursivo(number-1) + fiboRecursivo(number-2)

}

// 0 1 1 2 3 5 8 13 21 34
function fiboIterativo(number) {
    let n1 = 0
    let n2 = 1
    if (number === 0) {
        return n1
    }
    if (number === 1) {
        return n2
    }
    let fibo = 0
    for (let i = 1; i < number ; i++) {
        fibo = n1 + n2
        n1 = n2
        n2 = fibo
    }
    return fibo
}

console.log(fiboRecursivo(10))
console.log(fiboIterativo(10))