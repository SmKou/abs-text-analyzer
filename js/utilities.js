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
    const regex = new RegExp(filter.join('|'), "i")
    return text.replace(regex, '').replace(/[ ]{2,}/, ' ');
}

/**
 * Create a string for inner html of list
 * List occurrences of each word in a passage
 * @param {Object} wordOcc
 * @returns {String}
 */
function constructOccurrencesList(wordOcc) {
    if (!wordOcc || Object.keys(wordOcc).length === 0)
        return null;
    return Object.keys().reduce((acc, key) => {
        acc += `<li>${key}: ${wordOcc[key]}</li>`
    }, "");
}

/**
 * Create a new string for inner html of passage element
 * Include strong elements around matching word
 * @param {String} bold
 * @param {String} text 
 * @returns {String} 
 */
function constructPassageWBold(bold, text) {
    if (isEmpty(text))
        return null;
    const regex = new RegExp(bold, "i");
    return `<p>${text.replace(bold, `<strong>${bold}</strong>`)}</p>`;
}