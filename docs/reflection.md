use intention revealing names s 18
använd namn som beksriver intentionen ex int ElapsedTimeInDays

dont' be cute s 26
namngivning för teman som döden

do one thing s 35
skriv enkla funktioner som inte gör för mycket samtidigt

use descriptive namnes s 39
anvädn längre namn som är beskrivande

have no side effects s 44
när en funktion lovar att göra en sak men gör fler saker i smyg, 

# Kapitelreflektion kap 2 (Namngivning)
- Skapa tabell med minst 5 namn från din kod
- Kolumner: Namn | Förklaring | Reflektion och regler från Clean Code
- Analysera enligt kapitel 2
- Reflektera över lärdomar från kapitlet

# Kapitelreflektion kap 3 (Funktioner)
- Skapa tabell med dina 5 längsta metoder
- Kolumner: Namn | Antal rader kod | Reflektion
- Analysera enligt kapitel 3
- Reflektera över lärdomar från kapitlet
- Identifiera brister och förbättringsområden

// NYA 1
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

// GAMLA 1

  getFactsByTag(tag) {
    if (typeof tag !== 'string') {
      throw new Error('Tag must be a string')
    }

    const normalizedTag = tag.toLowerCase().trim()
    const result = []

    for (const fact of this.facts) {
      if (!fact.tags) continue

      for (const factTag of fact.tags) {
        if (factTag.toLowerCase().trim() === normalizedTag) {
          result.push(fact)
          break
        }
      }
  }
      return result

  }

  NYA 2:
  getFactsAfterYear(year) {
    this.#validateYear()

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



Personligen håller jag inte med om att for loopar i for loopar är dåligt. Jag tycker det är tydligt och gör det snarare rörigare att skapa privata metoder som man behöber leta upp för att förstå. 

# Reflektion över egen kodkvalitet
- Halvsidig reflektion om dina erfarenheter
- Använd begrepp från boken