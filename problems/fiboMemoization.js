
function fibonacci() {
    let memory = {}
    return function fib(n) {
        if (n in memory) {
            return memory[n]
        } else {
            if (n < 2) {
                return n
            } else {
                memory[n] = fib(n-1) + fib(n-2)
                return memory[n]
            }
        }
    }
}

const fibo = fibonacci()
console.log(fibo(10))

