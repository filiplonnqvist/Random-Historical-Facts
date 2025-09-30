# Developer Guidelines

This document describes how to contribute to the Random Historical Facts NPM package.

## Getting Started

### Prerequisites
- **Node.js**: Version 16.0.0 or higher
- **npm**: Version 7.0.0 or higher
- **Jest**: ^29 (installed as devDependency)

### Setup

1. **Fork the repository** on GitHub
2. **Clone your fork**
   ```bash
   git clone https://github.com/filiplonnqvist/Random-Historical-Facts
   cd Random-Historical-Facts
   ```
3. **Install dependencies**
   ```bash
   npm install
   ```
4. **Run tests**
   ```bash
   npm test   # runs Jest
   ```

## Branch Strategy

- `main` - Protected branch, requires PR and review
- `feature/*` - New features (e.g., `feature/add-medieval-facts`)
- `fix/*` - Bug fixes (e.g., `fix/sorting-issue`)

## Contributing

### 1. Create a new branch
```bash
git checkout -b feature/your-feature-name
```

### 2. Make your changes
- Follow existing code patterns
- Add facts to `src/data/facts.js`
- Update methods in `src/RandomHistoricalFacts.js` if needed

### 3. Test your changes
```bash
npm test
```
**Recommended**: All tests should pass before submitting a PR

### 4. Commit and push
```bash
git add .
git commit -m "Add: description of changes"
git push origin feature/your-feature-name
```

### 5. Create a Pull Request
- Go to the original repository
- Click "New Pull Request"
- Describe your changes
- Wait for review

## Testing

```bash
# Run all Jest tests
npm test
```

When adding new methods, please include tests in `/test/index.test.js`

## Development Tools

### ESLint (Optional)
The project was developed using ESLint. While not required, it's recommended:

```bash
# Install ESLint (optional)
npm install --save-dev eslint

# Run ESLint
npx eslint src/
```

### Project Structure
```
Random-Historical-Facts/
├── src/
│   ├── index.js                    # Export module
│   ├── RandomHistoricalFacts.js    # Main class implementation
│   └── data/
│       └── facts.js                # Historical facts
├── test/
│   └── index.test.js     # Tests
└── package.json
```

## PR Checklist

- [ ] Tests pass (`npm test`)
- [ ] Code follows existing patterns
- [ ] No console.log statements in production code
- [ ] Clear commit messages

## Contact

Questions or need help? Contact me at: **fl223km@student.lnu.se**

---

Thank you for contributing!