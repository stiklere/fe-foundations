import { Letter } from './Letter';
import { Oversized } from './Oversized';
import { Package } from './Package';
import { ShipmentState } from './types';

export class ShipmentFactory {
    public static create(state: ShipmentState) {
        if (state.weight <= 15) {
            return new Letter(state);
        }

        if (state.weight <= 160) {
            return new Package(state);
        }

        return new Oversized(state);
    }
}
