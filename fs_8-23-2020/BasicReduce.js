const countWords = (inputWords) => {
    return inputWords.reduce((wordCount, currentWord) => {
        if (!wordCount[currentWord]) {
            wordCount[currentWord] = 1
        } else {
            ++wordCount[currentWord]
        }
        return wordCount
    }, {})
}

module.exports = countWords