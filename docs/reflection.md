# Kapitel 2: Namngivning

Detta avsnitt behandlar kapitel 2 från Clean Code om namngivning och hur det bör implementeras i kod. Tabell och reflektion följer nedan.

## Tabell


| Namn | Förklaring | Reflektion och regler från Clean Code |
|------|------------|---------------------------------------|
| `RandomHistoricalFacts` | Klassnamn för hela NPM-modulen som hanterar historiska fakta | **Avoid Disinformation (s. 19):** Namnet innehåller ordet "Random" vilket kan vara vilseledande. Modulens huvudsyfte är att tillhandahålla historiska fakta för laddningsskärmar och väntetider, där slumpmässighet är *en* funktion men inte den enda. Metoder som `getAllFacts()`, `getFactById()` och `sortFactsByDate()` returnerar specifika resultat som användaren själv begär. Namnet antyder att *alla* operationer är slumpmässiga, vilket skapar en falsk ledtråd om modulens faktiska kapacitet. Ett mer korrekt namn hade varit `HistoricalFactsProvider` eller `HistoricalFactsManager` som inte inkluderar antaganden om användningen. |
| `#isMatchingOutput` | Privat metod som jämför två strängar (case-insensitive och trimmad) för att se om de matchar | **Don't Add Gratuitous Context (s. 29):** Ordet "Output" tillför ingen värdefull information till metodnamnet. Metoden jämför helt enkelt två strängar för likhet, oavsett om de är output, input eller något annat. Namnet `#isMatching` eller ännu tydligare `#stringsMatch` hade varit tillräckligt och mer precist. Det extra ordet "Output" skapar onödig kontext som kan förvirra läsaren att tro att metoden har något specifikt med output att göra, när den i själva verket är en generell strängjämförelse. Principen säger att vi ska lägga till "no more context than is necessary" - här har jag lagt till kontext som inte är nödvändig. |
| `getFactById()` | Publik metod som returnerar ett historiskt faktum baserat på dess ID | **Method Names (s. 25):** Detta är ett bra exempel på korrekt metodnamn som följer regeln <em>"methods should have verb or verb phrase names"</em>. Metoden börjar med verbet "get" vilket tydligt signalerar att den hämtar data. Namnet är kort, precist och lovar exakt vad den levererar - ett faktum baserat på ID. Trots att metoden innehåller validering (via `#validateId()`) och felhantering, håller namnet fokus på huvudsyftet utan att bli överkomplicerat. |
| `#validateFactsAvailability()`, `#validateYear()`, `#validateId()` | Privata metoder som alla validerar olika villkor och kastar fel om de inte uppfylls | **Pick One Word per Concept (s. 26):** Ett bra exempel på konsistent namngivning där jag valt ett koncept ("validate") och använt det systematiskt genom hela klassen. Alla validate-metoder beter sig likadant - de kastar fel om villkoret inte uppfylls, aldrig returnerar de boolean. Detta skapar förutsägbarhet och gör koden "a quick skim, not an intense study" (s. 27). Även om "ensure" eller "require" kunde signalera fel-kastning tydligare, är konsistensen viktigare än det perfekta ordvalet. Detta förbereder koden för framtida utveckling där nya valideringsmetoder enkelt kan läggas till med samma namnmönster. |
| `desiredTag`, `desiredPeriod` | Parametrar i metoderna `getFactsByTag()` och `getFactsByPeriod()` som representerar vilket värde användaren söker efter | **Make Meaningful Distinctions (s. 20):** Prefixet "desired" skapar ingen meningsfull distinktion eftersom alla parametrar som skickas till dessa metoder per definition är "önskade" av användaren. Det finns ingen "undesiredTag" eller "defaultTag" att skilja från. Namnet blev ett exempel på när jag som utvecklare lade till ord för min egen förståelse snarare än för att göra koden tydligare. Som boken säger: "Distinguish names in such a way that the reader knows what the differences offer". Här erbjuder "desired" ingen skillnad - `getFactsByTag(tag)` hade varit lika tydligt och mer koncist.|

