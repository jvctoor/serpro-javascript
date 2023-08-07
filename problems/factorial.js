

function fatorialRecursivo(number) {
    if(number === 2) {
        return 2
    }
    return number * fatorialRecursivo(number-1)
}

function fatorialIterativo(number) {
    let fatorial = number
    for (let i = number - 1; i >= 1; i--) {
        fatorial *= i
    }
    return fatorial
}

console.log(fatorialIterativo(5))
console.log(fatorialRecursivo(5))