function runTests(functionName="") {
    const tests = {
        // Utilities
        "isEmpty": {
            "1": {
                test: "If a string is empty, return true.",
                input: {
                    str: ""
                },
                expected: true,
                result: () => isEmpty(this.input.str)
            },
            "2": {
                test: "If a string is not empty, return false.",
                input: {
                    str: "not-empty"
                },
                expected: false,
                result: () => isEmpty(this.input.str)
            }
        },
        "filterPassage": {
            "1": {
                test: "If passage is empty, return the passage.",
                input: {
                    filter: [""],
                    passage: ""
                },
                expected: "",
                result: () => filterPassage(this.input.filter, this.input.passage)
            },
            "2": {
                test: "If filter is empty, return the passage.",
                input: {
                    filter: [""],
                    passage: "one"
                },
                expected: "one",
                result: () => filterPassage(this.input.filter, this.input.passage)
            },
            "3": {
                test: "If filter is one word and passage does not contain an instance, return the passage.",
                input: {
                    filter: ["one"],
                    passage: "two"
                },
                expected: "two",
                result: () => filterPassage(this.input.filter, this.input.passage)
            },
            "4": {
                test: "If filter is one word and passage contains an instance, return the passage with the instance removed.",
                input: {
                    filter: ["one"],
                    passage: "one"
                },
                expected: "",
                result: () => filterPassage(this.input.filter, this.input.passage)
            },
            "5": {
                test: "If filter is more than one word and passage contains instances of any given word, return the passage with all instances removed.",
                input: {
                    filter: ["one", "two"],
                    passage: "three one three one two three"
                },
                expected: "three three three",
                result: () => filterPassage(this.input.filter, this.input.passage)
            }
        },
        "constructOccurrencesList": {
            "1": {
                test: "If object lists no occurrences, return null.",
                input: {
                    occ: {}
                },
                expected: null,
                result: () => constructOccurrencesList(this.input.occ)
            },
            "2": {
                test: "If object has one occurrence, produce html string for one list item.",
                input: {
                    occ: {
                        "one": 1
                    }
                },
                expected: "<li>one: 1</li>",
                result: () => constructOccurrencesList(this.input.occ)
            },
            "3": {
                test: "If has an object has two occurrences, produce html string for two list items.",
                input: {
                    occ: {
                        "one": 1,
                        "two": 2
                    }
                },
                expected: "<li>one: 1</li><li>two: 2</li>",
                result: () => constructOccurrencesList(this.input.occ)
            }
        },
        "constructPassageWBold": {
            "1": {
                test: "If a passage is empty, return the passage.",
                input: {
                    bold: "",
                    passage: ""
                },
                expected: "",
                result: () => constructPassageWBold(this.input.bold, this.input.passage)
            },
            "2": {
                test: "If bold is empty, return the passage with p tags.",
                input: {
                    bold: "",
                    passage: "one"
                },
                expected: "<p>one</p>",
                result: () => constructPassageWBold(this.input.bold, this.input.passage)
            },
            "3": {
                test: "If a passage does not contain any instance of bold, return the passage with p tags.",
                input: {
                    bold: "two",
                    passage: "one"
                },
                expected: "<p>one</p>",
                result: () => constructPassageWBold(this.input.bold, this.input.pronunciation)
            },
            "4": {
                test: "If a passage contains an instance of a bold, return the passage with p tags and the bold in strong tags.",
                input: {
                    bold: "two",
                    passage: "one two"
                },
                expected: "<p>one <strong>two</strong></p>",
                result: () => constructPassageWBold(this.input.bold, this.input.passage)
            },
            "5": {
                test: "If a passage contains an instance of a bold that is part of a word, return the passage with p tags and the bold part in strong tags.",
                input: {
                    bold: "two",
                    passage: "onetwo"
                },
                expected: "<p>one<strong>two</strong></p>",
                result: () => constructPassageWBold(this.input.bold, this.input.passage)
            },
            "6": {
                test: "If a passage contains two instances of bold, return the passage with p tags and two bold in strong tags.",
                input: {
                    bold: "two",
                    passage: "one two threetwo"
                },
                expected: "<p>one <strong>two</strong> three<strong>two</strong></p>",
                result: () => constructPassageWBold(this.input.bold, this.input.passage)
            }
        },
        // Analyzer
        "characterCounter": {
            "1": {
                test: "If a passage is empty, return 0.",
                input: {
                    passage: ""
                },
                expected: 0,
                result: () => characterCounter(this.input.passage)
            },
            "2": {
                test: "If a passage is one whitespace, return 0.",
                input: {
                    passage: " "
                },
                expected: 0,
                result: () => characterCounter(this.input.passage)
            },
            "3": {
                test: "If a passage has one character, return 1.",
                input: {
                    passage: "."
                },
                expected: 1,
                result: () => characterCounter(this.input.passage)
            },
            "4": {
                test: "If a passage has two characters, return 2.",
                input: {
                    passage: "a."
                },
                expected: 2,
                result: () => characterCounter(this.input.passage)
            }
        },
        "wordCounter": {
            "1": {
                test: "If a passage is empty, return 0.",
                input: {
                    passage: ""
                },
                expected: 0,
                result: () => wordCounter(this.input.passage)
            },
            "2": {
                test: "If a passage has one word, return 1.",
                input: {
                    passage: "one"
                },
                expected: 1,
                result: () => wordCounter(this.input.passage)
            },
            "3": {
                test: "If a passage has only special characters, return 0.",
                input: {
                    passage: "?!--!"
                },
                expected: 0,
                result: () => wordCounter(this.input.passage)
            },
            "4": {
                test: "If a passage has two words separated by a special character, return 2.",
                input: {
                    passage: "object.keys()"
                },
                expected: 2,
                result: () => wordCounter(this.input.passage)
            },
            "5": {
                test: "If a passage has two words separated by a space, return 2.",
                input: {
                    passage: "one two"
                },
                expected: 2,
                result: () => wordCounter(this.input.passage)
            }
        },
        "sentenceCounter": {
            "1": {
                test: "If a passage is empty, return 0.",
                input: {
                    passage: ""
                },
                expected: 0,
                result: () => sentenceCounter(this.input.passage)
            },
            "2": {
                test: "If a passage has one word, return 1.",
                input: {
                    passage: "one"
                },
                expected: 1,
                result: () => sentenceCounter(this.input.passage)
            },
            "3": {
                test: "If a passage has more than one word but no ending punctuation, return 1.",
                input: {
                    passage: "one two"
                },
                expected: 1,
                result: () => sentenceCounter(this.input.passage)
            },
            "4": {
                test: "If a passage has one word and an ending punctuation, return 1.",
                input: {
                    passage: "one."
                },
                expected: 1,
                result: () => sentenceCounter(this.input.passage)
            },
            "5": {
                test: "If a passage has two words separated by an ending punctuation, return 2.",
                input: {
                    passage: "one? two"
                },
                expected: 2,
                result: () => sentenceCounter(this.input.passage)
            }
        },
        "numOfOccurrences": {
            "1": {
                test: "If a passage and word are empty strings, return 0.",
                input: {
                    word: "",
                    passage: ""
                },
                expected: 0,
                result: () => numOfOccurrences(this.input.word, this.input.passage)
            },
            "2": {
                test: "If a word is empty, return 0.",
                input: {
                    word: "",
                    passage: "one"
                },
                expected: 0,
                result: () => numOfOccurrences(this.input.word, this.input.passage)
            },
            "3": {
                test: "If a passage is empty, return 0.",
                input: {
                    word: "one",
                    passage: ""
                },
                expected: 0,
                result: () => numOfOccurrences(this.input.word, this.input.passage)
            },
            "4": {
                test: "If a passage does not contain an instance of a word, return 0.",
                input: {
                    word: "one",
                    passage: "two three"
                },
                expected: 0,
                result: () => numOfOccurrences(this.input.word, this.input.passage)
            },
            "5": {
                test: "If a passage contains an instance of a word, return 1.",
                input: {
                    word: "one",
                    passage: "one two"
                },
                expected: 1,
                result: () => numOfOccurrences(this.input.word, this.input.passage)
            },
            "6": {
                test: "If a passage contains two instances of a word, return 2.",
                input: {
                    word: "one",
                    passage: "one one"
                },
                expected: 2,
                result: () => numOfOccurrences(this.input.word, this.input.passage)
            }
        },
        "occurrencesOfWords": {
            "1": {
                test: "If a passage is empty, return null.",
                input: {
                    str: ""
                },
                expected: null,
                result: () => occurrencesOfWords(this.input.str)
            },
            "2": {
                test: "If a passage has one word, return an object with one key-value pair { word: 1 }.",
                input: {
                    str: "one"
                },
                expected: {
                    "one": 1
                },
                result: () => occurrencesOfWords(this.input.str)
            },
            "3": {
                test: "If a passage has two instances of a word, return an object with one key-value pair { word: 2}.",
                input: {
                    str: "one one"
                },
                expected: {
                    "one": 2
                },
                result: () => occurrencesOfWords(this.input.str)
            },
            "4": {
                test: "If a passage has a word and two instances of another word, return an object with two key-value pairs { word: 2, word: 1 }.",
                input: {
                    str: "two one two"
                },
                expected: {
                    "two": 2,
                    "one": 1
                },
                result: () => occurrencesOfWords(this.input.str)
            }
        },

        // Translator
        "translateToPigLatin": {
            "1": {
                test: "If a passage is empty, return the passage.",
                input: {
                    passage: ""
                },
                expected: "",
                result: () => translateToPigLatin(this.input.passage)
            },
            "2": {
                test: "If a passage has one word starting with a vowel, add way to the end of the word.",
                input: {
                    passage: "one"
                },
                expected: "oneway",
                result: () => translateToPigLatin(this.input.passage)
            },
            "3": {
                test: "If a passage has one word starting with a consonant not q, move consonant to the end and add ay.",
                input: {
                    passage: "two"
                },
                expected: "wotay",
                result: () => translateToPigLatin(this.input.passage)
            },
            "4": {
                test: "If a passage has one word starting with qu, move qu to the end and add ay.",
                input: {
                    passage: "que"
                },
                expected: "equay",
                result: () => translateToPigLatin(this.input.passage)
            },
            "5": {
                test: "If a passage has one word that starts with more than one consonant, move the consonants to the end and add ay.",
                input: {
                    passage: "squaw",
                },
                expected: "awsquay",
                result: () => translateToPigLatin(this.input.passage)
            },
            "6": {
                test: "If a passage has two words, one starting with a consonant and one with a vowel, the one starting with a consonant moves the consonant to the end and adds ay, and the other adds way to the end.",
                input: {
                    passage: "one two"
                },
                expected: "oneway wotay",
                result: () => translateToPigLatin(this.input.passage)
            }
        }
    }

    const compareVal = (expected, returned) => {
        if (typeof expected !== typeof returned)
            return false;
        let status = false;
        switch (typeof expected) {
            case 'boolean':
                status = Boolean(expected) === Boolean(returned);
                break;
            case 'object':
                status = (Array.isArray(expected)) ?
                    expected.join('') === returned.join() :
                    Object.keys(expected).join(',') === Object.keys(returned).join(',')
                    && Object.values(expected).join(',') === Object.values(returned).join(',');
                break;
            default:
                status = expected === returned;
                    
        }
        return status;
    }

    const execute = (functionName) => Object.keys(tests[functionName]).forEach((key) => {
        console.log(
            `Test ${key}: ${tests[functionName][key].test}\n`,
            (compareVal(
                tests[functionName][key].expected),
                tests[functionName][key].result
                ) ?
                'success' :
                'failure'
        )
    })

    if (!functionName)
        Object.keys(tests).forEach((key) => execute(key))
    else
        execute(functionName)
}
