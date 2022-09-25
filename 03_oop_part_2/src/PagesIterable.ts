import { Page } from './Page';
import { Pages } from './pages';

type AbstractConstructor<T = {}> = abstract new (...args: any[]) => T;

export function PagesIterable<T extends AbstractConstructor<{ pages: Pages }>>(BaseClass: T) {
    abstract class PageIterable extends BaseClass {
        constructor(...args: any[]) {
            super(...args);
        }

        [Symbol.iterator](): Iterator<{ toString: () => string }> {
            const that = this;
            const pages = this.pages;
            let i = 0;

            return {
                next() {
                    const page = pages.getPage(i++);

                    return {
                        value: {
                            toString: () => `${that}, ${page}`,
                        },
                        done: !page,
                    };
                },
            };
        }
    }

    return PageIterable;
}
