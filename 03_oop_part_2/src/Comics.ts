import { Item } from './Item';
import { Pages } from './Pages';
import { PagesIterable } from './PagesIterable';

export class Comics extends PagesIterable(Item) {
    private _title: string;
    private _author: string;
    private _artist: string;

    constructor(title: string, author: string, artist: string, pages: Pages) {
        super(pages);
        this._title = title;
        this._author = author;
        this._artist = artist;
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

    public get artist() {
        return this._artist;
    }

    public set artist(artist: string) {
        this._artist = artist;
    }

    toString(): string {
        return `Comics: ${this.title} by ${this.author}, the artist is ${this.artist}, number of pages: ${this.pages.count}`;
    }
}
