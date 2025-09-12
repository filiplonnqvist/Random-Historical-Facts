/**
 * @file Main module for Random Historical Facts NPM package.
 * @module random-historical-facts
 * @author Filip Lönnqvist <fl223km@student.lnu.se>
 * @version 1.0.0
 */

import { historicalFacts } from './data/facts.js'

export class RandomHistoricalFacts {

    /**
     * Creates an instance of RandomHistoricalFacts.
     * @throws {Error} If there are no historical facts available.
     */
    constructor() {
        this.facts = [...historicalFacts]

        if (this.facts.length === 0 || !this.facts) {
            throw new Error('No historical facts available.')
        }
    }
  /**
   * Get a random historical fact.
   * @returns {Object} A random historical fact object.
   */
  getRandomFact() {
    const randomIndex = Math.floor(Math.random() * this.facts.length)
    return this.facts[randomIndex]
  }
}