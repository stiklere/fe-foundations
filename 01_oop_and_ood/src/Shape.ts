import { Point } from "./Point";

export abstract class Shape {
  protected color: string;
  protected filled: boolean;
  points: Point[];

  constructor(points: Point[]);
  constructor(points: Point[], color: string, filled: boolean);
  constructor(
    points: Point[],
    color: string = "green",
    filled: boolean = true
  ) {
    if (points.length <= 2) {
      throw new Error("Shape should have more than 2 points");
    }

    this.points = points;
    this.color = color;
    this.filled = filled;
  }

  toString(): string {
    return `A Shape with color of ${this.color} and ${
      this.filled ? "filled" : "not filled"
    }. Points: ${this.points.reduce(
      (pointsList, point, index, points) =>
        pointsList +
        point.toString() +
        `${index + 1 < points.length ? ", " : "."}`,
      ""
    )}`;
  }

  getPerimeter(): number {
    return this.points.reduce(
      (perimeter, point, index, points) =>
        perimeter + point.distance(points[index + 1]),
      0
    );
  }

  abstract getType(): string;
}
