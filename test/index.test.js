// ESM, du har "type": "module"
import { RandomHistoricalFacts } from '../src/index.js'

// OBS: Om din metod är static MÅSTE du ha static data i klassen:
// export class RandomHistoricalFacts { static facts = [...historicalFacts]; static getRandomFact() { ... } }

function printFact(f) {
  console.log('\n🎲 Random historical fact')
  console.log(`ID: ${f.id}`)
  console.log(f.fact)
  console.log(`Period: ${f.period} (year: ${f.year})`)
  console.log(`Tags: ${f.tags.join(', ')}`)
  console.log(`Image: ${f.imageUrl}\n`)
}

// 
let fact
if (typeof RandomHistoricalFacts.getRandomFact === 'function') {
  fact = RandomHistoricalFacts.getRandomFact()        // static-variant
} else {
  const store = new RandomHistoricalFacts()           // instans-variant
  fact = store.getRandomFact()
}

printFact(fact)
