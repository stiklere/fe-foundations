import { Shipper } from './Shipper';
import { ShipmentCostOptions, ShipmentType } from './types';

export class AirEastShipper extends Shipper {
    private static SHIPMENT_COST_OPTIONS: ShipmentCostOptions = {
        [ShipmentType.LETTER]: {
            cost: 0.39,
        },
        [ShipmentType.PACKAGE]: {
            cost: 0.25,
        },
        [ShipmentType.OVERSIZED]: {
            cost: 0.25,
            additionalFees: 10,
        },
    };

    constructor() {
        super(AirEastShipper.SHIPMENT_COST_OPTIONS);
    }
}
