import { Item } from "./Item";

export abstract class Consumable extends Item {
  private consumed: boolean = false;
  private spoiled: boolean;

  constructor(name: string, value: number, weight: number, spoiled: boolean) {
    super(name, value, weight);
    this.spoiled = spoiled;
  }

  public eat(): string {
    let result = `You eat the ${this.getName()}.`;

    if (this.isSpoiled()) {
      result += "\nYou feel sick.";
    }

    return result;
  }

  public use(): string {
    if (!this.isConsumed() && !this.isSpoiled) {
      return this.eat();
    }

    return `There is nothing left of the ${this.getName()} to consume.`;
  }

  public isConsumed(): boolean {
    return this.consumed;
  }

  public setConsumed(consumed: boolean): void {
    this.consumed = consumed;
  }

  public isSpoiled(): boolean {
    return this.spoiled;
  }
}
