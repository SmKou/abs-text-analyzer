const tests = {
    // Utilities
    "isEmpty": {
        "1": {
            test: "If a string is empty, return true.",
            input: { str: "" },
            expected: true,
            result: {
                parent: null,
                exec: function() { return isEmpty(this.parent.input.str) }
            }
        },
        "2": {
            test: "If a string is not empty, return false.",
            input: { str: "one" },
            expected: false,
            result: {
                parent: null,
                exec: function() { return isEmpty(this.parent.input.str) }
            }
        }
    },
    "filterPassage": {
        "1": {
            test: "If passage is empty, return the passage.",
            input: { filter: [""], passage: "" },
            expected: "",
            result: {
                parent: null,
                exec: function() { return filterPassage(this.parent.input.filter, this.parent.input.passage) }
            }
        },
        "2": {
            test: "If filter is empty, return the passage.",
            input: { filter: [""], passage: "one" },
            expected: "one",
            result: {
                parent: null,
                exec: function () { return filterPassage(this.parent.input.filter, this.parent.input.passage) }
            }
        },
        "3": {
            test: "If filter is one word and passage does not contain an instance, return the passage.",
            input: { filter: ["one"], passage: "two" },
            expected: "two",
            result: {
                parent: null,
                exec: function () { return filterPassage(this.parent.input.filter, this.parent.input.passage) }
            }
        },
        "4": {
            test: "If filter is one word and passage contains an instance, return the passage with the instance removed.",
            input: { filter: ["one"], passage: "one" },
            expected: "",
            result: {
                parent: null,
                exec: function () { return filterPassage(this.parent.input.filter, this.parent.input.passage) }
            }
        },
        "5": {
            test: "If filter is more than one word and passage contains instances of any given word, return the passage with all instances removed.",
            input: { filter: ["one", "two"], passage: "three one three one two three" },
            expected: "three three three",
            result: {
                parent: null,
                exec: function () { return filterPassage(this.parent.input.filter, this.parent.input.passage) }
            }
        }
    },
    "constructOccurrencesList": {
        "1": {
            test: "If object lists no occurrences, return null.",
            input: { occ: {} },
            expected: null,
            result: {
                parent: null,
                exec: function () { return constructOccurrencesList(this.parent.input.occ) }
            }
        },
        "2": {
            test: "If object has one occurrence, produce html string for one list item.",
            input: { occ: { "one": 1 } },
            expected: "<li>one: 1</li>",
            result: {
                parent: null,
                exec: function () { return constructOccurrencesList(this.parent.input.occ) }
            }
        },
        "3": {
            test: "If has an object has two occurrences, produce html string for two list items.",
            input: { occ: { "one": 1, "two": 2 } },
            expected: "<li>one: 1</li><li>two: 2</li>",
            result: {
                parent: null,
                exec: function () { return constructOccurrencesList(this.parent.input.occ) }
            }
        }
    },
    "constructPassage": {
        "1": {
            test: "If a passage is empty, return the passage.",
            input: { bold: "", passage: "" },
            expected: "",
            result: {
                parent: null,
                exec: function () { return constructPassage(this.parent.input.bold, this.parent.input.passage) }
            }
        },
        "2": {
            test: "If bold is empty, return the passage with p tags.",
            input: { bold: "", passage: "one" },
            expected: "<p>one</p>",
            result: {
                parent: null,
                exec: function () { return constructPassage(this.parent.input.bold, this.parent.input.passage) }
            }
        },
        "3": {
            test: "If a passage does not contain any instance of bold, return the passage with p tags.",
            input: { bold: "two", passage: "one" },
            expected: "<p>one</p>",
            result: {
                parent: null,
                exec: function () { return constructPassage(this.parent.input.bold, this.parent.input.passage) }
            }
        },
        "4": {
            test: "If a passage contains an instance of a bold, return the passage with p tags and the bold in strong tags.",
            input: { bold: "two", passage: "one two" },
            expected: "<p>one <strong>two</strong></p>",
            result: {
                parent: null,
                exec: function () { return constructPassage(this.parent.input.bold, this.parent.input.passage) }
            }
        },
        "5": {
            test: "If a passage contains an instance of a bold that is part of a word, return the passage with p tags and the bold part in strong tags.",
            input: { bold: "two", passage: "onetwo" },
            expected: "<p>one<strong>two</strong></p>",
            result: {
                parent: null,
                exec: function () { return constructPassage(this.parent.input.bold, this.parent.input.passage) }
            }
        },
        "6": {
            test: "If a passage contains two instances of bold, return the passage with p tags and two bold in strong tags.",
            input: { bold: "two", passage: "one two threetwo" },
            expected: "<p>one <strong>two</strong> three<strong>two</strong></p>",
            result: {
                parent: null,
                exec: function () { return constructPassage(this.parent.input.bold, this.parent.input.passage) }
            }
        }
    },
    // Analyzer
    "countCharacters": {
        "1": {
            test: "If a passage is empty, return 0.",
            input: { passage: "" },
            expected: 0,
            result: {
                parent: null,
                exec: function () { return countCharacters(this.parent.input.passage) }
            }
        },
        "2": {
            test: "If a passage is only whitespace, return 0.",
            input: { passage: " " },
            expected: 0,
            result: {
                parent: null,
                exec: function () { return countCharacters(this.parent.input.passage) }
            }
        },
        "3": {
            test: "If a passage has one character, return 1.",
            input: { passage: "." },
            expected: 1,
            result: {
                parent: null,
                exec: function () { return countCharacters(this.parent.input.passage) }
            }
        },
        "4": {
            test: "If a passage has two characters, return 2.",
            input: { passage: "a." },
            expected: 2,
            result: {
                parent: null,
                exec: function () { return countCharacters(this.parent.input.passage) }
            }
        }
    },
    "countWords": {
        "1": {
            test: "If a passage is empty, return 0.",
            input: { passage: "" },
            expected: 0,
            result: {
                parent: null,
                exec: function () { return countWords(this.parent.input.passage) }
            }
        },
        "2": {
            test: "If a passage has one word, return 1.",
            input: { passage: "one" },
            expected: 1,
            result: {
                parent: null,
                exec: function () { return countWords(this.parent.input.passage) }
            }
        },
        "3": {
            test: "If a passage has only special characters, return 0.",
            input: { passage: "?!--!" },
            expected: 0,
            result: {
                parent: null,
                exec: function () { return countWords(this.parent.input.passage) }
            }
        },
        "4": {
            test: "If a passage has two words separated by a special character, return 2.",
            input: { passage: "object.keys()" },
            expected: 2,
            result: {
                parent: null,
                exec: function () { return countWords(this.parent.input.passage) }
            }
        },
        "5": {
            test: "If a passage has two words separated by a space, return 2.",
            input: { passage: "one two" },
            expected: 2,
            result: {
                parent: null,
                exec: function () { return countWords(this.parent.input.passage) }
            }
        }
    },
    "countSentences": {
        "1": {
            test: "If a passage is empty, return 0.",
            input: { passage: "" },
            expected: 0,
            result: {
                parent: null,
                exec: function () { return countSentences(this.parent.input.passage) }
            }
        },
        "2": {
            test: "If a passage has one word, return 1.",
            input: { passage: "one" },
            expected: 1,
            result: {
                parent: null,
                exec: function () { return countSentences(this.parent.input.passage) }
            }
        },
        "3": {
            test: "If a passage has more than one word but no ending punctuation, return 1.",
            input: { passage: "one two" },
            expected: 1,
            result: {
                parent: null,
                exec: function () { return countSentences(this.parent.input.passage) }
            }
        },
        "4": {
            test: "If a passage has one word and an ending punctuation, return 1.",
            input: { passage: "one." },
            expected: 1,
            result: {
                parent: null,
                exec: function () { return countSentences(this.parent.input.passage) }
            }
        },
        "5": {
            test: "If a passage has two words separated by an ending punctuation, return 2.",
            input: { passage: "one? two" },
            expected: 2,
            result: {
                parent: null,
                exec: function () { return countSentences(this.parent.input.passage) }
            }
        }
    },
    "countOccurrencesOfWord": {
        "1": {
            test: "If a passage and word are empty strings, return 0.",
            input: { word: "", passage: "" },
            expected: 0,
            result: {
                parent: null,
                exec: function () { return countOccurrencesOfWord(this.parent.input.word, this.parent.input.passage) }
            }
        },
        "2": {
            test: "If a word is empty, return 0.",
            input: { word: "", passage: "one" },
            expected: 0,
            result: {
                parent: null,
                exec: function () { return countOccurrencesOfWord(this.parent.input.word, this.parent.input.passage) }
            }
        },
        "3": {
            test: "If a passage is empty, return 0.",
            input: { word: "one", passage: "" },
            expected: 0,
            result: {
                parent: null,
                exec: function () { return countOccurrencesOfWord(this.parent.input.word, this.parent.input.passage) }
            }
        },
        "4": {
            test: "If a passage does not contain an instance of a word, return 0.",
            input: { word: "one", passage: "two three" },
            expected: 0,
            result: {
                parent: null,
                exec: function () { return countOccurrencesOfWord(this.parent.input.word, this.parent.input.passage) }
            }
        },
        "5": {
            test: "If a passage contains an instance of a word, return 1.",
            input: { word: "one", passage: "one two" },
            expected: 1,
            result: {
                parent: null,
                exec: function () { return countOccurrencesOfWord(this.parent.input.word, this.parent.input.passage) }
            }
        },
        "6": {
            test: "If a passage contains two instances of a word, return 2.",
            input: { word: "one", passage: "one one" },
            expected: 2,
            result: {
                parent: null,
                exec: function () { return countOccurrencesOfWord(this.parent.input.word, this.parent.input.passage) }
            }
        }
    },
    "countOccurrences": {
        "1": {
            test: "If a passage is empty, return null.",
            input: { str: "" },
            expected: {},
            result: {
                parent: null,
                exec: function () { return countOccurrences(this.parent.input.str) }
            }
        },
        "2": {
            test: "If a passage has one word, return an object with one key-value pair { word: 1 }.",
            input: { str: "one" },
            expected: { "one": 1 },
            result: {
                parent: null,
                exec: function () { return countOccurrences(this.parent.input.str) }
            }
        },
        "3": {
            test: "If a passage has two instances of a word, return an object with one key-value pair { word: 2}.",
            input: { str: "one one" },
            expected: { "one": 2 },
            result: {
                parent: null,
                exec: function () { return countOccurrences(this.parent.input.str) }
            }
        },
        "4": {
            test: "If a passage has a word and two instances of another word, return an object with two key-value pairs { word: 2, word: 1 }.",
            input: { str: "two one two" },
            expected: { "two": 2, "one": 1 },
            result: {
                parent: null,
                exec: function () { return countOccurrences(this.parent.input.str) }
            }
        }
    },
    // Translator
    "constructPigLatinWord": {
        "1": {
            test: "If the word is empty, return an empty string.",
            input: { word: "" },
            expected: "",
            result: {
                parent: null,
                exec: function () { return constructPigLatinWord(this.parent.input.word) }
            }
        },
        "2": {
            test: "If a word starts with a vowel, add way to the end of the word.",
            input: { word: "one" },
            expected: "oneway",
            result: {
                parent: null,
                exec: function () { return constructPigLatinWord(this.parent.input.word) }
            }
        },
        "3": {
            test: "If a word starts with a consonant not q, move consonant to the end and add ay.",
            input: { word: "two" },
            expected: "otway",
            result: {
                parent: null,
                exec: function () { return constructPigLatinWord(this.parent.input.word) }
            }
        },
        "4": {
            test: "If a word starts with qu, move qu to the end and add ay.",
            input: { word: "que" },
            expected: "equay",
            result: {
                parent: null,
                exec: function () { return constructPigLatinWord(this.parent.input.word) }
            }
        },
        "5": {
            test: "If a word starts with q not followed by u, move q to the end and add ay.",
            input: { word: "qatar" },
            expected: "atarqay",
            result: {
                parent: null,
                exec: function () { return constructPigLatinWord(this.parent.input.word) }
            }
        },
        "6": {
            test: "If a word starts with more than one consonant, move the consonants to the end and add ay.",
            input: { word: "squaw", },
            expected: "awsquay",
            result: {
                parent: null,
                exec: function () { return constructPigLatinWord(this.parent.input.word) }
            }
        },
    },
    "translateToPigLatin": {
        "1": {
            test: "If a passage is empty, return the passage.",
            input: { passage: "" },
            expected: "",
            result: {
                parent: null,
                exec: function () { return translateToPigLatin(this.parent.input.passage) }
            }
        },
        "2": {
            test: "If a passage has two words, one starting with a consonant and one with a vowel, the one starting with a consonant moves the consonant to the end and adds ay, and the other adds way to the end.",
            input: { passage: "one two" },
            expected: "oneway otway",
            result: {
                parent: null,
                exec: function () { return translateToPigLatin(this.parent.input.passage) }
            }
        },
        "3": {
            test: "If a passage has two words and starts with a non-alphanumeric character, return the passage in the correct order in pig latin.",
            input: { passage: "?one two" },
            expected: "?oneway otway",
            result: {
                parent: null,
                exec: function () { return translateToPigLatin(this.parent.input.passage) }
            }
        },
        "4": {
            test: "If a passage has two words and starts and ends with non-alphanumeric characters, return the passage in the correct order in pig latin.",
            input: { passage: "?one two." },
            expected: "?oneway otway.",
            result: {
                parent: null,
                exec: function () { return translateToPigLatin(this.parent.input.passage) }
            }
        }
    }
}

