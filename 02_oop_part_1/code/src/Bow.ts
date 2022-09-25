import { Weapon } from "./Weapon";

export class Bow extends Weapon {
  constructor(
    value: number,
    weight: number,
    baseDamage: number,
    baseDurability: number
  ) {
    super("Bow", value, weight, baseDamage, baseDurability);
  }

  public polish(): void {
    const maxDurabilityValue = 1;
    const maxDurabilityModifier = maxDurabilityValue - this.getBaseDurability();
    const currentDurabilityModifier = this.getDurabilityModifier();
    const newDurabilityModifier =
      currentDurabilityModifier + Weapon.MODIFIER_CHANGE_RATE;

    this.setDurabilityModifier(
      newDurabilityModifier <= maxDurabilityModifier
        ? newDurabilityModifier
        : maxDurabilityModifier
    );
  }
}
