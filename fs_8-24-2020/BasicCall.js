function duckCount_first_attempt() {
    return (function(ducks, count) {
        for (var duck = 0; duck < ducks.length; duck++) {
            if (Object.prototype.hasOwnProperty.call(ducks[duck], 'quack')) count++
        }
    })(arguments, 0)
}

function duckCount_solution() {
    return Array.prototype.slice.call(arguments).filter(function(obj) {
        return Object.prototype.hasOwnProperty.call(obj, 'quack')
    }).length
}


function duckCount() {
    let count = 0
    for (var i = 0; i < arguments.length; i++) {
        if (Object.prototype.hasOwnProperty.call(arguments[i], 'quack')) count++
    }
    return count
}
module.exports = duckCount