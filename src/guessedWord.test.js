import {mount} from 'enzyme'
import {findByTestAttribute} from "../test/test-utils";
import App from "./App";

const setup = (state = {}) => {

    // TODO: apply state
    const wrapper = mount(<App/>)

    // add value to input box
    const inputBox = findByTestAttribute(wrapper, 'input-box');
    inputBox.simulate('change', {target: {value: 'train'}});

    // simulate click on submit button
    const submitButton = findByTestAttribute(wrapper, 'submit-button');
    submitButton.simulate('click', {
        preventDefault() {
        }
    })

    return wrapper;
}

describe.only("no words guessed", () => {

    let wrapper;
    beforeEach(() => {
        wrapper = setup({
            secretWord: 'party',
            success: false,
            guessedWords: []
        })
    })

    test("creates GuessedWords table with one row", () => {
        const guessWordRows = findByTestAttribute(wrapper, 'guessed-word');
        console.log(guessWordRows.debug())
        expect(guessWordRows).toHaveLength(1);
    })
})

describe("some words guessed", () => {

    let wrapper;
    beforeEach(() => {
        wrapper = setup({
            secretWord: 'party',
            success: false,
            guessedWords: [
                {guessedWord: 'agile', letterMatchCount: 1}
            ]
        })
    })

    test("add words guessed", () => {
        const guessWordRows = findByTestAttribute(wrapper, 'guessed-word');

        expect(guessWordRows).toHaveLength(2);
    })
})

describe("guess the secret word", () => {

    let wrapper;
    beforeEach(() => {
        wrapper = setup({
            secretWord: 'party',
            success: false,
            guessedWords: [
                {guessedWord: 'agile', letterMatchCount: 1}
            ]
        })

        // add value to input box
        const inputBox = findByTestAttribute(wrapper, 'input-box');
        const mockEvent = {target: {value: 'party'}};
        inputBox.simulate('change', mockEvent);

        // simulate click on submit button
        const submitButton = findByTestAttribute(wrapper, 'submit-button');
        submitButton.simulate('click', {
            preventDefault() {
            }
        })
    })

    test("add row to guessedWords table", () => {
        const guessedWordNodes = findByTestAttribute(wrapper, 'guessed-word');
        expect(guessedWordNodes).toHaveLength(3);
    })

    test("displays congrats component", () => {
        const congrats = findByTestAttribute(wrapper, 'component-congrats');
        expect(congrats.text().length).toBeGreaterThan(0)
    })

    test("does not display input component contests", () => {
        const inputBox = findByTestAttribute(wrapper, "input-box");
        expect(inputBox.exists()).toBe(false)

        const submitButton = findByTestAttribute(wrapper, "submit-button");
        expect(submitButton.exists()).toBe(false)
    })
})