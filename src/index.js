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
    return this.facts[randomIndex]
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

    const result = []

    for (const fact of this.facts) {
      if (!fact.tags) continue

      for (const factTag of fact.tags) {
        if (factTag.toLowerCase().trim() === tag.toLowerCase().trim()) {
          result.push({ ...fact })
          break
        }
      }

      if (result === 0) {
        throw new Error('Tag not found')
      }
    }
    return result

  }

  getFactsByPeriod(period) {
    if (typeof period !== 'string') {
      throw new Error('Period must be a string')
    }

    const result = []

    for (const fact of this.facts) {
      if (fact.period.toLowerCase().trim() === period.toLowerCase().trim()) {
        result.push({ ...fact })
      }
    }

    if (result === 0) {
      throw new Error('Period not found. Please choose between "prehistoric", "ancient", "middle ages", "renaissance" or "early modern"')
    }
    return result
  }

  getFactsBeforeYear(year) {
    if (typeof year !== 'number') {
      throw new Error('Year must be a number')
    }

    const result = []

    for (const fact of this.facts) {
      if (fact.year <= year) {
        result.push({ ...fact })
      }
    }

    if (result.length === 0) {
      throw new Error(`No facts before year ${year}`)
    }
    return result
  }

  getFactsAfterYear(year) {
    if (typeof year !== 'number') {
      throw new Error('Year must be a number')
    }

    const result = []

    for (const fact of this.facts) {
      if (fact.year >= year) {
        result.push({ ...fact })
      }
    }

    if (result.length === 0) {
      throw new Error(`No facts after year ${year}`)
    }
    return result
  }
}