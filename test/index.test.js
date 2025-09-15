import { RandomHistoricalFacts } from '../src/index.js'

function printRandomFact(f) {
  console.log('\n🎲 Random historical fact')
  console.log(`ID: ${f.id}`)
  console.log(f.fact)
  console.log(`Period: ${f.period} (year: ${f.year})`)
  console.log(`Tags: ${f.tags.join(', ')}`)
  console.log(`Image: ${f.imageUrl}\n`)
}
const RandomHistoricalFactsInstance = new RandomHistoricalFacts()
const fact = RandomHistoricalFactsInstance.getRandomFact()
printRandomFact(fact)

function printFactsCount(c) {
  console.log(`📚 Total historical facts available: ${c}\n`)
}
printFactsCount(RandomHistoricalFactsInstance.getFactsCount())