import { Shipper } from './Shipper';
import { ShipmentCostOptions, ShipmentType } from './types';

export class PacificParcelShipper extends Shipper {
    private static SHIPMENT_COST_OPTIONS: ShipmentCostOptions = {
        [ShipmentType.LETTER]: {
            cost: 0.51,
        },
        [ShipmentType.PACKAGE]: {
            cost: 0.19,
        },
        [ShipmentType.OVERSIZED]: {
            cost: 0.19 + 0.02,
        },
    };

    constructor() {
        super(PacificParcelShipper.SHIPMENT_COST_OPTIONS);
    }
}
