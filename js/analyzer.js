/**
 * Determine how many characters in a text passage
 * not including whitespaces
 * @param {String} text 
 * @returns {Number} no of characters
 */
function characterCounter(text) {
    if (isEmpty(text))
        return 0;
    return text.match(/\S/g).join('').length;
}

/**
 * Determine how many words are in a text passage
 * @param {String} text 
 * @returns {Number} no of words
 */
function wordCounter(text) {
    if (isEmpty(text))
        return 0;
    return text.match(/[A-Za-z0-9]+/g).length;
}

/**
 * Determine the number of sentences in a text passage
 * @param {String} text 
 * @returns {Number} no of sentences
 */
function sentenceCounter(text) {
    if (isEmpty(text))
        return 0;
    const textArray = text.split(/[.!?]+/g);
    if (isEmpty(textArray[textArray.length - 1]))
        textArray.pop();
    return textArray.length;
}

/**
 * Determine the number of occurrences of a given word in a text passage.
 * @param {String} word 
 * @param {String} text 
 * @returns {Number} no of occurrences in text
 */
function numOfOccurrences(word, text) {
    const regex = new RegExp(word, 'gi');
    return text.match(regex).length;
}

/**
 * Determine number of occurrences for each word in a text passage
 * @param {String} text 
 * @returns {Object} word: no of instances
 */
function occurrencesOfWords(text) {
    const words = {};
    text.match(/[A-Za-z0-9]+/g).forEach((word) => 
        words[word] = (words[word] !== undefined) ?
            words[word] + 1 :
            1
    )
    return words;
}