const functions = {
    "isEmpty": "ie",
    "filterPassage": "fp",
    "constructOccurrencesList": "col",
    "constructPassage": "cp",
    "countCharacters": "cc",
    "countWords": "cw",
    "countSentences": "cs",
    "countOccurrencesOfWord": "coow",
    "countOccurrences": "co",
    "constructPigLatinWord": "cplw",
    "translateToPigLatin": "ttpl"
}

function listFunctions() {
    console.log(`Command for running tests:\n\trunTests('function_name|abbr', true|false)\ntrue: run tests\nfalse: describe tests\n\nList of functions:`);
    for (const func of Object.entries(functions)) {
        console.log(`${func[0]} or ${func[1]}`);
    }
}

function runTests(funcName, testsList = true) {
    if (!funcName.length)
        if (testsList)
            Object.keys(tests).forEach(fn => describeFuncTest(fn))
        else
            Object.keys(tests).forEach(fn => runFuncTest(fn))
    else {

        let fn = '';
        for (const [func, short] of Object.entries(functions))
            if (func === funcName || short === funcName)
                fn = func;
        if (!fn) {
            console.log(funcName + 'does not exist');
            return;
        }

        if (testsList)
            describeFuncTest(fn)
        else
            runFuncTest(fn)
    }
}

function runFuncTest(funcName) {
    Object.keys(tests[funcName]).forEach(testCase => {
        const test = tests[funcName][testCase];
        test.result.parent = test;
    })


    Object.keys(tests[funcName]).forEach(testCase => {
        const test = tests[funcName][testCase];
        const outcome = test.result.exec();
        console.log(`${funcName} Test ${testCase}
        expected: ${formatReturn(test.expected)}
        result: ${formatReturn(outcome)}`);
    })
}

function describeFuncTest(funcName) {
    console.log(`Describe: ${funcName}`);
    Object.keys(tests[funcName]).forEach(testCase => {
        const testObj = tests[funcName][testCase];
        console.log('Test ' + testCase, testObj.test);
        const iptName = Object.keys(testObj.input);
        const ipt = iptName.reduce((acc, val, i) => {
            if (i !== 0)
                acc += '\n\t';
            acc += `const ${val} = ${formatReturn(testObj.input[val]) }` 

        }, "");
        console.log('Code: ', `${ipt}\n\t${funcName}(${iptName.join(', ')})`);
        console.log('Expected output: ', testObj.expected);
    })
}

function formatReturn(data) {
    let dataStr = '';
    switch (typeof data) {
        case 'boolean':
            dataStr = (data) ? 'true' : 'false';
            break;
        case 'string':
            dataStr = (data) ? data : '\"\"';
            break;
        case 'object':
            if (Array.isArray(data))
                dataStr = (data.length) ? data.toString() : 'undefined';
            else
                dataStr = (Object.keys(data).length) ? JSON.stringify(data) : 'undefined'
            break;
        case 'number':
            dataStr = (data) ? data.toString() : '0';
            break;
        default:
            dataStr = data + '';
    }
    return dataStr;
}