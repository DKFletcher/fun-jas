function duckCount() {
    for (var i = 0; i < arguments.length; i++) {
        console.log(typeof arguments[i] === 'object');
    }
}
module.exports = duckCount