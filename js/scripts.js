/**
 * Load variables for application
 * Add event listener to form element
 * 
 * Submit
 * - check user data
 * - get user selected component
 * - send data to component
 * - display component with results
 */
const loadApplication = () => {
    const textData = {
        passage: {
            origin: "",
            clean: "",
            processed: ""
        },
        count: {
            character: 0,
            word: 0,
            selectword: 0,
            sentence: 0
        },
        filter: [],
        occurrences: {},
        bold: []
    };
    const form = document.querySelector('form');
    const display = {
        "total": {
            "sentence": () => textData.count.sentence,
            "word": () => textData.count.word,
            "character": () => textData.count.character,
            "occurrences": () => textData.occurrences
        },
        "search": {
            "word": () => textData.count.selectword,
            "bold": () => textData.count.bold
        },
        "passage": () => (!isEmpty(passage.processed)) ?
            textData.processed :
            textData.origin
    }

    const handleFormSubmission = () => {
        
    }

    form.addEventListener('submit', handleFormSubmission);
}

window.onload = loadApplication;