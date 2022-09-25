import { Client } from '../src/Client';
import { MockGUI } from '../src/mockGui';
import { Mark, ShipmentState } from '../src/types';

const MOCK_STATE: ShipmentState = {
    shipmentId: 333,
    toAddress: 'New York',
    fromAddress: 'Chicago',
    toZipCode: '11111',
    fromZipCode: '66666',
    weight: 10,
    marks: [Mark.FRAGILE, Mark.NOT_LEAVE, Mark.RETURN_REQUESTED],
};

describe('Client', () => {
    it('should call ship on ship event', () => {
        const GUI = new MockGUI();
        const client = new Client(GUI);
        spyOn(client, 'onShip');

        GUI.trigger('ship', MOCK_STATE);

        expect(client.onShip).toHaveBeenCalledWith(MOCK_STATE);
    });

    it('should assign incremental shipment id if shipment id is equal to 0', () => {
        const GUI = new MockGUI();
        const client = new Client(GUI);

        expect(client.onShip({ ...MOCK_STATE, shipmentId: 0, marks: undefined })).toBe(
            'Shipment with the ID 1 will be picked up from Chicago 66666 and shipped to New York 11111\nCost = 4.2'
        );
        expect(client.onShip({ ...MOCK_STATE, shipmentId: 0, marks: undefined })).toBe(
            'Shipment with the ID 2 will be picked up from Chicago 66666 and shipped to New York 11111\nCost = 4.2'
        );
    });

    it('should return correct shipment message when package is shipped and has no marks', () => {
        const GUI = new MockGUI();
        const client = new Client(GUI);

        expect(client.onShip({ ...MOCK_STATE, marks: undefined })).toBe(
            'Shipment with the ID 333 will be picked up from Chicago 66666 and shipped to New York 11111\nCost = 4.2'
        );
    });

    it('should return correct shipment message when package is shipped and has marks', () => {
        const GUI = new MockGUI();
        const client = new Client(GUI);

        expect(client.onShip(MOCK_STATE)).toBe(
            'Shipment with the ID 333 will be picked up from Chicago 66666 and shipped to New York 11111\nCost = 4.2\n**MARK FRAGILE**\n**MARK DO NOT LEAVE IF ADDRESS NOT AT HOME**\n**MARK RETURN RECEIPT REQUESTED**'
        );
    });
});
