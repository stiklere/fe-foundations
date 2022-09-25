import { Shipper } from './Shipper';
import { ShipperFactory } from './ShipperFactory';
import { Mark, ShipmentState } from './types';

export abstract class Shipment {
    static shipmentId: number = 1;
    protected shipper: Shipper;
    private state: ShipmentState;

    constructor(state: ShipmentState) {
        this.shipper = ShipperFactory.create(state.fromZipCode);
        this.state = state;
    }

    abstract getCost(): number;

    public getShipmentId(): number {
        if (this.state.shipmentId !== 0) {
            return this.state.shipmentId;
        }

        return Shipment.shipmentId++;
    }

    public ship(): string {
        return [
            `Shipment with the ID ${this.getShipmentId()} will be picked up from ${this.state.fromAddress} ${
                this.state.fromZipCode
            } and shipped to ${this.state.toAddress} ${this.state.toZipCode}`,
            `Cost = ${this.getCost()}`,
        ].join('\n');
    }

    public getWeight(): number {
        return this.state.weight;
    }

    public getMarks(): Mark[] | undefined {
        return this.state.marks;
    }
}
