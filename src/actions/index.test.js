import {getSecretWord} from "./index";
import {storeFactory} from "../../test/test-utils";

const moxios = require('moxios')


describe("getSecretWord", () => {
    beforeEach(() => {
        moxios.install();
    })

    afterEach(() => {
        moxios.uninstall();
    })

    test("secretWord is returned", () => {
        const store = storeFactory()
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();

            request.respondWith({
                code: 200,
                response: 'party'
            })
        })

        // TODO: update to test app in redux/contest sections
        return store.dispatch(getSecretWord())
            .then(() => {

                const secretWord = store.getState().secretWord;
                expect(secretWord).toBe('party')
            })
    })
})