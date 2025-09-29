# Random Historical Facts

> **Transform boring wait times into fascinating learning moments!**

![GitHub](https://img.shields.io/github/license/filiplonnqvist/Random-Historical-Facts)
![tests](https://img.shields.io/badge/tests-19%20passing-brightgreen)
![facts](https://img.shields.io/badge/historical%20facts-20%2B-orange)

Your users will love discovering fascinating historical facts while they wait! This JavaScript module delivers carefully curated historical content complete with stunning images and smart categorization - perfect for making your app both educational and engaging.

## Get Started

```javascript
import { RandomHistoricalFacts } from './src/index.js';

// Just one line to make your app more interesting!
const fact = new RandomHistoricalFacts().getRandomFact();
console.log(fact.fact);
// "Did you know that Mozart composed his first opera at age 12?"
```

## Why Your App Needs This

Perfect for:
- **Loading Screens** - Users learn something new instead of staring at spinners
- **Educational Apps** - Ready-made historical content, no research needed
- **Trivia Games** - 20+ verified historical facts as question source
- **Daily Content** - "Fact of the Day" features with zero effort
- **Engagement Boost** - Keep users entertained during wait times

## Features That Make This Special

- 🎲 **Instant Facts** - `getRandomFact()` returns engaging content immediately
- 👨‍👩‍👧‍👦 **Family-Friendly Mode** - Built-in content filtering for all ages
- 🏷️ **Smart Categorization** - Filter by war, science, culture, architecture & more
- 📅 **Time Travel** - Search facts from prehistoric to modern times
- 🖼️ **Visual Content** - Every fact includes a historical image URL
- ⚡ **Lightning Fast** - No runtime dependencies, pure JavaScript
- 🔍 **Flexible Queries** - 11 different ways to access your content

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/filiplonnqvist/Random-Historical-Facts.git

# Navigate to project
cd Random-Historical-Facts

# Install dev dependencies (for testing)
npm install
```

**Usage:** Copy the `src` folder to your project and import!

## 💡 Quick Examples

### Create a "Did You Know?" Loading Screen
```javascript
const facts = new RandomHistoricalFacts();

// Get a family-friendly fact for your loading screen
const fact = facts.getRandomFamilyFriendlyFact();

// Display it beautifully
console.log(`💡 ${fact.fact}`);
console.log(`📅 Year: ${Math.abs(fact.year)} ${fact.year < 0 ? 'BC' : 'AD'}`);
console.log(`🏛️ Period: ${fact.period}`);
```

### Build a History Quiz
```javascript
const facts = new RandomHistoricalFacts();

// Get all war-related facts for a military history quiz
const warFacts = facts.getFactsByTag('war');

// Or get medieval facts for a Middle Ages theme
const medievalFacts = facts.getFactsByPeriod('medieval');

// Sort facts chronologically for a timeline game
const timeline = facts.getAllFactsSortedAscendingByYear();
```

## 📊 What You Get

Each fact comes as a rich data object:

```javascript
{
  id: 1,
  fact: "Did you know that Göbekli Tepe in Turkey is the world's oldest temple?",
  imageUrl: "https://upload.wikimedia.org/...",  // Free to use image
  tags: ["turkey", "architecture", "religion"],   // Smart categorization
  isExplicit: false,                             // Content rating
  period: "prehistoric",                          // Historical era
  year: -9600                                     // BC/AD sorting
}
```

## 📖 Complete API Reference

| Method | What It Does | Perfect For |
|--------|--------------|------------|
| `getRandomFact()` | Returns any random fact | Loading screens, surprises |
| `getRandomFamilyFriendlyFact()` | Returns kid-safe content only | Educational apps |
| `getFactById(id)` | Get specific fact by ID | Saving favorites |
| `getAllFacts()` | Returns all 20+ facts | Building fact libraries |
| `getFactsByTag(tag)` | Filter by category | Themed content |
| `getFactsByPeriod(period)` | Filter by time period | History lessons |
| `getFactsBeforeYear(year)` | Facts before specific year | Timeline features |
| `getFactsAfterYear(year)` | Facts after specific year | Modern history |
| `getAllFactTags()` | List all available tags | Building tag clouds |
| `getAllFactsSortedAscendingByYear()` | Chronological order | Timeline games |
| `getFactsCount()` | Total number of facts | Pagination |

### Available Tags
`ancient` • `medieval` • `war` • `science` • `culture` • `architecture` • `invention` • `politics` • `religion` • and more!

### Historical Periods
`prehistoric` • `ancient` • `medieval` • `renaissance` • `early modern` • `enlightenment`

## 🛡️ Error Handling

The module won't crash your app - it handles errors gracefully:

```javascript
// Safe to use - errors are caught and meaningful messages returned
try {
    facts.getFactById("not-a-number");  // Throws: "ID must be a positive number"
    facts.getFactsByTag('aliens');      // Throws: "Tag not found"
} catch (error) {
    // Your app keeps running!
}
```

## 🧪 Testing & Quality

✅ **19 comprehensive tests** - Every method is tested  
✅ **Clean Code principles** - Following Robert C. Martin's guidelines  
✅ **JSDoc documented** - Full intellisense support  
✅ **No runtime dependencies** - Won't bloat your project  

```bash
# Run the test suite
npm test
```

### Screenshots

*Console output in action:*
![Console Output](screenshots/console-output.png)

*All tests passing:*
![Test Results](screenshots/test-results.png)

## 📚 Academic Project

Created as part of Introduction to Software Quality (1DV610) at Linnaeus University, demonstrating Clean Code principles and comprehensive testing strategies.

**Requirements exceeded:**
- 11 public methods (required: 5)
- 250+ lines of code (required: 200)
- Full test coverage with detailed test report

## 📝 License

MIT License - Use freely in your projects!

## 👤 Author

**Filip Lönnqvist**
- GitHub: [@filiplonnqvist](https://github.com/filiplonnqvist)
- University: Linnaeus University
- Course: Software Quality (1DV610)

---

<p align="center">
  Made with ❤️ and ☕ in Sweden
</p>

<p align="center">
  <i>Transform your loading screens from boring to brilliant!</i>
</p>