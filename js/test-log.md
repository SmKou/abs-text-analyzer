### Jun 10

**Run 1: Failed Tests**
filterPassage               T: 5
1.  expected: three three three
    result: three three one two three

constructOccurrencesList    T: 2-3
2.  expected: <li>one: 1</li>
    result: undefined
3.  expected: <li>one: 1</li><li>two: 2</li>
    result: undefined

constructPassage            T: 1-2
1.  expected: 
    result: null
2.  expected: <p>one</p>
    result: <p>o<strong></strong>n<strong></strong>e</p>

countCharacters             T: 1-4
1.  expected: 0
    result: undefined
2.  expected: 0
    result: undefined
3.  expected: 1
    result: undefined
4.  expected: 2
    result: undefined

countOccurrencesOfWord      T: 1-2
1.  expected: 0
    result: 1
2.  expected: 0
    result: 4

countOccurrences            T(u): 1-4
1.  expected: [object Object]
    result: [object Object]
2.  expected: [object Object]
    result: [object Object]
3.  expected: [object Object]
    result: [object Object]
4.  expected: [object Object]
    result: [object Object]

constructPigLatin           T: 3
3.  expected: wotay
    result: otway

translateToPigLatin         T: 2-4
2.  expected: oneway wotay
    result: oway nayewaytaywayoway
3.  expected: ?oneway wotay
    result: ?oway nayewaytaywayoway
4.  expected: ?oneway wotay.
    result: ?oway nay.ewaytaywayoway

**Notes**
- Failed tests for countOccurrences may be testing error
- Mod test execution
  Show true or false for success and failure
  If false, show expected value and result