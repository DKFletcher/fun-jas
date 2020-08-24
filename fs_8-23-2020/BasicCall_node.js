const duckCount = require('./BasicCall.js')
var notDuck = Object.create({ quack: true })
var duck = { quack: true }
var waddle = []
duckCount(duck, notDuck, waddle)