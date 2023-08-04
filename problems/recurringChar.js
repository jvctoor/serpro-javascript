

function firstRecurringChar(input) {

    for (let i = 0; i < input.length ; i++) {
        for (let j = i + 1; j < input.length ; j++) {
            if (input[i] === input[j]) {
                return input[i]
            }
        }
    }
}

function firstRecurringChar2(input) {
    let map = new Map()
    for (let i = 0; i < input.length; i++) {
        if (map[input[i]] !== undefined) {
            return input[i]
        } else {
            map[input[i]] = i
        }
    }
    return undefined
}

console.log(firstRecurringChar2([1,2,1]))