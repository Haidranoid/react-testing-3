import {mount} from "enzyme";
import {findByTestAttribute, storeFactory} from "../test/test-utils";
import App from './App';
import {getSecretWord as mockGetSecretWord} from "./actions";
import {Provider} from "react-redux";

// activate global mock to make sure getSecretWord doesn't make network call
jest.mock('./actions');

const setup = (initialState = {}, props = {}) => {
    const store = storeFactory(initialState);

    return mount(
        <Provider store={store}>
            <App {...props}/>
        </Provider>
    );
}

describe("App", () => {

    test("renders without error", () => {
        const wrapper = setup();

        const app = findByTestAttribute(wrapper, 'component-app')

        expect(app).toHaveLength(1);
    })
})

describe("get secret word", () => {
    beforeEach(() => {
        // clear the mock calls from previous test
        mockGetSecretWord.mockClear();
    })

    test('getSecretWord on app mount', () => {
        const wrapper = setup();

        expect(mockGetSecretWord).toHaveBeenCalledTimes(1)
    })

    test('getSecretWord does not run on app update', () => {
        const wrapper = setup();
        mockGetSecretWord.mockClear();

        wrapper.setProps();

        expect(mockGetSecretWord).toHaveBeenCalledTimes(0)
    })
})