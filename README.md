# JavaScript Fundamentals

This repository contains simple JavaScript scripts demonstrating the basics of the language.  
Each file introduces a fundamental concept of JavaScript programming.

---

## Files

- **0-javascript_is_amazing.js**  
  Prints the message:  


### 1. Multi Languages
**File:** `1-multi_languages.js`  
Prints 3 lines:



### 2. Arguments
**File:** `2-arguments.js`  
Prints a message depending on the number of arguments passed:  
- If no arguments → `No argument`  
- If one argument → `Argument found`  
- If more than one argument → `Arguments found`

### 3. Value Argument
**File:** `3-value_argument.js`  
Prints the first argument passed to the script:  
- If no arguments → `No argument`  
- If one argument → prints that argument

# 4-concat.js

This script prints two arguments passed to it in the following format:
Run the script with Node.js:

```bash
node 4-concat.js arg1 arg2

### 5. To Integer
**File:** `5-to_integer.js`  
Prints the first argument converted to an integer:  
- If the first argument can be converted → `My number: <integer>`  
- If not → `Not a number`


### 6. Multi Languages Loop
**File:** `6-multi_languages_loop.js`  
Prints 3 lines using an array and a loop:  
- C is fun  
- Python is cool  
- JavaScript is amazing

### 7. Multi C
**File:** `7-multi_c.js`  
Prints “C is fun” x times, where x is the first argument.  
- If x is not provided or not an integer, prints: *Missing number of occurrences*

## 8. Square

**File:** `8-square.js`

A script that prints a square.

- The first argument is the size of the square.
- If the first argument can’t be converted to an integer, it prints `Missing size`.
- Uses the character `X` to print the square.
- Uses a loop (`for`).


## 9. Add

**File:** `9-add.js`

A script that prints the addition of 2 integers.

- The first argument is the first integer.
- The second argument is the second integer.
- Defines a function with the prototype `function add(a, b)`.
- Uses `console.log(...)` for all output.

### 10-factorial.js
- Script computes and prints the factorial of a given integer.
- The first argument is taken as an integer for computation.
- Factorial of `NaN` is defined as `1`.
- Implemented recursively using a function.
- Usage:
  ```bash
  node 10-factorial.js 3
  # Output: 6

