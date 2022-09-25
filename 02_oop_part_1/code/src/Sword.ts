import { Weapon } from "./Weapon";

export class Sword extends Weapon {
  constructor(
    value: number,
    weight: number,
    baseDamage: number,
    baseDurability: number
  ) {
    super("Sword", value, weight, baseDamage, baseDurability);
  }

  public polish(): void {
    const currentDamageModifier = this.getDamageModifier();
    const newDamageModifier =
      currentDamageModifier + Weapon.MODIFIER_CHANGE_RATE;
    const maxDamageModifierValue = (this.getBaseDamage() * 25) / 100;

    this.setDamageModifier(
      newDamageModifier <= maxDamageModifierValue
        ? newDamageModifier
        : maxDamageModifierValue
    );
  }
}
