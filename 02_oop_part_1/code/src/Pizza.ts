import { Consumable } from "./Consumable";

export class Pizza extends Consumable {
  static VALUE_PER_SLICE: number = 1;
  static WEIGHT_PER_SLICE = 0.2;
  numberOfSlices: number;
  slicesEaten: number = 0;

  constructor(numberOfSlices: number, spoiled: boolean) {
    super(
      "Pizza",
      numberOfSlices * Pizza.VALUE_PER_SLICE,
      numberOfSlices * Pizza.WEIGHT_PER_SLICE,
      spoiled
    );
    this.numberOfSlices = numberOfSlices;
  }

  public eat(): string {
    const newSlicesEaten = this.slicesEaten++;

    if (newSlicesEaten < this.numberOfSlices) {
      this.slicesEaten++;

      let result = `You eat the ${this.getName()}.`;

      if (this.isSpoiled()) {
        result += "\nYou feel sick.";
      }

      return result;
    }

    this.setConsumed(true);
    return super.use();
  }
}
