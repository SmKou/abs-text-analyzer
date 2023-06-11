/**
 * Determine how many characters in a text passage
 * not including whitespaces
 * @param {String} text 
 * @returns {Number} no of characters
 */
function countCharacters(text) {
    if (isEmpty(text))
        return 0;
    const noSpaces = text.match(/\S/g);
    return noSpaces.length;
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
    if (!text.length || !word.length)
        return 0;
    const regex = new RegExp(word, 'gi');
    const n = text.match(regex);
    return (n)? n.length: 0;
}

/**
 * Determine number of occurrences for each word in a text passage
 * @param {String} text 
 * @returns {Object} words: no of instances
 */
function countOccurrences(text) {
    if (!text || !text.length)
        return {};
    const occ = {};
    const words = text.match(/[A-Za-z0-9]+/g);
    if (words.length === 1)
        occ[words[0]] = 1;
    else {
        words.forEach((word) => {
            if (occ[word] !== undefined)
                occ[word]++;
            else
                occ[word] = 1
        })
    }
    return occ;
}

