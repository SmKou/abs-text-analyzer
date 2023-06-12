/**
 * Determines if a string is empty
 * @param {String} str 
 * @returns {Boolean} true = empty string
 */
function isEmpty(str) {
    if (!str)
        return true;
    return str.trim().length === 0;
}

/**
 * Create a new string from text
 * Remove instances of filter word
 * @param {String} filter 
 * @param {String} text
 * @returns {String} text without profanities
 */
function filterPassage(filter, text) {
    if (!filter && !filter.length)
        return text;
    const filterStr = filter.match(/\w+/gi);
    const regex = (filterStr.length > 1)? new RegExp(filterStr.join('|'), "gi"): new RegExp(filterStr[0], "gi");
    return text
        .replace(regex, '')
        .replace(/[ ]{2,}/g, ' ')
        .trim();
}

/**
 * Create a string for inner html of passage
 * Include strong elements around matching word
 * @param {String} bold
 * @param {String} text 
 * @returns {String} 
 */
function constructPassage(bold, text) {
    if (isEmpty(text))
        return text;
    if (!bold || isEmpty(bold))
        return createParagraph(text);
    const nonBold = text.split(bold).join('<strong>' + bold + '</strong>');
    const paragraphs = nonBold.split(/\n+/).map(p => createParagraph(p));
    return paragraphs;
}

function createParagraph(text) {
    return '<p>' + text + '</p>';
}

/**
 * Create a string for inner html of list
 * List occurrences of each word in a passage
 * @param {Object} occurrences
 * @returns {String}
 */
function constructList(occurrences) {
    if (!occurrences || Object.keys(occurrences).length === 0)
        return null;
    let list = '';
    for (const [word, n] of Object.entries(occurrences)) {
        list += `<li>${word}: ${n}</li>`
    }
    return list;
}

/**
 * Create a string for inner html of stats
 * @param {String} text 
 * @returns 
 */
function constructData(text) {
    const data = {
        sentence: countSentences(text),
        word: countWords(text),
        character: countCharacters(text)
    }
    let stats = '';
    for (const [key, val] of Object.entries(data)) {
        stats += `<p>Total ${key}s: ${val}</p>`
    }
    return stats;
}