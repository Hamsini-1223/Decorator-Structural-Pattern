import { Person } from "./person";
import { ValidationError } from "../utils/errorHandler";

export class BasicPerson implements Person {
  private name: string;

  constructor(name: string) {
    if (!name || name.trim() === "") {
      throw new ValidationError("Name cannot be empty");
    }
    this.name = name.trim();
  }

  getDescription(): string {
    return this.name;
  }

  getWarmth(): number {
    return 0;
  }
}
