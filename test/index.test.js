import { RandomHistoricalFacts } from '../src/index.js'

// function printRandomFact(randomFact) {
//   console.log(typeof randomFact)
//   console.log(Array.isArray(randomFact))
//   console.log('\n🎲 Random historical fact')
//   console.log(`ID: ${randomFact.id}`)
//   console.log(randomFact.fact)
//   console.log(`Period: ${randomFact.period} (year: ${randomFact.year})`)
//   console.log(`Tags: ${randomFact.tags.join(', ')}`)
//   console.log(`Image: ${randomFact.imageUrl}\n`)
// }
const RandomHistoricalFactsInstance = new RandomHistoricalFacts()
// const fact = RandomHistoricalFactsInstance.getRandomFact()
// printRandomFact(fact)

// // Print facts count
function printFactsCount(count) {
  console.log(`📚 Total historical facts available: ${count}\n`)
}
printFactsCount(RandomHistoricalFactsInstance.getFactsCount())

// Print all facts
// function printAllFacts(allFacts) {
//   console.log('\n # All historical facts')

//   for (const fact of allFacts) {
//     console.log(fact.fact)
//   }
// }

// printAllFacts(RandomHistoricalFactsInstance.getAllFacts())

// Print selected tags
// console.log('Tags for "art":', RandomHistoricalFactsInstance.getFactsByTag('art'))

// console.log('All fact tags:', RandomHistoricalFactsInstance.getAllFactsTags())

// Print selected periods
// console.log('Period:', RandomHistoricalFactsInstance.getFactsByPeriod('ancient'))

console.log('Period: "time before":', RandomHistoricalFactsInstance.getFactsBeforeYear(-30,))

// console.log('Period: "time after":', RandomHistoricalFactsInstance.getFactsAfterYear(1600))

// console.log('Sorted facts by year:', RandomHistoricalFactsInstance.getAllFactsSortedAscendingByYear())
// console.log('Sorted facts by year (desc):', RandomHistoricalFactsInstance.getAllFactsSortedDescendingByYear())

// console.log('Fact by ID:', RandomHistoricalFactsInstance.getFactById(2))


