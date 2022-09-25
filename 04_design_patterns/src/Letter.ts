import { Shipment } from './Shipment';
import { ShipmentMarkDecorator } from './ShipmentMarkDecorator';
import { ShipmentState, ShipmentType } from './types';

@ShipmentMarkDecorator
export class Letter extends Shipment {
    constructor(state: ShipmentState) {
        super(state);
    }

    public getCost() {
        return this.shipper.getCost(this.getWeight(), ShipmentType.LETTER);
    }
}
