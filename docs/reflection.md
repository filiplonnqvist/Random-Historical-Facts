# Kapitel 2: Namngivning

Detta avsnitt behandlar kapitel 2 från Clean Code om namngivning och hur det bör implementeras i kod. Tabell och reflektion följer nedan.

## Tabell


| Namn | Förklaring | Reflektion och regler från Clean Code |
|------|------------|---------------------------------------|
| `RandomHistoricalFacts` | Klassnamn för hela NPM-modulen som hanterar historiska fakta | **Avoid Disinformation (s. 19):** Namnet innehåller ordet "Random" vilket kan vara vilseledande. Modulens huvudsyfte är att tillhandahålla historiska fakta för laddningsskärmar och väntetider, där slumpmässighet är *en* funktion men inte den enda. Metoder som `getAllFacts()`, `getFactById()` och `sortFactsByDate()` returnerar specifika resultat som användaren själv begär. Namnet antyder att *alla* operationer är slumpmässiga, vilket skapar en falsk ledtråd om modulens faktiska kapacitet. Ett mer korrekt namn hade varit `HistoricalFactsProvider` eller `HistoricalFactsManager` som inte inkluderar antaganden om användningen. |
| `#isMatchingOutput` | Privat metod som jämför två strängar (case-insensitive och trimmad) för att se om de matchar | **Don't Add Gratuitous Context (s. 29):** Ordet "Output" tillför egentligen ingen värdefull information till metodnamnet. Metoden jämför helt enkelt två strängar för likhet, oavsett om de är output, input eller något annat. Namnet `#isMatching` eller ännu tydligare `#stringsMatch` hade varit tillräckligt och mer precist. Det extra ordet "Output" skapar onödig kontext som kan förvirra läsaren att tro att metoden har något specifikt med output att göra, när den i själva verket är en generell strängjämförelse. Principen säger att vi ska lägga till "no more context than is necessary" - här har jag lagt till kontext som inte är nödvändig. |
| `getFactById()` | Publik metod som returnerar ett historiskt faktum baserat på dess ID | **Method Names (s. 25):** Detta är ett bra exempel på korrekt metodnamn som följer regeln <em>"methods should have verb or verb phrase names"</em>. Metoden börjar med verbet "get" vilket tydligt signalerar att den hämtar data. Namnet är kort, precist och lovar exakt vad den levererar - ett faktum baserat på ID. Trots att metoden innehåller validering (via `#validateId()`) och felhantering, håller namnet fokus på huvudsyftet utan att bli överkomplicerat. |
| `#validateFactsAvailability()`, `#validateYear()`, `#validateId()` | Privata metoder som alla validerar olika villkor och kastar fel om de inte uppfylls | **Pick One Word per Concept (s. 26):** Ett bra exempel på konsistent namngivning där jag valt ett koncept ("validate") och använt det systematiskt genom hela klassen. Alla validate-metoder beter sig likadant - de kastar fel om villkoret inte uppfylls, aldrig returnerar de boolean. Detta skapar förutsägbarhet och gör koden "a quick skim, not an intense study" (s. 27). Även om "ensure" eller "require" kunde signalera fel-kastning tydligare, är konsistensen viktigare än det perfekta ordvalet. Detta förbereder koden för framtida utveckling där nya valideringsmetoder enkelt kan läggas till med samma namnmönster. |
| `desiredTag`, `desiredPeriod` | Parametrar i metoderna `getFactsByTag()` och `getFactsByPeriod()` som representerar vilket värde användaren söker efter | **Make Meaningful Distinctions (s. 20):** Prefixet "desired" skapar ingen meningsfull distinktion eftersom alla parametrar som skickas till dessa metoder per definition är "önskade" av användaren. Det finns ingen "undesiredTag" eller "defaultTag" att skilja från. Namnet blev ett exempel på när jag som utvecklare lade till ord för min egen förståelse snarare än för att göra koden tydligare. Som boken säger: "Distinguish names in such a way that the reader knows what the differences offer". Här erbjuder "desired" ingen skillnad - `getFactsByTag(tag)` hade varit lika tydligt och mer koncist.|

---

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
---

Här är din text, språkligt förfinad och snyggt formaterad i Markdown. Jag har behållit din ståndpunkt, markerat relevanta principer i **fet stil** och lagt in kod med syntaxhighlighting.

---

## Reflektion

Kapitel 3 i *Clean Code* var en ögonöppnare på många plan. Jag håller inte med om allt som skrivs, men överlag har det varit mycket lärorikt.

Jag håller till exempel inte med om att nästlade `for`-loopar ofta bör undvikas, vilket går emot **Do One Thing**. För mig kan nästlade loopar vara tydliga, medan onödig uppdelning i privata metoder gör koden rörigare när man måste leta upp flera små metoder för att förstå kontrollflödet. Det finns svagheter som enligt mig försvårar både för den som skriver koden och för framtida utvecklare.

Även om namngivning och tydlighet ofta förbättras när man följer bokens principer, uppstår andra problem. Mängden kod kan i praktiken **öka** om man strikt följer **Small!** eller **Do One Thing**. Risken för missförstånd ökar också när publika metoder får en eller flera privata hjälpare vars innehåll måste analyseras innan flödet blir begripligt. Med bra namngivning kan detta förstås mildras, men det ställer höga krav på kodaren, och jag är inte övertygad om att det alltid är den bästa principen att följa.

**Flag Arguments** är ett typiskt område där man enligt mig skapar onödigt många metoder. Att skicka argument är i vissa fall en bra lösning när två publika metoder ska returnera olika objekt baserat på olika argument, men med samma underliggande logik. Ett återkommande mönster hos mig har varit att använda booleska argument för att filtrera ut explicit material ur ett objekt och returnera endast det önskade – och jag tycker fortfarande att det ibland är motiverat.

---

# Kodkvalitet

Min styrka ligger i hur jag har hanterat refaktorisering och effektiviserat koden utifrån lärdomar i boken. Jag har till exempel brutit ut delar av metoder till privata metoder för att förenkla flödet och minska mängden upprepad kod. Det gör koden mer lättläst, men ställer också högre krav på bra namngivning och en konsekvent struktur. Tidigare skrev jag gärna längre metoder som gjorde många saker, och i bästa fall bröt jag ut validering till en separat modul för att undvika repetition och följa **DRY**.

Jag vill också erkänna att även om jag ser problem med vissa principer, har just idén att bryta ut till privata metoder gjort mig till en bättre kodare på flera sätt. Det tydligaste exemplet är följande kod, som bröt mot flera principer:

```js
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

Efter refaktorisering bröt jag ut logiken till två privata metoder, där den sista är mer allmän eftersom den bara jämför strängar. På så vis ökade jag modulariteten och återanvändbarheten:

```js
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

```js
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

```js
#isMatchingOutput(existingOutput, desiredOutput) {
  return existingOutput.toLowerCase().trim() === desiredOutput.toLowerCase().trim();
}
```

Sammanfattningsvis har det varit lärorikt på många plan. Jag anser att jag har förbättrat min kod efter att ha läst boken, även om flera delar fortfarande bryter mot principerna. Min kod håller generellt sett god kvalitet, men jag är i en lärprocess och det finns tydlig förbättringspotential.

