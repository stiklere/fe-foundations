export class Point {
  x: number;
  y: number;

  constructor();
  constructor(x: number, y: number);
  constructor(x?: number, y?: number) {
    this.x = x || 0;
    this.y = y || 0;
  }

  toString(): string {
    return `(${this.x}, ${this.y})`;
  }

  distance(): number;
  distance(point: Point): number;
  distance(x: number, y: number): number;
  distance(...args): number {
    if (args[0] instanceof Point) {
      const { x, y } = args[0];
      return this.getDistance(x, y);
    }

    const [x, y] = args;

    if (!x || !y) {
      return this.getDistance(0, 0);
    }

    return this.getDistance(x, y);
  }

  private getDistance(x: number, y: number): number {
    return Math.sqrt(Math.pow(x - this.x, 2) + Math.pow(y - this.y, 2));
  }
}
