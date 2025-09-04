import { Person } from "./person";
import { ValidationError } from "../utils/errorHandler";

export class Clothing implements Person {
  protected person: Person;

  constructor(person: Person) {
    if (!person) {
      throw new ValidationError("Person cannot be null or undefined");
    }
    this.person = person;
  }

  getDescription(): string {
    try {
      return this.person.getDescription();
    } catch (error) {
      throw new Error(`Failed to get description: ${error}`);
    }
  }

  getWarmth(): number {
    try {
      return this.person.getWarmth();
    } catch (error) {
      throw new Error(`Failed to get warmth: ${error}`);
    }
  }
}
