import {shallow} from "enzyme";
import {findByTestAttribute} from "../test/test-utils";
import GuessedWords from "./GuessedWords.";

const defaultProps = {
    guessedWords: [
        {guessedWord: 'train', letterMatchCount: 3},
    ]
}

describe("GuessedWords", () => {

    const setup = (props = {}) => {
        const setupProps = {
            ...defaultProps,
            ...props,
        }

        return shallow(<GuessedWords {...setupProps}/>)
    }

    let wrapper;
    beforeEach(() => {
        wrapper = setup({guessedWords: []});
    })

    test("render without error", () => {
        const component = findByTestAttribute(wrapper, 'component-guessed-words');

        expect(component.length).toBe(1);
    });

    test("render intructions to guess a word", () => {
        const instructions = findByTestAttribute(wrapper, 'guess-instructions');

        expect(instructions.text().length).not.toBe(0);
    });

})