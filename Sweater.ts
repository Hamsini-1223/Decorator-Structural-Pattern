// Sweater.ts - Concrete Decorator
import { Clothing } from "./Clothing";
import { Person } from "./Person";

export class Sweater extends Clothing {
  constructor(person: Person) {
    super(person);
  }

  getDescription(): string {
    return this.person.getDescription() + " + Sweater";
  }

  getWarmth(): number {
    return this.person.getWarmth() + 20; // Adds 20 warmth
  }
}
