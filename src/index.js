import { historicalFacts } from './data/facts.js'

export class RandomHistoricalFacts {

  constructor() {
    this.facts = [...historicalFacts]

    if (this.facts.length === 0 || !this.facts) {
      throw new Error('No historical facts available')
    }
  }

  #validateFactsAvailability() {
    if (this.facts.length === 0) {
      throw new Error('No historical facts available')
    }
  }

  #validateNumbers() {
    if (typeof year !== 'number') {
      throw new Error('Year must be a number')
    }
  }

  #validateId(id){
    if (typeof id !== 'number' || isNaN(id) || id <= 0) {
      throw new Error('ID must be a positive number')
    }
  }

  // Returns a random historical fact
  getRandomFact() {
    this.#validateFactsAvailability()

    const randomIndex = Math.floor(Math.random() * this.facts.length) // Generate a random index
    return { ...this.facts[randomIndex] }
  }

  // Returns a historical fact by its ID
  getFactById(id) {
    this.#validateId(id)

    for (const fact of this.facts) { // Loop through each fact
      if (fact.id === id) { // If the ID matches, return the fact
        return { ...fact }
      }
    }
    return null
  }

  // Returns all historical facts
  getAllFacts() {
    this.#validateFactsAvailability()

    const result = []

    for (const fact of this.facts) { // Loop through each fact
      result.push({ ...fact }) // Add a copy of all facts to the result array
    }
    return result
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
    }
    if (result.length === 0) {
      throw new Error('Tag not found')
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
    this.#validateNumbers()

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
    this.#validateNumbers()

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

  // Returns historical facts sorted by year in ascending order
  getFactsSortedAscendingByYear() {
    return this.#sortByYear(true)

  }

  // Returns historical facts sorted by year in descending order
  getFactsSortedDescendingByYear() {
    return this.#sortByYear(false)
  }

  // Private method to sort facts by year
  #sortByYear(ascending = true) {
    this.#validateFactsAvailability()

    const result = [...this.facts]
    if (ascending) { // 
      result.sort((a, b) => a.year - b.year) // Sort in ascending order
    } else {
      result.sort((a, b) => b.year - a.year) // Sort in descending order
    }
    return ({ ...result })
  }
}