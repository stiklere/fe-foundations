import { Item } from './Item';
import { Pages } from './Pages';
import { PagesIterable } from './PagesIterable';

export class Book extends PagesIterable(Item) {
    private _title: string;
    private _author: string;

    constructor(title: string, author: string, pages: Pages) {
        super(pages);
        this._title = title;
        this._author = author;
    }

    public get title() {
        return this._title;
    }

    public set title(title: string) {
        this._title = title;
    }

    public get author() {
        return this._author;
    }

    public set author(author: string) {
        this._author = author;
    }

    toString(): string {
        return `Book: ${this.title} by ${this.author} with number of pages: ${this.pages.count}`;
    }
}
