import { RandomHistoricalFacts } from '../src/index.js'

const historicalFacts = new RandomHistoricalFacts()


test('Constructor should create an instance of RandomHistoricalFacts', () => {
    const testInstance = new RandomHistoricalFacts()
    const isCorrectType = testInstance instanceof RandomHistoricalFacts
    expect(isCorrectType).toBe(true)
})