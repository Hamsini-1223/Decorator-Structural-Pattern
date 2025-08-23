// demo.ts - Simple Non-Interactive Demo
import { BasicPerson } from "./BasicPerson";
import { Sweater } from "./Sweater";
import { Jacket } from "./Jacket";
import { Hat } from "./Hat";
import { Person } from "./Person";

console.log("=== Decorator Pattern: Clothing Example ===\n");

// Start with a basic person
let person: Person = new BasicPerson("John");
console.log(person.getDescription() + " - Warmth: " + person.getWarmth());

// Add a sweater
person = new Sweater(person);
console.log(person.getDescription() + " - Warmth: " + person.getWarmth());

// Add a jacket
person = new Jacket(person);
console.log(person.getDescription() + " - Warmth: " + person.getWarmth());

// Add a hat
person = new Hat(person);
console.log(person.getDescription() + " - Warmth: " + person.getWarmth());

console.log("\n--- Different Combination ---");

// Create another person with different clothes
let person2: Person = new BasicPerson("Sarah");
person2 = new Hat(new Jacket(person2)); // Hat over Jacket (no sweater)
console.log(person2.getDescription() + " - Warmth: " + person2.getWarmth());

console.log("\n--- One More Example ---");

// Mix and match differently
let person3: Person = new BasicPerson("Mike");
person3 = new Sweater(new Hat(new Sweater(person3))); // Double sweater with hat
console.log(person3.getDescription() + " - Warmth: " + person3.getWarmth());
