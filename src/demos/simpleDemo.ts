import { BasicPerson } from "../models/basicPerson";
import { Sweater } from "../models/sweater";
import { Jacket } from "../models/jacket";
import { Hat } from "../models/hat";
import { Person } from "../models/person";
import { handleError } from "../utils/errorHandler";

function runSimpleDemo(): void {
  try {
    console.log("=== Decorator Pattern: Clothing Example ===\n");

    let person: Person = new BasicPerson("John");
    console.log(`${person.getDescription()} - Warmth: ${person.getWarmth()}`);

    person = new Sweater(person);
    console.log(`${person.getDescription()} - Warmth: ${person.getWarmth()}`);

    person = new Jacket(person);
    console.log(`${person.getDescription()} - Warmth: ${person.getWarmth()}`);

    person = new Hat(person);
    console.log(`${person.getDescription()} - Warmth: ${person.getWarmth()}`);

    console.log("\n--- Different Combination ---");
    let person2: Person = new BasicPerson("Sarah");
    person2 = new Hat(new Jacket(person2));
    console.log(`${person2.getDescription()} - Warmth: ${person2.getWarmth()}`);
  } catch (error) {
    handleError(error, "Simple Demo");
  }
}

runSimpleDemo();
