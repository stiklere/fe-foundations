import { Page } from './Page';

export class Pages {
    private pages: Page[];

    constructor(pages: Page[]) {
        this.pages = pages;
    }

    public get count() {
        return this.pages.length;
    }

    public getPage(page: number) {
        return this.pages[page];
    }
}
