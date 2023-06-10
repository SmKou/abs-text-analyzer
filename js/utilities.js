/**
 * Determines if a string is empty
 * @param {String} str 
 * @returns {Boolean} true = empty string
 */
function isEmpty(str) {
    return str.trim().length === 0;
}

/**
 * Create a new string from text
 * Remove instances of filter word
 * @param {String[]} filter 
 * @param {String} text
 * @returns {String} text without profanities
 */
function filterPassage(filter, text) {
    const regex = new RegExp(filter.join('|'), "gi");
    return text
        .replace(regex, '')
        .replace(/[ ]{2,}/g, ' ');
}

/**
 * Create a string for inner html of list
 * List occurrences of each word in a passage
 * @param {Object} occurrences
 * @returns {String}
 */
function constructOccurrencesList(occurrences) {
    if (!occurrences || Object.keys(occurrences).length === 0)
        return null;
    let list = '';
    for (const [word, n] of Object.entries(occurrences)) {
        list += `<li>${word}: ${n}</li>`
    }
    return list;
}

/**
 * Create a new string for inner html of passage element
 * Include strong elements around matching word
 * @param {String} bold
 * @param {String} text 
 * @returns {String} 
 */
function constructPassage(bold, text) {
    if (isEmpty(text))
        return text;
    if (isEmpty(bold))
        return '<p>' + text + '</p>';
    const nonBold = text.split(bold);
    return '<p>' + nonBold.join('<strong>' + bold + '</strong>') + '</p>';
}