import { Page } from './Page';
import { Pages } from './Pages';

enum PageVariant {
    Book,
    Comics,
    Magazine,
}

const PageType: Record<PageVariant, string> = {
    [PageVariant.Book]: 'with text',
    [PageVariant.Comics]: 'with article',
    [PageVariant.Magazine]: 'with images',
};

const PageMaterial: Record<PageVariant, string> = {
    [PageVariant.Book]: 'simple paper',
    [PageVariant.Comics]: 'glossy paper',
    [PageVariant.Magazine]: 'glossy paper',
};

export class PageFactory {
    static create(pageCount: number, pageVariant: PageVariant): Pages {
        return new Pages(
            [...Array(pageCount).keys()].map(
                (pageNumber) => new Page(pageNumber, PageType[pageVariant], PageMaterial[pageVariant])
            )
        );
    }
}
