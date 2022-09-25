import { Mark } from './types';

type Constructor<T = {}> = new (...args: any[]) => T;

const MARKS: Record<Mark, string> = {
    [Mark.FRAGILE]: 'FRAGILE',
    [Mark.NOT_LEAVE]: 'DO NOT LEAVE IF ADDRESS NOT AT HOME',
    [Mark.RETURN_REQUESTED]: 'RETURN RECEIPT REQUESTED',
};

export function ShipmentMarkDecorator<T extends Constructor<{ ship(): string; getMarks(): Mark[] | undefined }>>(
    constructor: T
) {
    return class extends constructor {
        constructor(...args: any[]) {
            super(...args);
        }

        public ship(): string {
            const result = super.ship();
            const marks = super.getMarks();

            return marks?.length ? [result, ...marks.map((mark) => `**MARK ${MARKS[mark]}**`)].join('\n') : result;
        }
    };
}
