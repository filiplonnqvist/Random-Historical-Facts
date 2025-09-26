# Kapitel 2: Namngivning

Detta avsnitt behandlar kapitel 2 från Clean Code om namngivning och hur det bör implementeras i kod. Tabell och reflektion följer nedan.

## Tabell

| Namn | Förklaring | Reflektion och regler från Clean Code |
|------|------------|---------------------------------------|
| `RandomHistoricalFacts` | Klassnamn för hela NPM-modulen som hanterar historiska fakta | **Avoid Disinformation (s. 19):** Namnet innehåller ordet "Random" vilket kan vara vilseledande. Modulens huvudsyfte är att tillhandahålla historiska fakta för laddningsskärmar och väntetider, där slumpmässighet är *en* funktion men inte den enda. Metoder som `getAllFacts()`, `getFactById()` och `sortFactsByDate()` returnerar specifika resultat som användaren själv begär. Namnet antyder att *alla* operationer är slumpmässiga, vilket skapar en falsk ledtråd om modulens faktiska kapacitet. Ett mer korrekt namn hade varit `HistoricalFactsProvider` eller `HistoricalFactsManager` som inte inkluderar antaganden om användningen. |
| `#isMatchingOutput` | Privat metod som jämför två strängar (case-insensitive och trimmad) för att se om de matchar | **Don't Add Gratuitous Context (s. 29):** Ordet "Output" tillför egentligen ingen värdefull information till metodnamnet. Metoden jämför helt enkelt två strängar för likhet, oavsett om de är output, input eller något annat. Namnet `#isMatching` eller ännu tydligare `#stringsMatch` hade varit tillräckligt och mer precist. Det extra ordet "Output" skapar onödig kontext som kan förvirra läsaren att tro att metoden har något specifikt med output att göra, när den i själva verket är en generell strängjämförelse. Principen säger att vi ska lägga till "no more context than is necessary" - här har jag lagt till kontext som inte är nödvändig. |
| `getFactById()` | Publik metod som returnerar ett historiskt faktum baserat på dess ID | **Method Names (s. 25):** Detta är ett bra exempel på korrekt metodnamn som följer regeln *"methods should have verb or verb phrase names"*. Metoden börjar med verbet "get" vilket tydligt signalerar att den hämtar data. Namnet är kort, precist och lovar exakt vad den levererar - ett faktum baserat på ID. Trots att metoden innehåller validering (via `#validateId()`) och felhantering, håller namnet fokus på huvudsyftet utan att bli överkomplicerat. |
| `#validateFactsAvailability()`, `#validateYear()`, `#validateId()` | Privata metoder som alla validerar olika villkor och kastar fel om de inte uppfylls | **Pick One Word per Concept (s. 26):** Ett bra exempel på konsistent namngivning där jag valt ett koncept ("validate") och använt det systematiskt genom hela klassen. Alla validate-metoder beter sig likadant - de kastar fel om villkoret inte uppfylls, aldrig returnerar de boolean. Detta skapar förutsägbarhet och gör koden "a quick skim, not an intense study" (s. 27). Även om "ensure" eller "require" kunde signalera fel-kastning tydligare, är konsistensen viktigare än det perfekta ordvalet. Detta förbereder koden för framtida utveckling där nya valideringsmetoder enkelt kan läggas till med samma namnmönster. |
| `desiredTag`, `desiredPeriod` | Parametrar i metoderna `getFactsByTag()` och `getFactsByPeriod()` som representerar vilket värde användaren söker efter | **Make Meaningful Distinctions (s. 20):** Prefixet "desired" skapar ingen meningsfull distinktion eftersom alla parametrar som skickas till dessa metoder per definition är "önskade" av användaren. Det finns ingen "undesiredTag" eller "defaultTag" att skilja från. Namnet blev ett exempel på när jag som utvecklare lade till ord för min egen förståelse snarare än för att göra koden tydligare. Som boken säger: "Distinguish names in such a way that the reader knows what the differences offer". Här erbjuder "desired" ingen skillnad - `getFactsByTag(tag)` hade varit lika tydligt och mer koncist.|

