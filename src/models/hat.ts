import { Clothing } from "./clothing";
import { Person } from "./person";

export class Hat extends Clothing {
  private readonly warmthValue = 10;

  constructor(person: Person) {
    super(person);
  }

  getDescription(): string {
    return this.person.getDescription() + " + Hat";
  }

  getWarmth(): number {
    return this.person.getWarmth() + this.warmthValue;
  }
}
