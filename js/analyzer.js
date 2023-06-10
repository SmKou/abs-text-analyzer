/**
 * Determine how many characters in a text passage
 * not including whitespaces
 * @param {String} text 
 * @returns {Number} no of characters
 */
function countCharacters(text) {
    if (isEmpty(text))
        return 0;
    return text.match(/\S/g).join('').length;
}

/**
 * Determine how many words are in a text passage
 * @param {String} text 
 * @returns {Number} no of words
 */
function countWords(text) {
    if (isEmpty(text))
        return 0;
    const n = text.match(/[A-Za-z0-9]+/g);
    return (n)? n.length: 0;
}

/**
 * Determine the number of sentences in a text passage
 * @param {String} text 
 * @returns {Number} no of sentences
 */
function countSentences(text) {
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
function countOccurrencesOfWord(word, text) {
    const regex = new RegExp(word, 'gi');
    const n = text.match(regex);
    return (n)? n.length: 0;
}

/**
 * Determine number of occurrences for each word in a text passage
 * @param {String} text 
 * @returns {Object} word: no of instances
 */
function countOccurrences(text) {
    if (!text || !text.length)
        return {};
    const words = {};
    text.match(/[A-Za-z0-9]+/g).forEach((word) => 
        words[word] = (words[word] !== undefined) ?
            words[word] + 1 :
            1
    )
    return words;
}