## Reflektion

Efter att ha läst kapitel 2 i Clean Code har jag börjat reflektera betydligt mer kring namngivning än tidigare. Under årskurs ett, när vi lärde oss grunderna i programmering, använde vi ofta förenklade och svårtydda namn på loopar och metoder. Fokus låg då på att lösa uppgiften för vår egen skull snarare än att förbereda koden för framtida utvecklare. I slutet av årskurs ett började jag tänka i nya banor, och kapitel 2 har nu ytterligare fördjupat min förståelse för vikten av genomtänkt namngivning.

Den främsta lärdomen från kapitlet, vilket också framgår av tabellen ovan, är hur lätt det är att blanda ihop sina egna behov med framtida utvecklares faktiska behov. Principen **"Avoid Disinformation"** blev särskilt tydlig när jag analyserade mitt klassnamn `RandomHistoricalFacts`, där ordet "Random" kan vilseleda användare om modulens fulla kapacitet. På liknande sätt visar parametrar som `desiredTag` hur jag lagt till onödig kontext för min egen förståelse, vilket bryter mot **"Make Meaningful Distinctions"**. Robert C. Martin påpekar att namngivning ska vara för läsarens skull, inte för att lugna utvecklarens egen osäkerhet - en insikt jag tar med mig.

En styrka jag identifierat är min konsekventa namngivning, vilket bekräftas av principen **"Pick One Word per Concept"**. Mina validate-metoder följer alla samma mönster och beteende, vilket skapar förutsägbarhet i koden. Jag har medvetet behållit vissa "mindre bra" namngivningar i projektet för att visa min medvetenhet om förbättringspotential. Framöver kommer jag särskilt fokusera på att ifrågasätta varje ord i mina namn - tillför det verklig information eller är det bara mental säkerhet för mig själv? Denna självkritiska approach kommer göra min kod mer läsbar och professionell.

---

# Kapitel 3: Funktioner

Detta avsnitt behandlar kapitel 3 från Clean Code om hur funktioner bör skrivas och hanteras i kod. Tabell och reflektion följer nedan.

## Tabell

