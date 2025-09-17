import { historicalFacts } from './data/facts.js'

export class RandomHistoricalFacts {

  constructor() {
    this.facts = [...historicalFacts]

    if (this.facts.length === 0 || !this.facts) {
      throw new Error('No historical facts available')
    }
  }
  
  // Returns a random historical fact
  getRandomFact() {
    if (this.facts.length === 0) {
      throw new Error('No historical facts available')
    }

    const randomIndex = Math.floor(Math.random() * this.facts.length)
    return {...this.facts[randomIndex]}
  }

  // Returns a historical fact by its ID
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

  // Returns all historical facts
  getAllFacts() {
    if (this.facts.length === 0) {
      throw new Error('No historical facts available')
    }
    return [...this.facts]
  }

  // Returns the total number of historical facts
  getFactsCount() {
    return this.facts.length
  }

  // Returns historical facts that match a specific tag
  getFactsByTag(desiredTag) {
    let result = []

    for (const fact of this.facts) { // Loop through each fact
      if (!fact.tags) continue // Skip if there are no tags

      result = this.#getMatchingTags(result, fact, desiredTag) // Check if any tag matches the desired tag

      if (result.length === 0) {
        throw new Error('Tag not found')
      }
    }
    return result

  }

  // Private method to check for matching tags in a fact
  #getMatchingTags(result, fact, desiredTag) {
    for (const factTag of fact.tags) { // Loop through each tag of the fact
      if (this.#isMatchingOutput(factTag, desiredTag)) { // Check if the tag matches the desired tag
        result.push({ ...fact })
        break
      }
    }
    return result
  }

  // Private method to compare strings case-insensitively and trim whitespace
  #isMatchingOutput(existingOutput, desiredOutput) {
    return existingOutput.toLowerCase().trim() === desiredOutput.toLowerCase().trim()
  }

  // Returns historical facts from a specific period  
  getFactsByPeriod(desiredPeriod) {
    let result = []

    for (const fact of this.facts) { // Loop through each fact
      if (this.#isMatchingOutput(fact.period, desiredPeriod)) { // Check if the period matches the desired period
        result.push({ ...fact })
      }
    }
    if (result.length === 0) {
      throw new Error('Period not found. Please choose between "prehistoric", "ancient", "middle ages", "renaissance" or "early modern"')
    }
    return result
  }


  // Returns historical facts before a specific year
  getFactsBeforeYear(year) {
    if (typeof year !== 'number') {
      throw new Error('Year must be a number')
    }

    const result = []

    for (const fact of this.facts) { // Loop through each fact
      if (fact.year <= year) { // Check if the year is before or equal to the specified year
        result.push({ ...fact })
      }
    }

    if (result.length === 0) {
      throw new Error(`No facts before year ${year}`)
    }
    return result
  }

  // Returns historical facts after a specific year
  getFactsAfterYear(year) {
    if (typeof year !== 'number') {
      throw new Error('Year must be a number')
    }

    const result = []

    for (const fact of this.facts) { // Loop through each fact
      if (fact.year >= year) { // Check if the year is after or equal to the specified year
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