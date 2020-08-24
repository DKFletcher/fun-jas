var slice = Array.prototype.slice

function logger(namespace) {
    return function() {
        let test = slice.apply(arguments)
        test.unshift(namespace)
        console.log.apply(null, test)
    }
}

function logger_solution(namespace) {
    return function() {
        console.log.apply(console, [namespace].concat(slice.call(arguments)))
    }
}

module.exports = logger