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
    return this.#findRandomFact(true)
  }

  /**
   * Returns a random family-friendly historical fact.
   * @returns {Object} A random family-friendly historical fact.
   */
  getRandomFamilyFriendlyFact() {
    return this.#findRandomFact(false)
  }

  /**
   * Private method to find a random fact with or without explicit content.
   * @private
   * @param {boolean} includeAll - Parameter which decides whether or not you want explicit content.
   * @returns {Object} A random historical fact with or without explicit content.
   */
  #findRandomFact(includeAll = true) {
    this.#validateFactsAvailability()

    const familyFriendlyFacts = this.#findFamilyFriendlyFacts()

    const randomIndex = Math.floor(Math.random() * this.facts.length) // Index for random fact
    const randomIndexFamilyFriendly = Math.floor(Math.random() * familyFriendlyFacts.length) // Index for random family friendly fact

    if (!includeAll) { // If explicit content is not allowed, return a random family friendly fact
      return { ...familyFriendlyFacts[randomIndexFamilyFriendly] }
    } else {
      return { ...this.facts[randomIndex] }
    }
  }

  /**
   * Private method to find all family-friendly facts.
   * @private
   * @returns {Array<Object>} An array of all family-friendly historical facts.
   */
  #findFamilyFriendlyFacts() {
    this.#validateFactsAvailability()

    const result = []
    for (const fact of this.facts) {
      if (!fact.isExplicit) {
        result.push(fact)
      }
    }
    return result
  }

  /**
   * Returns all historical facts.
   * @returns {Array<Object>} An array of all historical facts.
   */
  getAllFacts() {
    return this.#findAllFacts(true)
  }

  /**
   * Return all facts without explicit content.
   * @returns {Array<Object>} An array of all historical facts without explicit content.
   */
  getAllFamilyFriendlyFactsOnly() {
    return this.#findAllFacts(false)
  }

  /**
   * Privat method to return facts with or without explicit content.
   * @private
   * @param {boolean} includeAll - Parameter which decides whether or not you want explicit content.
   * @returns {Array<Object>} An array of historical facts with or without explicit content.
   */
  #findAllFacts(includeAll = true) {
    this.#validateFactsAvailability()

    const result = []

    for (const fact of this.facts) {
      if (includeAll) {
        result.push({ ...fact })
      } else if (!includeAll && !fact.isExplicit) {
        result.push({ ...fact })
      }
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
   * Returns a historical fact by its ID.
   * @param {number} id - The ID of the historical fact.
   * @returns {Object|null} The historical fact or null if not found.
   */
  getFactById(id) {
    this.#validateId(id)

    for (const fact of this.facts) {
      if (fact.id === id) { // If the ID matches, return the fact
        return { ...fact }
      }
    }
    return null
  }

  /**
   * Returns historical facts that match a specific tag.
   * @param {string} desiredTag - The tag to match.
   * @returns {Array<Object>} An array of historical facts that match the tag.
   */
  getFactsByTag(desiredTag) {
    let result = []

    for (const fact of this.facts) {
      if (!fact.tags) continue
      result = this.#getMatchingTags(result, fact, desiredTag) // Check if any tag matches the desired tag
    }
    if (result.length === 0) {
      throw new Error('Tag not found')
    }
    return result
  }

  /**
   * Private method to get matching tags from a fact.
   * @private
   * @param {Array<Object>} result - The array to store matching facts.
   * @param {Object} fact - The historical fact to check.
   * @param {string} desiredTag - The tag to match.
   * @returns {Array<Object>} The updated array of matching facts.
   */
  #getMatchingTags(result, fact, desiredTag) {
    for (const factTag of fact.tags) {
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
   * Returns all available tags.
   * @returns {Array<string>} An array of all available tags.
   */
  getAllFactTags() {
    let result = new Set() // Store result in array to avoid duplicates

    for (const fact of this.facts) {
      result = this.#extractTagsFromFacts(result, fact)
    }
    return Array.from(result)
  }

  /**
   * Private method to extract tags from a fact and add them to the result set.
   * @private
   * @param {Set<string>} result The set of strings to add to the result.
   * @param {Object} fact The historical fact to check.
   * @returns {Set<string>} The updated set of tags.
   */
  #extractTagsFromFacts(result, fact) {
    for (const factTag of fact.tags) {
      result.add(factTag)
    }
    return result
  }

  /**
   * Returns historical facts that match a specific period.
   * @param {string} desiredPeriod - The period to match.
   * @returns {Array<Object>} An array of historical facts that match the period.
   */
  getFactsByPeriod(desiredPeriod) {
    let result = []
    for (const fact of this.facts) {
      if (this.#isMatchingOutput(fact.period, desiredPeriod)) {
        result.push({ ...fact })
      }
    }
    if (result.length === 0) {
      throw new Error(`Period not found. Please choose between: ${this.#getAllFactPeriods().join(', ')}`)
    }
    return result
  }

  /**
   * Returns all available periods.
   * @returns {Array<string>} An array of all available periods.
   */
  #getAllFactPeriods() {
    let result = new Set()

    for (const fact of this.facts) {
      result.add(fact.period)
    }
    return Array.from(result)
  }


  /**
   * Returns historical facts before a specific year.
   * @param {number} year - The year to check.
   * @returns {Array<Object>} An array of historical facts before the specified year.
   */
  getFactsBeforeYear(year) {
    return this.#sortFactsBeforeYear(year, true)
  }

  /**
   * Returns historical facts after a specific year.
   * @param {number} year - The year to check.
   * @returns {Array<Object>} An array of historical facts after the specified year.
   */
  getFactsAfterYear(year) {
    return this.#sortFactsBeforeYear(year, false)
  }

  /**
   * Private method to sort facts before or after a specific year.
   * @private
   * @param {number} year - The year to check.
   * @param {boolean} before - If true, sort before the year; if false, sort after.
   * @returns {Array<Object>} An array of historical facts sorted by the specified year.
   */
  #sortFactsBeforeYear(year, before = true) {
    this.#validateYear(year)
    const result = []

    for (const fact of this.facts) {
      if (before && fact.year <= year) {
        result.push({ ...fact })
      } else if (!before && fact.year >= year) {
        result.push({ ...fact })
      }
    }
    return result
  }


  /**
   * Returns historical facts sorted by year in ascending order.
   * @returns {Array<Object>} An array of historical facts sorted by year in ascending order.
   */
  getAllFactsSortedAscendingByYear() {
    return this.#sortFactsByYear(true)

  }

  /**
   * Returns historical facts sorted by year in descending order.
   * @returns {Array<Object>} An array of historical facts sorted by year in descending order.
   */
  getAllFactsSortedDescendingByYear() {
    return this.#sortFactsByYear(false)
  }

  /**
   * Private method to sort facts by year in ascending or descending order.
   * @private
   * @param {boolean} ascending - If true, sort in ascending order; if false, sort in descending order.
   * @returns {Array<Object>} An array of historical facts sorted by year.
   */
  #sortFactsByYear(ascending = true) {
    this.#validateFactsAvailability()

    const result = [...this.facts]
    if (ascending) {
      result.sort((a, b) => a.year - b.year)
    } else {
      result.sort((a, b) => b.year - a.year)
    }
    return result
  }
}