import { AirEastShipper } from './AirEastShipper';
import { ChicagoSprintShipper } from './ChicagoSprintShipper';
import { PacificParcelShipper } from './PacificParcelShipper';

export class ShipperFactory {
    public static create(zipCode: string) {
        const [firstChar] = zipCode;

        if ([4, 5, 6].includes(Number(firstChar))) {
            return new ChicagoSprintShipper();
        }

        if ([7, 8, 9].includes(Number(firstChar))) {
            return new PacificParcelShipper();
        }

        return new AirEastShipper();
    }
}
