import { GUI } from './MockGUI';
import { ShipmentFactory } from './ShipmentFactory';
import { ShipmentState } from './types';

export class Client {
    constructor(GUI: GUI) {
        GUI.on('ship', (state: ShipmentState) => this.onShip(state));
    }

    public onShip(state: ShipmentState): string {
        const shipment = ShipmentFactory.create(state);
        return shipment.ship();
    }
}
