/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let counter = init;

    var increment = function increment() {
        counter+=1
        return counter
    }

    var reset = function reset() {
        counter = init
        return counter
    }

    var decrement = function decrement() {
        counter-=1
        return counter
    }

    return {increment, reset, decrement}
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */