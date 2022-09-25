import { Item } from "./Item";
import { ItemComparator } from "./ItemComparator";

export class Inventory {
  private items: Item[] = [];

  public addItem(item: Item): void {
    this.items.push(item);
  }

  public sort(): void;
  public sort(comparator: ItemComparator): void;
  public sort(comparator?: ItemComparator): void {
    if (comparator) {
      this.items.sort(comparator.compare);
    } else {
      this.items.sort((a, b) => a.getValue() - b.getValue());
    }
  }

  public toString(): string {
    return this.items.join(",");
  }
}
