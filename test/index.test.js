import { RandomHistoricalFacts } from '../src/index.js'

const historicalFacts = new RandomHistoricalFacts()

test('Constructor should create an instance of RandomHistoricalFacts', () => {
    const testInstance = new RandomHistoricalFacts()
    const isCorrectType = testInstance instanceof RandomHistoricalFacts

    expect(isCorrectType).toBe(true)
})

test('getRandomFact should return a random fact', () => {
    const fact = historicalFacts.getRandomFact(true)

    expect(fact).toHaveProperty('id')
    expect(fact).toHaveProperty('fact')
    expect(fact).toHaveProperty('imageUrl')
    expect(fact).toHaveProperty('tags')
    expect(fact).toHaveProperty('isExplicit')
    expect(fact).toHaveProperty('period')
    expect(fact).toHaveProperty('year')
})

test('getRandomFamilyFriendlyFact should return a random fact without explicit content', () => {
    for (let i = 0; i < 10; i++) {
        const fact = historicalFacts.getRandomFamilyFriendlyFact()
        expect(fact.isExplicit).toBe(false)
    }
})

test('getAllFacts should return all facts', () => {
    const facts = historicalFacts.getAllFacts()
    const count = historicalFacts.getFactsCount()

    expect(facts.length).toBe(count)
})

test('getAllFamilyFriendlyFactsOnly should return all non-explicit facts', () => {
    const facts = historicalFacts.getAllFamilyFriendlyFactsOnly()

    for (const fact of facts) {
        expect(fact.isExplicit).toBe(false)
    }
})

test('getFactsCount should return the number of facts', () => {
    const count = historicalFacts.getFactsCount()
    const facts = historicalFacts.getAllFacts()

    expect(count).toBe(facts.length)

})

describe('getFactById', () => {

    test('should throw an error when ID is not a number', () => {
        function notANumber() {
            historicalFacts.getFactById('string')
        }
        expect(notANumber).toThrow('ID must be a positive number')
    })

    test('should throw an error when ID is not a number', () => {
        function notAPositiveNumber() {
            historicalFacts.getFactById(-1)
        }
        expect(notAPositiveNumber).toThrow('ID must be a positive number')
    })
})

test('getFactsByTag should return only facts with specified tag', () => {
    const facts = historicalFacts.getFactsByTag('war')

    for (const fact of facts) {
        expect(fact.tags.includes('war')).toBe(true)
    }
})

test('getAllFactTags should return all available tags', () => {
    const tags = historicalFacts.getAllFactTags()
    expect(Array.isArray(tags)).toBe(true)
    expect(tags.length).toBeGreaterThan(0)

    for (const tag of tags) {
        expect(typeof tag === 'string').toBe(true)
    }
})

test('getFactsByPeriod should return only facts with specified period', () => {
    const facts = historicalFacts.getFactsByPeriod('medieval')

    for (const fact of facts) {
        expect(fact.period.includes('medieval')).toBe(true)
    }
})

describe('getFactsBeforeYear', () => {

    test('should throw an error when year is not a number', () => {
        function notANumber() {
            historicalFacts.getFactsBeforeYear('string')
        }
        expect(notANumber).toThrow('Year must be a number')
    })

    test('should return only facts before specified year', () => {
        const facts = historicalFacts.getFactsBeforeYear(0)

        for (const fact of facts) {
            if (fact.year <= 0) {
                expect(fact.year).toBeLessThan(1)
            }
        }
    })
})

describe('getFactsAfterYear', () => {

    test('should throw an error when year is not a number', () => {
        function notANumber() {
            historicalFacts.getFactsAfterYear('string')
        }
        expect(notANumber).toThrow('Year must be a number')
    })

    test('should return only facts after specified year', () => {
        const facts = historicalFacts.getFactsAfterYear(0)

        for (const fact of facts) {
            if (fact.year >= 0) {
                expect(fact.year).toBeGreaterThan(0)
            }
        }
    })
})

describe('getAllFactsSortedAscendingByYear', () => {

    test('should throw an error if there are no facts available', () => {

        const testInstance = new RandomHistoricalFacts()
        testInstance.facts = []


        function emptyArrayError() {
            testInstance.getAllFactsSortedAscendingByYear()
        }
        expect(emptyArrayError).toThrow('No historical facts available')
    })
})
