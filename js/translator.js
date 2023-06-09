/**
 * Translate a text to consist of pig latin irreverent of language
 * Words starting with vowels excl. 'y' : Add 'way' to the end
 * Words starting with consonant:
 * - Move sequence of starting consonants to end of word
 * - Add ay to the end
 * Include u with consonant q if together
 * @param {String} text 
 * @returns {String} text in pig latin
 */
function translateToPigLatin(text) {
    if (isEmpty(text))
        return text;
    let words = text.trim().slice().match(/\w/gi);
    let nonWords = text.trim().slice().match(/\W/gi);
    return words.map((word) => {
        if (/[^aeiou]/.test(word.charAt(0))) {
            let i = 0;
            while (/[^aeiou]/.test(word.charAt(i)))
                i++;
            if (word.charAt(i - 1) === 'q' && word.charAt(i) === 'u')
                i += 1;
            return word.substring(i) + word.substring(0, i).toLowerCase() + 'ay';
        }
        else
            return word + 'way';
    }).reduce((acc, val, i) => {
        acc += val;
        if (nonWords[i])
            acc += nonWords[i];
    }, "");
}