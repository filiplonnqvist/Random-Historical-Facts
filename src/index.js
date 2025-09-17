import { historicalFacts } from './data/facts.js'

export class RandomHistoricalFacts {

  constructor() {
    this.facts = [...historicalFacts]

    if (this.facts.length === 0 || !this.facts) {
      throw new Error('No historical facts available')
    }
  }

  getRandomFact() {
    if (this.facts.length === 0) {
      throw new Error('No historical facts available')
    }

    const randomIndex = Math.floor(Math.random() * this.facts.length)
    return this.facts[randomIndex]
  }

  getFactById(id) {
    if (typeof id !== 'number' || isNaN(id) || id <= 0) {
      throw new Error('ID must be a positive number')
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
      throw new Error('No historical facts available')
    }
    return [...this.facts]
  }

  getFactsCount() {
    return this.facts.length
  }

  getFactsByTag(desiredTag) {
    let result = []

    for (const fact of this.facts) {
      if (!fact.tags) continue

      result = this.#getAllMatchingTags(result, fact, desiredTag)

      if (result === 0) {
        throw new Error('Tag not found')
      }
    }
    return result

  }

  #getAllMatchingTags(result, fact, desiredTag) {
    for (const factTag of fact.tags) {
      if (this.#isMatchingOutput(factTag, desiredTag)) {
        result.push({ ...fact })
        break
      }
    }
    return result
  }

  #isMatchingOutput(existingOutput, desiredOutput) {
    return existingOutput.toLowerCase().trim() === desiredOutput.toLowerCase().trim()
  }

  getFactsByPeriod(desiredPeriod) {
    let result = []

    for (const fact of this.facts) {
      if (!fact.tags) continue

      result = this.#getAllMatchingPeriods(result, fact, desiredPeriod)
      
      if (result === 0) {
        throw new Error('Period not found. Please choose between "prehistoric", "ancient", "middle ages", "renaissance" or "early modern"')
      }
    }
    return result
  }

  #getAllMatchingPeriods(result, fact, desiredPeriod) {
    for (const factTag of fact.period) {
      if (this.#isMatchingOutput(factTag, desiredPeriod)) {
        result.push({ ...fact })
        break
      }
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

  getFactsSortedByYear() {
    if (this.facts.length === 0) {
      throw new Error('No historical facts available')
    }


  }
}