| Namn | Antal rader kod | Reflektion och regler från Clean Code |
|------|-----------------|---------------------------------------|
| `getAllFactsSortedAscendingByYear()` & `getAllFactsSortedDescendingByYear()` | 1 rad vardera | **Small! (s. 34) & Do One Thing (s. 35):** Dessa metoder är perfekta exempel på bokens ideal - endast 1 rad kod vardera. De gör exakt en sak: anropar `#sortFactsByYear()` med rätt parameter (true/false). Att jag extraherat sorteringslogiken till en privat metod följer principen på s. 36, men eftersom den privata metoden endast används av dessa två publika metoder (och inte är generellt användbar) gör de fortfarande bara "one thing". **Use Descriptive Names (s. 39):** De långa metodnamnen är tydligare än korta namn med kommentarer. Kontrasten mellan de långa, självförklarande namnen och den minimala implementeringen visar hur små, fokuserade funktioner med beskrivande namn skapar läsbar kod utan kommentarer. |
| `#sortFactsBeforeYear()` | 11 | **Flag Arguments (s. 41) & Use Descriptive Names (s. 39):** Denna privata metod används av `getFactsBeforeYear()` och `getFactsAfterYear()` för att filtrera fakta baserat på årtal. Namnet är missvisande - säger "sort" men filtrerar faktiskt, vilket bryter mot principen om beskrivande namn. Metoden bryter också mot "Flag Arguments" genom att använda boolean-parametern `before` för att styra beteendet. Min intention var att följa DRY-principen och undvika kodduplicering, men enligt Clean Code hade det varit bättre att skapa två separata metoder: `#filterFactsBeforeYear()` och `#filterFactsAfterYear()`. |
| `#findRandomFact()` | 10 | **Do One Thing (s. 35) & Flag Arguments (s. 41):** Denna privata metod används av `getRandomFact()` och `getRandomFamilyFriendlyFact()`. Metoden bryter mot "Do One Thing" genom att utföra flera distinkta uppgifter: validera tillgänglighet, anropa `#findFamilyFriendlyFacts()` för filtrering, generera två olika random index, och slutligen välja returvärde baserat på boolean-parametern `includeAll`. Enligt s. 36 borde dessa kunna extraheras till separata funktioner. Dessutom använder den ett flag argument vilket boken avråder från (s. 41). **Use Descriptive Names (s. 39):** Namnet "find" är missvisande då metoden inte söker utan genererar slumpmässigt och hanterar flera ansvarsområden. Ett bättre alternativ hade varit två separata metoder utan boolean-parameter. |
| `#findAllFacts()` | 10 | **Flag Arguments (s. 41) & Recurring Pattern:** Denna privata metod används av `getAllFacts()` och `getAllFamilyFriendlyFactsOnly()`. Återigen använder jag boolean-parametern `includeAll` för att styra beteendet, vilket visar på ett återkommande mönster i min kod där DRY prioriterats över tydlighet. Metoden gör flera saker: validerar tillgänglighet, loopar genom facts, filtrerar baserat på explicit-flaggan och kopierar objekt. Valideringen är svår att undvika och acceptabel enligt boken, men flag argument är problematiskt. **Use Descriptive Names (s. 39):** Namnet "find" är missvisande när `includeAll=true` eftersom den då returnerar allt utan att söka. Bättre hade varit två separata metoder: `#returnAllFactsCopied()` och `#returnFamilyFriendlyFacts()` vilket hade eliminerat både flag argument och namnproblemet. Detta återkommande mönster i min kod visar att jag systematiskt valt DRY över Clean Codes principer om tydlighet. |
| `getFactsByTag()` | 9 | **Do One Thing (s. 35) & Error Handling Is One Thing (s. 47):** Denna publika metod är resultatet av refaktorering där jag brutit ut logik till privata metoder som `#getMatchingTags()` och `#isMatchingOutput()`. Även om detta är en förbättring från en tidigare längre metod, bryter den fortfarande mot "Do One Thing" genom att både filtrera facts OCH hantera fel. Enligt s. 47 bör felhantering vara sin egen funktion - antingen returnera data eller kasta fel, inte båda. Felhanteringen kunde ha brutits ut eller lösts enklare. **Use Descriptive Names (s. 39):** Namnet är dock ett av mina bättre val - `getFactsByTag()` beskriver exakt vad metoden gör och returnerar, vilket följer bokens principer om tydliga metodnamn. Trots förbättringsområden visar denna metod progression i min refaktorering mot mer modulär kod. |

## Reflektion

Kapitel 3 i *Clean Code* har gett mig nya perspektiv på funktionsdesign, även om jag inte håller med om alla principer. Min huvudsakliga invändning gäller **"Do One Thing"** - jag anser exempelvis att nästlade loopar ofta är tydligare än att bryta ut dem till separata metoder. Att behöva hoppa mellan flera små metoder för att förstå kontrollflödet kan göra koden svårare att följa, inte enklare.

**Flag Arguments** är ett annat område där jag ser värde i att ibland bryta mot principen. När två publika metoder ska returnera liknande resultat baserat på olika villkor kan en boolean-parameter vara en pragmatisk lösning som undviker kodduplicering. I mitt fall använder jag detta mönster för att filtrera explicit innehåll, och jag tycker fortfarande att det ibland är motiverat. Alternativet hade varit att skapa två eller fler separata privata metoder som hanterar respektive logik, men detta riskerar återigen att göra koden onödigt lång och svårare att följa.

