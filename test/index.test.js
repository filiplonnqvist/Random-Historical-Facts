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