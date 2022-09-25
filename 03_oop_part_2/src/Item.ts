import { Page } from './Page';
import { Pages } from './Pages';

export abstract class Item {
    protected _pages: Pages;

    constructor(pages: Pages) {
        this._pages = pages;
    }

    get pages() {
        return this._pages;
    }

    abstract toString(): string;
}
