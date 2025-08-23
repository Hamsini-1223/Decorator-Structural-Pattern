# Decorator Pattern - Clothing Example

[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)
[![Built by](https://img.shields.io/badge/Built%20by-Ms%20Hamsini%20S-brightgreen.svg)]()

A TypeScript implementation of the Decorator structural design pattern using a clothing analogy.

## Overview

The Decorator pattern allows you to add new behaviors to objects by placing them inside wrapper objects that contain the behaviors. This implementation uses the intuitive concept of putting on clothes to demonstrate how decorators work.

## Pattern Analogy

- **BasicPerson** - A person without clothes (0 warmth)
- **Sweater** - Adds 20 warmth points
- **Jacket** - Adds 30 warmth points
- **Hat** - Adds 10 warmth points

Each clothing item "decorates" the person with additional warmth while maintaining the same interface.

## Installation

```bash
git clone https://github.com/your-username/decorator-pattern-clothing.git
cd decorator-pattern-clothing
npm install
```

## Usage

### Interactive Demo

```bash
npm run interactive
```

### Simple Demo

```bash
npm run simple
```

## Code Example

```typescript
import { BasicPerson, Sweater, Jacket, Hat } from "./";

// Start with a basic person
let person = new BasicPerson("John");
console.log(person.getDescription()); // "John"
console.log(person.getWarmth()); // 0

// Add clothing layers
person = new Sweater(person);
person = new Jacket(person);
person = new Hat(person);

console.log(person.getDescription()); // "John + Sweater + Jacket + Hat"
console.log(person.getWarmth()); // 60
```

## Project Structure

```
├── Person.ts          # Component interface
├── BasicPerson.ts     # Concrete component
├── Clothing.ts        # Base decorator
├── Sweater.ts         # Concrete decorator (+20 warmth)
├── Jacket.ts          # Concrete decorator (+30 warmth)
├── Hat.ts             # Concrete decorator (+10 warmth)
├── main.ts            # Interactive console demo
├── demo.ts            # Simple demonstration
├── package.json       # Project configuration
└── tsconfig.json      # TypeScript configuration
```

## Class Diagram

```
                    ┌─────────────────┐
                    │   <<interface>> │
                    │     Person      │
                    ├─────────────────┤
                    │ +getDescription │
                    │ +getWarmth      │
                    └─────────────────┘
                             ▲
                             │
                    ┌────────┼────────┐
                    │                 │
       ┌─────────────────┐   ┌─────────────────┐
       │   BasicPerson   │   │    Clothing     │
       ├─────────────────┤   │ (BaseDecorator) │
       │ - name          │   ├─────────────────┤
       │ +getDescription │   │ # person        │
       │ +getWarmth      │   │ +getDescription │
       └─────────────────┘   │ +getWarmth      │
                             └─────────────────┘
                                      ▲
                                      │
                        ┌─────────────┼─────────────┐
                        │             │             │
            ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐
            │    Sweater      │ │     Jacket      │ │      Hat        │
            ├─────────────────┤ ├─────────────────┤ ├─────────────────┤
            │ +getDescription │ │ +getDescription │ │ +getDescription │
            │ +getWarmth      │ │ +getWarmth      │ │ +getWarmth      │
            │   (+20)         │ │   (+30)         │ │   (+10)         │
            └─────────────────┘ └─────────────────┘ └─────────────────┘
```

## Pattern Benefits

### Without Decorator Pattern

You would need separate classes for every combination:

- PersonWithSweater
- PersonWithJacket
- PersonWithSweaterAndJacket
- PersonWithSweaterAndJacketAndHat
- etc.

### With Decorator Pattern

- Only 4 classes needed: BasicPerson, Sweater, Jacket, Hat
- Infinite combinations possible
- Runtime composition
- Easy to extend with new clothing types

## Key Concepts

1. **Component Interface** (Person) - Defines operations for both wrapper and wrapped objects
2. **Concrete Component** (BasicPerson) - Provides default implementation
3. **Base Decorator** (Clothing) - Wraps component and delegates operations
4. **Concrete Decorators** (Sweater, Jacket, Hat) - Add specific behaviors

## Scripts

| Command               | Description                  |
| --------------------- | ---------------------------- |
| `npm run interactive` | Run interactive console demo |
| `npm run simple`      | Run basic demonstration      |
| `npm run build`       | Compile TypeScript           |
| `npm run clean`       | Remove compiled files        |

## Real-World Applications

- Java I/O streams (BufferedReader, FileReader)
- Web middleware (authentication, logging)
- UI component enhancement
- Database connection pooling

## Built by

**Ms Hamsini S**
