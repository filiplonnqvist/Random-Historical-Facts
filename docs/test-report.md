# Test report

## Overview

This test report documents the result of all **automatic tests** of the `Random Historical Facts` NPM module. The module has been tested using Jest framework. The tests focus on functionality and error handling to ensure user needs are met before implementing in external code. All 11 public methods have been tested.

**Test framework:** Jest<br>
**Test execution:** `npm test`<br>
**Number of tests:** 19<br>
**Test status:** All tests passing<br>

## Automated Unit Tests

| Method Tested | Test Description | Result |
|--------------|------------------|---------|
| Constructor | Instance creation validation | ✅ Pass |
| getRandomFact | Returns random fact object | ✅ Pass |
| getRandomFamilyFriendlyFact | Returns only random non-explicit fact object | ✅ Pass |
| getAllFacts | Returns all fact objects | ✅ Pass |
| getAllFamilyFriendlyFactsOnly | Returns all non-explicit fact objects | ✅ Pass |
| getFactsCount | Returns total number of fact objects | ✅ Pass |
| getFactById | ID validation and retrieval | ✅ Pass (2 tests) |
| getFactsByTag | Returns facts filtered by tag | ✅ Pass |
| getAllFactTags | Returns array of all available tags | ✅ Pass |
| getFactsByPeriod | Returns fact objects filtered by period | ✅ Pass |
| getFactsBeforeYear | Year validation and filtering fact objects by year | ✅ Pass (2 tests) |
| getFactsAfterYear | Year validation and filtering fact objects by year | ✅ Pass (2 tests) |
| getAllFactsSortedAscendingByYear | Ascending sorting with error handling | ✅ Pass (2 tests) |
| getAllFactsSortedDescendingByYear | Descending sorting with error handling | ✅ Pass (2 tests) |

## Test analysis

### Basic functionality
There are thirteen tests in total for basic functionality, such as providing the desired objects and arrays and making sure that all properties are present in the returned object. In some cases, more extensive validation is required. For instance, the `getAllFactTags` method testing needs to ensure that the returned result is an array, that the array is not empty and that all elements are strings. Another example is the `getAllFactsSortedDescendingByYear` test, which requires a new instance to be created before emptying the array in order to preserve immutability.

### Validation
There are six tests in total for validation and error handling to ensure that the user is provided with necessary information when troubleshooting. All validations are separated into three private methods and then used in `getFactById`, `getFactsBeforeYear`, `getFactsAfterYear`, `getAllFactsSortedAscendingByYear` and `getAllFactsSortedDescendingByYear`. These methods test string input, negative numbers, non-numeric input and empty instances.

## Summary
As previously mentioned, all tests passed successfully, proving that `Random Historical Facts` works as expected in its current version. The NPM package is ready to be used by other developers.