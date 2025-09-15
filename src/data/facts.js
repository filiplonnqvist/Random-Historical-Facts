/** 
 * @file Data file containing interesting historical facts.
 * @module data/facts
 * @author Filip Lönnqvist <fl223km@student.lnu.se>
 * @version 1.0.0
 */

/**
 * A single historical fact item.
 * Negative `year` denotes BC.
 * @typedef {Object} HistoricalFact
 * @property {number} id - Unique identifier for the fact.
 * @property {string} fact - The historical fact text.
 * @property {string} imageUrl - URL to an image related to the fact.
 * @property {string[]} tags - Tags categorizing the fact.
 * @property {string} period - The historical period of the fact (e.g., "30 BC", "40 AD").
 * @property {number} year - The year associated with the fact (negative for BC).
 */

/**
 * An array of historical facts.
 * @type {HistoricalFact[]}
 */
export const historicalFacts = [

  // Prehistoric

    {
    id: 1,
    fact: "Did you know that Göbekli Tepe in modern-day Turkey is the world's oldest known temple, built around 9600 BC — thousands of years before Stonehenge or the pyramids?",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e8/G%C3%B6bekli_Tepe_12_November_2022.jpg",
    tags: ["turkey", "architecture", "religion", "temple"],
    period: "prehistoric",
    year: -9600
  },

  // Ancient
  {
    id: 2,
    fact: "Did you know that Egyptian queen Cleopatra lived closer in time to the invention of the iPhone than to the building of the Great Pyramid of Giza?",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Kleopatra-VII.-Altes-Museum-Berlin1.jpg",
    tags: ["queen", "egypt", "culture", "pyramid"],
    period: "ancient",
    year: -30
  },
  {
    id: 3,
    fact: "Did you know that the Roman Emperor Caligula loved his horse Incitatus so much that he gave it a marble stable, servants, and even planned to make it a senator?",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Portrait_Head_of_Caligula_-_Getty_Museum_%2872.AA.155%29.jpg",
    tags: ["emporer", "rome", "culture", "politics"],
    period: "ancient",
    year: 40
  },
  {
    id: 4,
    fact: "Did you know that Boudica, a woman in Iron Age Britain, united rival tribes and rose up against the Roman occupiers, burning London to the ground in 60 AD?",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/64/Boadicea_Haranguing_the_Britons_%28called_Boudicca%2C_or_Boadicea%29_by_John_Opie.jpg",
    tags: ["london", "war", "britain"],
    period: "ancient",
    year: 60
  },
  {
    id: 5,
    fact: "Did you know that Alexander the Great never lost a single battle, conquering an empire that stretched from Greece to India before dying suddenly at just 32?",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Alexander_the_Great_cropped.png",
    tags: ["emperor", "war", "greece"],
    period: "ancient",
    year: -323
  },
  
  // Middle Ages
  {
    id: 6,
    fact: "Did you know that around the year 1000, the Viking explorer Leif Eriksson reached North America — nearly 500 years before Columbus?",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Leif_Erikson_Discovers_America_Hans_Dahl.jpg",
    tags: ["america", "exploration", "vikings"],
    period: "medieval",
    year: 1000
  },
  {
    id: 7,
    fact: "Did you know that during the Black Death of 1347–1351, cities like Florence lost more than half their people, while Milan escaped almost untouched thanks to strict quarantine measures?",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Nuremberg_chronicles_-_Dance_of_Death_%28CCLXIIIIv%29.jpg",
    tags: ["pandemic", "disease", "catastrophe"],
    period: "medieval", 
    year: 1347
  },
  {
    id: 8,
    fact: "Did you know that Erik of Pomerania, once king of Scandinavia, ended his days as a pirate in the Baltic Sea after losing his crown in the 1430s?",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Erik_I%2C_1382-1459%2C_hertig_av_Pommern_konung_av_Danmark_Norge_och_Sverige_-_Nationalmuseum_-_15058.tif",
    tags: ["pirate", "politics", "scandinavia"],
    period: "medieval",
    year: 1430
  },
  {
    id: 9,
    fact: "Did you know that Henry VII was the last English monarch to seize the crown in battle, after defeating Richard III at the Battle of Bosworth in 1485?",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Enrique_VII_de_Inglaterra%2C_por_un_artista_an%C3%B3nimo.jpg",
    tags: ["king", "war", "england", "battle"],
    period: "medieval",
    year: 1485
  },

  // Renaissance
  {
    id: 10,
    fact: "Did you know that Leonardo da Vinci never actually finished his masterpiece, the Mona Lisa — which remained in his studio until his death?",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/600px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
    tags: ["painting", "art", "culture"],
    period: "renaissance",
    year: 1503
  },
  {
    id: 11,
    fact: "Did you know that the first modern flushing toilet was invented in 1596 by Sir John Harington, godson of Queen Elizabeth I?",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/09/Sir_John_Harington%2C_attributed_to_Hieronimo_Custodis.png",
    tags: ["invention", "technology"],
    period: "renaissance",
    year: 1596
  },
  {
    id: 12,
    fact: "Did you know that in the 1500s, people believed they could cure syphilis by drinking mercury — which of course only made things worse?",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Albrecht_D%C3%BCrer_-_Christ_Disputing_with_Doctors_-_1959.99.16_-_Cleveland_Museum_of_Art.tif",
    tags: ["medicine", "culture", "disease"],
    period: "renaissance",
    year: 1500
  },
  {
    id: 13,
    fact: "Did you know that the Aztecs in the 1500s drank chocolate mixed with chili and spices — nothing like the sweet treat we know today?",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/11/Templo_Mayor_in_Mexico-Tenochtitlan_16th_century_%28illustration_1900%29.jpg",
    tags: ["culture", "americas", "food"],
    period: "renaissance",
    year: 1500
  },
  {
    id: 14,
    fact: "Did you know that Ivan the Terrible, crowned Russia's first tsar in 1547, killed his own son in a fit of rage — leaving the empire without a stable heir?",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Repin-Ivan_and_Son_detail.jpg",
    tags: ["politics", "russia", "tragedy"],
    period: "renaissance",
    year: 1547
  },
  {
    id: 15,
    fact: "Did you know that in 1521, Gustav Vasa skied across Sweden to gather an army against the Danes — a struggle that ended with his victory and his crowning in 1523 as the founder of modern Sweden?",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/52/King_Gustav_Vasa_of_Sweden_Addressing_Men_from_Dalarna_in_Mora_%28Johan_Gustaf_Sandberg%29_-_Nationalmuseum_-_19512.tif",
    tags: ["war", "scandinavia", "king"],
    period: "renaissance",
    year: 1523
  },
  
  // Early Modern
  {
    id: 16,
    fact: "Did you know that Peter the Great of Russia introduced a beard tax in 1698 — forcing men to shave or pay a fine if they wanted to keep their facial hair?",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Inconnu_d%27apr%C3%A8s_J.-M._Nattier%2C_Portrait_de_Pierre_Ier_%28mus%C3%A9e_de_l%E2%80%99Ermitage%29.jpg",
    tags: ["culture", "russia", "economy"],
    period: "early modern",
    year: 1698
  },
  {
    id: 17,
    fact: "Did you know that when coffee arrived in Europe in the 1600s, critics in England called it \"the bitter invention of Satan\"?",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Interior_of_a_London_Coffee-house%2C_17th_century.JPG",
    tags: ["culture", "europe", "beverage", "food"],
    period: "early modern",
    year: 1650
  },
  {
    id: 18,
    fact: "Did you know that in 1752 Benjamin Franklin flew a kite in a thunderstorm to prove that lightning was electricity — a dangerous experiment that could easily have killed him?",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Benjamin_West%2C_English_%28born_America%29_-_Benjamin_Franklin_Drawing_Electricity_from_the_Sky_-_Google_Art_Project.jpg",
    tags: ["science", "invention", "technology"],
    period: "enlightenment",
    year: 1752
  },
  {
    id: 19,
    fact: "Did you know that Wolfgang Amadeus Mozart composed his first opera in 1768 at the age of just 12?",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Wolfgang-amadeus-mozart_1.jpg",
    tags: ["culture", "music", "classical"],
    period: "enlightenment",
    year: 1768
  },
  {
    id: 20,
    fact: "Did you know that in 1783 the Montgolfier brothers launched the world's first hot air balloon flight in France, carrying a sheep, a duck, and a rooster?",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Montgolfi%C3%A8re_lanc%C3%A9e_%C3%A0_Versailles%2C_19_sept_1783.jpg",
    tags: ["invention", "technology", "france"],
    period: "enlightenment",
    year: 1783
  }
]