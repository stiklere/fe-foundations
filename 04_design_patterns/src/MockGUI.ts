import { ShipmentState } from './types';

type ShipmentCallback = (state: ShipmentState) => void;

type ShipmentListeners = {
    [key: string]: ShipmentCallback[];
};

export interface GUI {
    on: (eventType: string, callback: ShipmentCallback) => void;
    trigger: (eventType: string, state: ShipmentState) => void;
}

export class MockGUI implements GUI {
    private listeners: ShipmentListeners = {};

    public on(eventType: string, callback: ShipmentCallback): void {
        this.listeners[eventType] = this.listeners[eventType] ? [...this.listeners[eventType], callback] : [callback];
    }

    public trigger(eventType: string, state: ShipmentState): void {
        this.listeners[eventType].forEach((callback) => callback(state));
    }
}
