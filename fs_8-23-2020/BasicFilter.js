const getShortMessages = (messages) => {
    return messages.filter(obj => obj.message.length < 50).map(shortMessage => shortMessage.message)
}
module.exports = getShortMessages