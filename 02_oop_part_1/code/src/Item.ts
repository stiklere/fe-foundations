import { Comparable } from "./Comparable";

let numberOfItems: number = 0;

export abstract class Item implements Comparable<Item> {
  private id: number;
  private value: number;
  private name: string;
  private weight: number;

  constructor(name: string, value: number, weight: number) {
    this.id = numberOfItems;
    // increment counter on each usage
    numberOfItems++;

    this.value = value;
    this.name = name;
    this.weight = weight;
  }

  public abstract use(): void;

  public compareTo(other: Item): number {
    if (this.value === other.value) {
      const currentName = this.name.toLowerCase();
      const otherName = other.getName().toLocaleLowerCase();

      return currentName.localeCompare(otherName);
    }

    return this.value > other.getValue() ? 1 : -1;
  }

  public toString(): string {
    return `${this.name} - Value: ${this.value}, Weight: ${this.weight.toFixed(
      2
    )}`;
  }

  public getId(): number {
    return this.id;
  }

  public getValue(): number {
    return this.value;
  }

  public getName(): string {
    return this.name;
  }

  public getWeight(): number {
    return this.weight;
  }

  public setValue(price: number): void {
    this.value = price;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public setWeight(weight: number): void {
    this.weight = weight;
  }

  static reset(): void {
    numberOfItems = 0;
  }
}
