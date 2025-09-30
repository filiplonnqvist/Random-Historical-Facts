# Testrapport

## Översikt

Denna testrapport sammanfattar resultatet av alla **automatiska tester** av NPM-modulen `Random Historical Facts`. Modulen har testats med hjälp av Jest-ramverket. Testerna fokuserar på funktionalitet och felhantering för att säkerställa att användarens behov uppfylls innan implementering i extern kod. Alla 11 publika metoder har testats.

**Testramverk:** Jest<br>
**Testkörning:** `npm test`<br>
**Antal tester:** 19<br>
**Teststatus:** Alla tester godkända<br>
**Version:** 1.1.0<br>


## Automatiska enhetstester

| Testad metod | Testbeskrivning | Resultat |
|--------------|------------------|---------|
| Constructor | Validering av instansskapande | ✅ Godkänd |
| getRandomFact | Returnerar slumpmässigt faktaobjekt | ✅ Godkänd |
| getRandomFamilyFriendlyFact | Returnerar endast slumpmässigt icke-explicit faktaobjekt | ✅ Godkänd |
| getAllFacts | Returnerar alla faktaobjekt | ✅ Godkänd |
| getAllFamilyFriendlyFactsOnly | Returnerar alla icke-explicita faktaobjekt | ✅ Godkänd |
| getFactsCount | Returnerar totalt antal faktaobjekt | ✅ Godkänd |
| getFactById | ID-validering och hämtning | ✅ Godkänd (2 tester) |
| getFactsByTag | Returnerar fakta filtrerade på taggar | ✅ Godkänd |
| getAllFactTags | Returnerar array med alla tillgängliga tagg | ✅ Godkänd |
| getFactsByPeriod | Returnerar faktaobjekt filtrerade på epok | ✅ Godkänd |
| getFactsBeforeYear | Årsvalidering och filtrering av faktumobjekt efter år | ✅ Godkänd (2 tester) |
| getFactsAfterYear | Årsvalidering och filtrering av faktumobjekt efter år | ✅ Godkänd (2 tester) |
| getAllFactsSortedAscendingByYear | Stigande sortering med felhantering | ✅ Godkänd (2 tester) |
| getAllFactsSortedDescendingByYear | Fallande sortering med felhantering | ✅ Godkänd (2 tester) |

## Testanalys

### Grundläggande funktionalitet
Det finns totalt tretton tester för grundläggande funktionalitet, såsom att tillhandahålla objekt som begärts av användaren och arrayer samt säkerställa att alla egenskaper finns med i det returnerade objektet. I vissa fall krävs mer omfattande validering. Till exempel behöver testningen av metoden `getAllFactTags` säkerställa att det returnerade resultatet är en array, att arrayen inte är tom och att alla element är strängar. Ett annat exempel är testet `getAllFactsSortedDescendingByYear`, som kräver att en ny instans skapas innan arrayen töms för att bevara immutabilitet.

### Validering
Det finns totalt sex tester för validering och felhantering för att säkerställa att användaren får nödvändig information vid felsökning. Alla valideringar är separerade i tre privata metoder och används sedan i `getFactById`, `getFactsBeforeYear`, `getFactsAfterYear`, `getAllFactsSortedAscendingByYear` och `getAllFactsSortedDescendingByYear`. Dessa metoder testar stränginmatning, negativa tal, icke-numerisk inmatning och tomma instanser.

## Sammanfattning
Som tidigare nämnts blev samtliga tester godkända, vilket bevisar att `Random Historical Facts` fungerar som förväntat i sin nuvarande version. NPM-paketet är redo att användas av andra utvecklare.