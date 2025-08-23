// Hat.ts - Concrete Decorator
import { Clothing } from "./Clothing";
import { Person } from "./Person";

export class Hat extends Clothing {
  constructor(person: Person) {
    super(person);
  }

  getDescription(): string {
    return this.person.getDescription() + " + Hat";
  }

  getWarmth(): number {
    return this.person.getWarmth() + 10; // Adds 10 warmth
  }
}
