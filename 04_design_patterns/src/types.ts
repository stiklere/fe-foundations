export enum Mark {
    FRAGILE,
    NOT_LEAVE,
    RETURN_REQUESTED,
}

export interface ShipmentState {
    shipmentId: number;
    toAddress: string;
    fromAddress: string;
    toZipCode: string;
    fromZipCode: string;
    weight: number;
    marks?: Mark[];
}

export enum ShipmentType {
    LETTER,
    PACKAGE,
    OVERSIZED,
}

interface CostOptions {
    cost: number;
    additionalFees?: number;
}

export type ShipmentCostOptions = Record<ShipmentType, CostOptions>;
