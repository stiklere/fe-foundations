import { ShipmentCostOptions, ShipmentType } from './types';

export abstract class Shipper {
    private shipmentCostOptions: ShipmentCostOptions;

    constructor(shipmentCostOptions: ShipmentCostOptions) {
        this.shipmentCostOptions = shipmentCostOptions;
    }

    public getCost(weight: number, shipmentType: ShipmentType): number {
        const { cost, additionalFees = 0 } = this.shipmentCostOptions[shipmentType];
        return Number((weight * cost + additionalFees).toFixed(2));
    }
}