---

## Reflektion

Efter att ha läst kapitel 2 i Clean Code har jag börjat reflektera betydligt mer kring namngivning än tidigare. Under årskurs ett, när vi lärde oss grunderna i programmering, använde vi ofta förenklade och svårtydda namn på loopar och metoder. Fokus låg då på att lösa uppgiften för vår egen skull snarare än att förbereda koden för framtida utvecklare. I slutet av årskurs ett började jag tänka i nya banor, och kapitel 2 har nu ytterligare fördjupat min förståelse för vikten av genomtänkt namngivning.

Den främsta lärdomen från kapitlet, vilket också framgår av tabellen ovan, är hur lätt det är att blanda ihop sina egna behov med framtida utvecklares faktiska behov. Principen **"Avoid Disinformation"** blev särskilt tydlig när jag analyserade mitt klassnamn `RandomHistoricalFacts`, där ordet "Random" kan vilseleda användare om modulens fulla kapacitet. På liknande sätt visar parametrar som `desiredTag` hur jag lagt till onödig kontext för min egen förståelse, vilket bryter mot **"Make Meaningful Distinctions"**. Robert C. Martin påpekar att namngivning ska vara för läsarens skull, inte för att lugna utvecklarens egen osäkerhet - en insikt jag tar med mig.

En styrka jag identifierat är min konsekventa namngivning, vilket bekräftas av principen **"Pick One Word per Concept"**. Mina validate-metoder följer alla samma mönster och beteende, vilket skapar förutsägbarhet i koden. Jag har medvetet behållit vissa "mindre bra" namngivningar i projektet för att visa min medvetenhet om förbättringspotential. Framöver kommer jag särskilt fokusera på att ifrågasätta varje ord i mina namn - tillför det verklig information eller är det bara mental säkerhet för mig själv? Denna självkritiska approach kommer göra min kod mer läsbar och professionell.

# Kapitel 3: Funktioner
- Skapa tabell med dina 5 längsta metoder
- Kolumner: Namn | Antal rader kod | Reflektion
- Analysera enligt kapitel 3
- Reflektera över lärdomar från kapitlet
- Identifiera brister och förbättringsområden

do one thing s 35
skriv enkla funktioner som inte gör för mycket samtidigt

use descriptive namnes s 39
anvädn längre namn som är beskrivande

have no side effects s 44
när en funktion lovar att göra en sak men gör fler saker i smyg, 


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




# Reflektion över egen kodkvalitet
- Halvsidig reflektion om dina erfarenheter
- Använd begrepp från boken

Min styrka ligger i hur jag hanterat refaktorisering och hur jag effiktiviserat min kod baserat på lärdomar från boken. Exempel är hur jag bryter ut delar av metoder i privata metoder för att förenkla flödet och minska mängden kod. Detta gör det mer lättläsligt, men stället också högre krav på kodaren att använda bra namngivning och följa strukturen väl. Innan har jag haft en tendens att skriva långa metoder som behanldar många saker, och på sin höjd bryta ut validering till en separat modul eftersom det ofta blir mycket repetition och brytar mot DRY principen. 

Personligen håller jag dock inte med om att for loopar i for loopar är dåligt. Jag tycker det är tydligt och gör det snarare rörigare att skapa privata metoder som man behöber leta upp för att förstå. Jag tycker dock generellt sett att bokens innehåll har varit intressnt och lärorikt, men det finns svagheter som jag anser försvårar för såväl kodaren som framtida utvecklare. Även om namngivning och tydlighet blir bättre genom att följa bokens pricniper så skapar det andra problem. Mängden kod kan tvärtom öka. Det ökar också risken för missförstånd eftersom varje publik metod riskerar att ha en eller flera privata metoder vars innehåll måste analyseras innan man som utvecklare kan förstå flödet. Med bra namngivning kan detta naturligtvis kommas runt, men det ställer höga krav på kodaren och jag är inte helt övertygad om att det alltid är en bästa rpincipen att följa. 