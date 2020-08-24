const checkUserValid = (goodUsers) => {
    return function allUserValid(submittedUsers) {
        return submittedUsers.every(user => goodUsers.some(good => user === good))
    }
}
module.exports = checkUserValid