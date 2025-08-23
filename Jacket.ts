// Jacket.ts - Concrete Decorator
import { Clothing } from "./Clothing";
import { Person } from "./Person";

export class Jacket extends Clothing {
  constructor(person: Person) {
    super(person);
  }

  getDescription(): string {
    return this.person.getDescription() + " + Jacket";
  }

  getWarmth(): number {
    return this.person.getWarmth() + 30; // Adds 30 warmth
  }
}
