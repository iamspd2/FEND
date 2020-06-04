import { validateURL } from '../client/js/URLcheck';

describe('testing submit', () => {
    it('Returns true on valid url', () => {
        expect(validateURL('https://www.forbes.com/sites/jonathanberr/2020/05/31/the-bad-news-for-gannett-other-publishers-continues/#22fc78a43a43')).toBe(true);
    })

    it('Returns false on invalid url', () => {
        expect(validateURL('nope')).toBe(false);
    })
})