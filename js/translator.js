/**
 * Translate a text to consist of pig latin irreverent of language
 * 
 * @param {String} text 
 * @returns {String} text in pig latin
 */
function translateToPigLatin(text) {
    if (isEmpty(text))
        return text;
    const trimmed = text.trim();
    let words = trimmed.match(/\w/gi);
    let nonWords = trimmed.match(/\W/gi);
    if (!nonWords)
        return constructPigLatinWord(words[0]);
    else {
        let pigLatin = words.map((word) => constructPigLatinWord(word));
        
        const start = words[0] === trimmed.substring(0, words[0].length);
        const firstElem = (start) ? pigLatin : nonWords;
        const secondElem = (!start) ? pigLatin : nonWords;
        const n = (firstElem.length > secondElem.length) ? firstElem.length : secondElem.length;

        const passage = [];
        for (let i = 0; i < n; i++) {
            passage.push( (firstElem[i]) ? firstElem[i] : '' )
            passage.push( (secondElem[i]) ? secondElem[i] : '' )
        }
        return passage.join('');
    }
}

/**
 * Modifies an English word to be a Pig Latin word
 * Words starting with vowels excl. 'y' : Add 'way' to the end
 * Words starting with consonant:
 * - Move sequence of starting consonants to end of word
 * - Add ay to the end
 * Include u with consonant q if together
 * @param {String} word 
 * @returns {String} version of word in Pig Latin
 */
function constructPigLatinWord(word) {
    if (!word || !word.length)
        return '';
    const regex = new RegExp(/[^aeiou]/, "i");
    if (regex.test(word.charAt(0))) {
        let i = 0;
        while (regex.test(word.charAt(i)))
            i++;
        if (word.charAt(i - 1) === 'q'
            && word.charAt(i) === 'u')
            i++;
        return word.substring(i) + word.substring(0, i).toLowerCase() + 'ay';
    }
    else
        return word + 'way';
}