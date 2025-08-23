// BasicPerson.ts - Concrete Component
import { Person } from "./Person";

export class BasicPerson implements Person {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  getDescription(): string {
    return this.name;
  }

  getWarmth(): number {
    return 0; // No warmth without clothes
  }
}
