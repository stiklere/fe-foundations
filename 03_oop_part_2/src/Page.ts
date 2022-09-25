export class Page {
    number: number;
    type: string;
    material: string;

    constructor(number: number, type: string, material: string) {
        this.number = number;
        this.type = type;
        this.material = material;
    }

    toString(): string {
        return `here is page ${this.type} #${this.number} and it's material is ${this.material}`;
    }
}
