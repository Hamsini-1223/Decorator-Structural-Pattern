import { Clothing } from "./clothing";
import { Person } from "./person";

export class Sweater extends Clothing {
  private readonly warmthValue = 20;

  constructor(person: Person) {
    super(person);
  }

  getDescription(): string {
    return this.person.getDescription() + " + Sweater";
  }

  getWarmth(): number {
    return this.person.getWarmth() + this.warmthValue;
  }
}
