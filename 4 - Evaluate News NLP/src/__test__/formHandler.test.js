import { handleSubmit } from '../client/js/formHandler';

global.fetch = require("jest-fetch-mock");

describe('testing submit', () => {
    it('handleSubmit submits data', () => {
        document.body.innerHTML = `<main>
                <section>
                    <form class="" onsubmit="return Client.handleSubmit(event)">
                        <label for="url">Type in a URL to the text you want to analyse</label>
                        <input id="url" type="text" name="input" value="https://www.forbes.com/sites/jonathanberr/2020/05/31/the-bad-news-for-gannett-other-publishers-continues/#22fc78a43a43" placeholder="URL">
                        <input type="submit" name="" value="submit" onclick="return Client.handleSubmit(event)" onsubmit="return Client.handleSubmit(event)">
                    </form>
                <section>

                <section>
                    <strong>News Analysis Results:</strong>
            
                    <table style="width:100%">
                        <tr>
                            <th colspan="2">Sentiment</th>
                        </tr>
                        <tr>
                            <td>Polarity</td>
                            <td id='pol'></td>
                        </tr>
                        <tr>
                            <td>Confidence</td>
                            <td id="pol_conf"></td>
                        </tr>
                        <tr>
                            <th colspan="2">Subjectivity</th>
                        </tr>
                        <tr>
                            <td>Subjectivity</td>
                            <td id="sub"></td>
                        </tr>
                        <tr>
                            <td>Confidence</td>
                            <td id="sub_conf"></td>
                        </tr>
                        <tr>
                            <th colspan="2">Text</th>
                        </tr>
                        <tr>
                            <td colspan="2" id="text"></td>
                        </tr>
                    </table>
                </section>
            </main>`;


        fetch.mockResponseOnce(JSON.stringify({ text: 'test' }));
        handleSubmit({ preventDefault: () => {} });

        expect(fetch.mock.calls.length).toEqual(1);

    })
})