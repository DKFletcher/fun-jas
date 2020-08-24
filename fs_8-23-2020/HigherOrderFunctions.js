const repeat = (func, num) => {
    for (let i = 0; i < num; i++) {
        func()
    }
}
module.exports = repeat