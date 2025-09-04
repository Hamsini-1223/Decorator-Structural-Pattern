# Decorator Pattern - Clothing Example

A TypeScript implementation of the Decorator structural design pattern using a clothing analogy.

## Overview

The Decorator pattern allows you to add new behaviors to objects by placing them inside wrapper objects that contain the behaviors. This implementation uses the concept of putting on clothes to demonstrate how decorators work.

## Installation

```bash
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

## How It Works

The Decorator pattern creates a chain of wrapper objects, each adding functionality to the base object. In this example:

1. **BasicPerson** - The core component with no clothing (warmth: 0)
2. **Sweater** - Adds 20 warmth and updates the description
3. **Jacket** - Adds 30 warmth and updates the description  
4. **Hat** - Adds 10 warmth and updates the description

Each decorator wraps the previous object, creating a layered effect where behaviors are combined dynamically.

## Code Example

```typescript
import { BasicPerson } from "./src/models/basicPerson";
import { Sweater } from "./src/models/sweater";
import { Jacket } from "./src/models/jacket";
import { Hat } from "./src/models/hat";

// Start with a basic person
let person = new BasicPerson("John");
console.log(person.getDescription()); 
console.log(`Warmth: ${person.getWarmth()}`);

// Add clothing layers one by one
person = new Sweater(person);
console.log(person.getDescription());
console.log(`Warmth: ${person.getWarmth()}`);

person = new Jacket(person);
console.log(person.getDescription());
console.log(`Warmth: ${person.getWarmth()}`);

person = new Hat(person);
console.log(person.getDescription());
console.log(`Warmth: ${person.getWarmth()}`);
```

### Output

```
John
Warmth: 0
John + Sweater
Warmth: 20
John + Sweater + Jacket
Warmth: 50
John + Sweater + Jacket + Hat
Warmth: 60
```

### Alternative Composition

You can also compose decorators in different orders or combinations:

```typescript
// Different layering approach
let person2 = new BasicPerson("Sarah");
person2 = new Hat(new Jacket(new Sweater(person2)));
console.log(person2.getDescription()); // "Sarah + Sweater + Jacket + Hat"
console.log(`Warmth: ${person2.getWarmth()}`); // Warmth: 60

// Minimal clothing
let person3 = new BasicPerson("Mike");
person3 = new Hat(person3);
console.log(person3.getDescription()); // "Mike + Hat"
console.log(`Warmth: ${person3.getWarmth()}`); // Warmth: 10
```

## Project Structure

```
src/
├── models/
│   ├── person.ts          # Component interface
│   ├── basicPerson.ts     # Concrete component
│   ├── clothing.ts        # Base decorator
│   ├── sweater.ts         # Concrete decorator (+20 warmth)
│   ├── jacket.ts          # Concrete decorator (+30 warmth)
│   └── hat.ts             # Concrete decorator (+10 warmth)
├── demos/
│   ├── interactiveDemo.ts # Interactive console demo
│   └── simpleDemo.ts      # Basic demonstration
└── utils/
    └── errorHandler.ts    # Error handling utilities
├── README.md
├── package.json
└── tsconfig.json
```

## Interactive Demo Output

When you run `npm run interactive`, you'll see an interactive console interface:

```
INTERACTIVE DECORATOR PATTERN DEMO
==================================
Welcome to the Clothing Decorator Pattern!
You can put on different clothes to stay warm.
Each piece of clothing 'decorates' you with extra warmth!

What's your name? John

Hello John! You're starting with no clothes.

Current Status: John
Warmth Level: 0
You're freezing! You need some clothes!

=== What would you like to do? ===
1. Put on a Sweater (+20 warmth)
2. Put on a Jacket (+30 warmth)
3. Put on a Hat (+10 warmth)
4. Check current status
5. Start over with a new person
6. Exit
=====================================

Enter your choice (1-6): 1

You put on a sweater!

Current Status: John + Sweater
Warmth Level: 20
Still pretty cold. Maybe add more layers?

=== What would you like to do? ===
1. Put on a Sweater (+20 warmth)
2. Put on a Jacket (+30 warmth)
3. Put on a Hat (+10 warmth)
4. Check current status
5. Start over with a new person
6. Exit
=====================================

Enter your choice (1-6): 2

You put on a jacket!

Current Status: John + Sweater + Jacket
Warmth Level: 50
Nice and warm! Perfect for cold weather.
```

## Scripts

| Command               | Description                  |
|----------------------|------------------------------|
| `npm run interactive`| Run interactive console demo |
| `npm run simple`     | Run basic demonstration      |
| `npm run build`      | Compile TypeScript           |
| `npm run clean`      | Remove compiled files        |

## Pattern Benefits

- **Flexibility**: Compose behaviors at runtime
- **Single Responsibility**: Each decorator has one purpose
- **Open/Closed Principle**: Open for extension, closed for modification
- **Dynamic Composition**: Add or remove behaviors without changing existing code

## Built by

**Ms Hamsini S**
