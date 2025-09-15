import { historicalFacts } from './data/facts.js'

export class RandomHistoricalFacts {

    constructor() {
        this.facts = [...historicalFacts]

        if (this.facts.length === 0 || !this.facts) {
            throw new Error('No historical facts available.')
        }
    }

  getRandomFact() {
    if (this.facts.length === 0) {
      throw new Error('No historical facts available.')
    }

    const randomIndex = Math.floor(Math.random() * this.facts.length)
    return this.facts[randomIndex] // Return a copy to prevent external mutation
  }

  getFactById(id) {
    if (typeof id !== 'number' || isNaN(id) || id <= 0) {
      throw new Error('ID must be a positive number.')
    }

    for (const fact of this.facts) {
      if (fact.id === id) {
        return { ...fact }
      }
    }
    return null
  }

  getAllFacts() {
    if (this.facts.length === 0) {
      throw new Error('No historical facts available.')
    }
    return [...this.facts]
  }

  getFactsCount() {
    return this.facts.length
  }

  getFactsByTag(tag) {
    if (typeof tag !== 'string') {
      throw new Error('Tag must be a string')
    }

    const normalizedTag = tag.toLowerCase().trim()
    const result = []

    for (const fact of this.facts) {
      if (!fact.tags) continue

      for (const factTag of fact.tags) {
        if (factTag.toLowerCase().trim() === normalizedTag) {
          result.push(fact)
          break
        }
      }
  }
      return result

  }
}