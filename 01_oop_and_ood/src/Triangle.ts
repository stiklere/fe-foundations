import { Point } from "./Point";
import { Shape } from "./Shape";

export class Triangle extends Shape {
  constructor(a: Point, b: Point, c: Point);
  constructor(a: Point, b: Point, c: Point, color: string, filled: boolean);
  constructor(a: Point, b: Point, c: Point, color?: string, filled?: boolean) {
    super([a, b, c], color, filled);
  }

  toString(): string {
    return `Triangle[v1=${this.points[0].toString()},v2=${this.points[1].toString()},v3=${this.points[2].toString()}]`;
  }

  getType(): string {
    const distances = new Set([
      this.points[0].distance(this.points[1]).toFixed(1),
      this.points[1].distance(this.points[2]).toFixed(1),
      this.points[2].distance(this.points[0]).toFixed(1),
    ]);

    switch (distances.size) {
      case 1:
        return "equilateral triangle";
      case 2:
        return "isosceles triangle";
      default:
        return "scalene triangle";
    }
  }
}
