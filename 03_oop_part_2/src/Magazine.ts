import { Item } from './Item';
import { Pages } from './Pages';
import { PagesIterable } from './PagesIterable';

export class Magazine extends PagesIterable(Item) {
    private _title: string;

    constructor(title: string, pages: Pages) {
        super(pages);
        this._title = title;
    }

    public get title() {
        return this._title;
    }

    public set title(title: string) {
        this._title = title;
    }

    toString(): string {
        return `Magazine: ${this.title} with number of pages: ${this.pages.count}`;
    }
}
