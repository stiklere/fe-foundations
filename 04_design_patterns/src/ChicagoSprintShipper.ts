import { Shipper } from './Shipper';
import { ShipmentCostOptions, ShipmentType } from './types';

export class ChicagoSprintShipper extends Shipper {
    private static SHIPMENT_COST_OPTIONS: ShipmentCostOptions = {
        [ShipmentType.LETTER]: {
            cost: 0.42,
        },
        [ShipmentType.PACKAGE]: {
            cost: 0.2,
        },
        [ShipmentType.OVERSIZED]: {
            cost: 0.2,
        },
    };

    constructor() {
        super(ChicagoSprintShipper.SHIPMENT_COST_OPTIONS);
    }
}
