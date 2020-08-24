const getShortMessages = (messages) => {
    return messages.filter(item => item.message.length < 50).map(message => message.message)
}
module.exports = getShortMessages