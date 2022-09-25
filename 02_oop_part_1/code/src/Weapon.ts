import { Item } from "./Item";

export abstract class Weapon extends Item {
  static MODIFIER_CHANGE_RATE: number = 0.05;
  private baseDamage: number;
  private baseDurability: number;
  // from where do we get the following?
  private damageModifier: number;
  private durabilityModifier: number;

  constructor(
    name: string,
    value: number,
    weight: number,
    baseDamage: number,
    baseDurability: number
  ) {
    super(name, value, weight);
    this.baseDamage = baseDamage;
    this.baseDurability = baseDurability;
  }

  // doc file states that effective durability should decrease on weapon use, but that
  // doesn't make sense. I believe only durability modifier should decrease and it should
  // be used to indicate if weapon is still usable.
  public use(): string {
    const currentDurabilityModifier = this.getDurabilityModifier();

    if (currentDurabilityModifier <= 0) {
      return `You can't use the ${this.getName()}, it is broken.`;
    }

    const newDurabilityModifier =
      currentDurabilityModifier - Weapon.MODIFIER_CHANGE_RATE;

    let result = `You use the ${this.getName()}, dealing ${this.getDamage().toFixed(
      2
    )} points of damage.`;

    if (newDurabilityModifier <= 0) {
      result += ` The ${this.getName()} breaks.`;
    }

    this.setDurabilityModifier(newDurabilityModifier);

    return result;
  }

  public toString(): string {
    return `${super.toString()}, Damage: ${this.getDamage().toFixed(
      2
    )}, Durability: ${this.getDurability() * 100}%`;
  }

  public getDamage(): number {
    return this.baseDamage + this.damageModifier;
  }

  public getDurability(): number {
    return this.baseDurability + this.durabilityModifier;
  }

  public getBaseDamage(): number {
    return this.baseDamage;
  }

  public getBaseDurability(): number {
    return this.baseDurability;
  }

  public getDamageModifier(): number {
    return this.damageModifier;
  }

  public getDurabilityModifier(): number {
    return this.durabilityModifier;
  }

  public setDamageModifier(damageModifier: number): void {
    this.damageModifier = damageModifier;
  }

  public setDurabilityModifier(durabilityModifier: number): void {
    this.durabilityModifier = durabilityModifier;
  }
}
