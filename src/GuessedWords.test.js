import {shallow} from "enzyme";
import {findByTestAttribute} from "../test/test-utils";
import GuessedWords from "./GuessedWords.";

const defaultProps = {
    guessedWords: [
        {guessedWord: 'train', letterMatchCount: 3},
    ]
}

const setup = (props = {}) => {
    const setupProps = {
        ...defaultProps,
        ...props,
    }

    return shallow(<GuessedWords {...setupProps}/>)
}

describe("GuessedWords - if there are no words guessed", () => {

    let wrapper;
    beforeEach(() => {
        wrapper = setup({guessedWords: []});
    })

    test("render without error", () => {
        const component = findByTestAttribute(wrapper, 'component-guessed-words');

        expect(component.length).toBe(1);
    });

    test("render instructions to guess a word", () => {
        const instructions = findByTestAttribute(wrapper, 'guess-instructions');

        expect(instructions.text().length).not.toBe(0);
    });

})

describe("GuessedWords - if there are words guessed", () => {

    const guessedWords = [
        {guessedWord: 'train', letterMatchCount: 3},
        {guessedWord: 'agile', letterMatchCount: 1},
        {guessedWord: 'party', letterMatchCount: 5},
    ]

    let wrapper;
    beforeEach(() => {
        wrapper = setup({guessedWords});
    })

    test("renders without error", () => {
        const component = findByTestAttribute(wrapper, 'component-guessed-words');

        expect(component.length).toBe(1);
    });

    test("renders 'guessed words' section", () => {
        const guessedWordsNode = findByTestAttribute(wrapper, 'guessed-words');

        expect(guessedWordsNode.length).toBe(1);
    });

    test("correct number of guessed words", () => {
        const guessWordsNodes = findByTestAttribute(wrapper, 'guessed-word');

        expect(guessWordsNodes.length).toBe(3);
    });
})