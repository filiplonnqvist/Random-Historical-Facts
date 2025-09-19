/**
 * @file Main module for managing and retrieving random historical facts.
 * @module src/index.js
 * @author Filip Lönnqvist <fl223km@student.lnu.se>
 * @version 1.0.0
 * @license MIT
 */

import { historicalFacts } from './data/facts.js'

/**
 * Class representing a collection of random historical facts.
 */
export class RandomHistoricalFacts {

  constructor() {
    this.facts = [...historicalFacts]

    if (this.facts.length === 0 || !this.facts) {
      throw new Error('No historical facts available')
    }
  }

  /**
   * Private method to validate if there are any historical facts available.
   * @private
   * @throws {Error} If there are no historical facts available.
   */
  #validateFactsAvailability() {
    if (this.facts.length === 0) {
      throw new Error('No historical facts available')
    }
  }

  /**
   * Private method to validate the year parameter.
   * @private
   * @param {number} year - The year to validate.
   * @throws {Error} If the year is not a number.
   */
  #validateYear(year) {
    if (typeof year !== 'number') {
      throw new Error('Year must be a number')
    }
  }

  /**
   * Private method to validate the ID parameter.
   * @private
   * @param {number} id - The ID to validate.
   * @throws {Error} If the ID is not a positive number.
   */
  #validateId(id) {
    if (typeof id !== 'number' || isNaN(id) || id <= 0) {
      throw new Error('ID must be a positive number')
    }
  }

  /**
   * Returns a random historical fact.
   * @returns {Object} A random historical fact.
   */
  getRandomFact() {
    this.#validateFactsAvailability()

    const randomIndex = Math.floor(Math.random() * this.facts.length) // Generate a random index
    return { ...this.facts[randomIndex] }
  }

  /**
   * Returns a historical fact by its ID.
   * @param {number} id - The ID of the historical fact.
   * @returns {Object|null} The historical fact or null if not found.
   */
  getFactById(id) {
    this.#validateId(id)

    for (const fact of this.facts) { // Loop through each fact
      if (fact.id === id) { // If the ID matches, return the fact
        return { ...fact }
      }
    }
    return null
  }

  /**
   * Returns all historical facts.
   * @returns {Array<Object>} An array of all historical facts.
   */
  getAllFacts() {
    this.#validateFactsAvailability()

    const result = []

    for (const fact of this.facts) { // Loop through each fact
      result.push({ ...fact }) // Add a copy of all facts to the result array
    }
    return result
  }

  /**
   * Returns the total number of historical facts.
   * @returns {number} The total number of historical facts.
   */
  getFactsCount() {
    return this.facts.length
  }

  /**
   * Returns historical facts that match a specific tag.
   * @param {string} desiredTag - The tag to match.
   * @returns {Array<Object>} An array of historical facts that match the tag.
   */
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

  /**
   * Private method to get matching tags from a fact.
   * @param {Array<Object>} result - The array to store matching facts.
   * @param {Object} fact - The historical fact to check.
   * @param {string} desiredTag - The tag to match.
   * @returns {Array<Object>} The updated array of matching facts.
   */
  #getMatchingTags(result, fact, desiredTag) {
    for (const factTag of fact.tags) { // Loop through each tag of the fact
      if (this.#isMatchingOutput(factTag, desiredTag)) { // Check if the tag matches the desired tag
        result.push({ ...fact })
        break
      }
    }
    return result
  }

  /**
   * Private method to check if two strings match (case-insensitive and trimmed).
   * @private
   * @param {string} existingOutput - The existing output string.
   * @param {string} desiredOutput - The desired output string.
   * @returns {boolean} True if the strings match, false otherwise.
   */
  #isMatchingOutput(existingOutput, desiredOutput) {
    return existingOutput.toLowerCase().trim() === desiredOutput.toLowerCase().trim()
  }

  /**
   * Returns historical facts that match a specific period.
   * @param {string} desiredPeriod - The period to match.
   * @returns {Array<Object>} An array of historical facts that match the period.
   */
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


  /**
   * Returns historical facts before a specific year.
   * @param {number} year - The year to check.
   * @returns {Array<Object>} An array of historical facts before the specified year.
   */
  getFactsBeforeYear(year) {
    this.#validateYear(year)

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
    this.#validateYear(year)

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
    return result
  }
}