let count = 0
const reduce = (arr, fn, initial) => {
    inital = fn(initial, arr[count++])
    return arr.length === count ? initial : reduce(arr, fn, initial)
}

module.exports = reduce

function reduce_solution(arr, fn, initial) {
    return (function reduceOne(index, value) {
        if (index > arr.length - 1) return value
        return reduceOne(index + 1, fn(value, arr[index], index, arr))
    })(0, initial)
}