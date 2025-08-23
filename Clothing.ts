// Clothing.ts - Base Decorator
import { Person } from "./Person";

export class Clothing implements Person {
  protected person: Person;

  constructor(person: Person) {
    this.person = person;
  }

  getDescription(): string {
    return this.person.getDescription();
  }

  getWarmth(): number {
    return this.person.getWarmth();
  }
}
