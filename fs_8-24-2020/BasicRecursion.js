const reduce_first_arrempt = (arr, fn, initial) => {
    return (function reduceFunction(acc, index) {
        if (index === arr.length) return acc
        return reduceFunction(fn(acc), ++index)
    })({}, 0)
}

function reduce_solution(arr, fn, initial) {
    return (function reduceOne(index, value) {
            if (index > arr.length - 1) return value // end condition
            return reduceOne(index + 1, fn(value, arr[index], index, arr)) // calculate & pass values to next step
        })(0, initial) // IIFE. kick off recursion with initial values
}


let index = 0
const reduce = (arr, fn, initial) => {
    if (index === arr.length) return initial
    initial = fn(initial, arr[index])
    index++
    return reduce(arr, fn, initial)
}
module.exports = reduce