Samtidigt erkänner jag att vissa principer från boken har förbättrat min kod. Idén att bryta ut logik till privata metoder har gjort mig till en bättre kodare genom att tvinga mig att tänka på modularitet och återanvändbarhet. Min refaktorering visar på ett återkommande mönster där jag systematiskt valt **DRY** över Clean Codes tydlighetsprinciper. Det är ett medvetet val som jag står för.

Sammanfattningsvis har kapitlet varit lärorikt och fått mig att reflektera över mina designval. Jag ser värde i vissa principer men behåller min kritiska hållning till andra. Det viktiga är att vara medveten om principerna och göra val baserat på syftet och omständigheterna.

---

# Kodkvalitet

Min största styrka i detta projekt har varit hur jag tillämpat refaktorering baserat på Clean Codes principer, även när jag inte alltid håller med om dem. Ett konkret **exempel** är hur jag förbättrat metoden `getFactsByTag()`:

### Före refaktorering:
```javascript
getFactsByTag(tag) {
  if (typeof tag !== 'string') {
    throw new Error('Tag must be a string');
  }

  const normalizedTag = tag.toLowerCase().trim();
  const result = [];

  for (const fact of this.facts) {
    if (!fact.tags) continue;

    for (const factTag of fact.tags) {
      if (factTag.toLowerCase().trim() === normalizedTag) {
        result.push(fact);
        break;
      }
    }
  }

  return result;
}
```

### Efter refaktorering:
```javascript
getFactsByTag(desiredTag) {
  let result = [];

  for (const fact of this.facts) {
    if (!fact.tags) continue;
    result = this.#getMatchingTags(result, fact, desiredTag);
  }

  if (result.length === 0) {
    throw new Error('Tag not found');
  }

  return result;
}
```

```javascript
#getMatchingTags(result, fact, desiredTag) {
  for (const factTag of fact.tags) {
    if (this.#isMatchingOutput(factTag, desiredTag)) {
      result.push({ ...fact });
      break;
    }
  }
  return result;
}
```

```javascript
#isMatchingOutput(existingOutput, desiredOutput) {
  return existingOutput.toLowerCase().trim() === desiredOutput.toLowerCase().trim();
}
```


Genom projektet har jag konsekvent behövt balansera olika principer och väga för- och nackdelar mot varandra i mina designval.

Jag har ofta prioriterat att undvika kodduplicering framför absolut tydlighet, vilket syns i mina flag arguments. Personligen upplever jag det som svårare att underhålla kod med många små privata metoder jämfört med kod där metoderna hanterar något mer omfattande logik men följer en röd tråd med tydligt syfte. Enligt min mening är det inte problematiskt att en funktion hanterar flera parallella funktionaliteter om de hör ihop konceptuellt. Även om koden potentiellt blir mer modulär genom uppdelning, riskerar den att bli svårare att följa. Därför har jag ofta valt mer pragmatiska lösningar.

Jag har medvetet behållit vissa designval i projektet för att visa min medvetenhet om kodens förbättringspotential och skapa underlag för diskussion. Detta inkluderar:

- Boolean-parametrar i privata metoder
- Metoder som gör mer än "one thing" när det är praktiskt motiverat
- Namngivningar som kunde vara bättre men fungerar i kontexten

## Slutsats
Min kod håller generellt god kvalitet med tydlig struktur, grundläggande felhantering och konsekvent namngivning. Jag befinner mig i en läroprocess där jag utvecklas från att enbart lösa problem till att skriva kod som är underhållbar och läsbar för andra. Mitt mål har varit att skapa kod som är både funktionell och pedagogisk, vilket jag anser att jag lyckats med trots att den bryter mot vissa av bokens principer.

Det kan dock diskuteras huruvida min blandning av Clean Code-principer och egna lösningar är optimal. Personligen tror jag att man bör välja en approach och vara mer konsekvent i sin tillämpning. Slutligen finns det definitivt förbättringspotential, men jag är nöjd med balansen mellan olika kvalitetsaspekter i min nuvarande implementation. Jag har utnyttjat min nuvarande kunskapsnivå maximalt och utvecklats i en takt som känns hållbar.