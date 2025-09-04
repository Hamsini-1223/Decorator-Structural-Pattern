import { Clothing } from "./clothing";
import { Person } from "./person";

export class Jacket extends Clothing {
  private readonly warmthValue = 30;

  constructor(person: Person) {
    super(person);
  }

  getDescription(): string {
    return this.person.getDescription() + " + Jacket";
  }

  getWarmth(): number {
    return this.person.getWarmth() + this.warmthValue;
  }
}
