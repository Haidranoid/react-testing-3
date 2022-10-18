import {shallow} from "enzyme";
import React from "react";
import Input from "./Input";
import {findByTestAttribute} from "../test/test-utils";

// mock entire module for destructuring useState on import
// const mockSetCurrentGuess = jest.fn()
// jest.mock('react', () => ({
//  ...jest.requireActual('react'),
//  useState: initialState => [initialState, mockSetCurrentGuess]
// })

const setup = (success = false, secretWord = 'party') => {
    return shallow(<Input success={success} secretWord={secretWord}/>);
}

describe("render", () => {

    describe("success is true", () => {

        let wrapper;
        beforeEach(() => {
            wrapper = setup(true);
        })

        test("renders without error", () => {
            const inputComponent = findByTestAttribute(wrapper, "input-component");
            expect(inputComponent.length).toBe(1);
        })

        test("input box does not show", () => {
            const inputBox = findByTestAttribute(wrapper, 'input-box');
            expect(inputBox.exists()).toBe(false);
        })

        test("submit button does not show", () => {
            const submitButton = findByTestAttribute(wrapper, 'submit-button');
            expect(submitButton.exists()).toBe(false);
        })
    })

    describe("success is false", () => {

        let wrapper;
        beforeEach(() => {
            wrapper = setup(false);
        })

        test("renders without error", () => {
            const inputComponent = findByTestAttribute(wrapper, "input-component");
            expect(inputComponent.length).toBe(1);
        })

        test("input box shows", () => {
            const inputBox = findByTestAttribute(wrapper, 'input-box');
            expect(inputBox.exists()).toBe(true);
        })

        test("submit button shows", () => {
            const submitButton = findByTestAttribute(wrapper, 'submit-button');
            expect(submitButton.exists()).toBe(true);
        })
    })
})

describe("Input - state controlled input field", () => {

    let wrapper;
    let mockSetCurrentGuess = jest.fn();
    let originalUseState;

    beforeEach(() => {
        // reset mocked values
        mockSetCurrentGuess.mockClear();

        // set mocked values/implementations
        originalUseState = React.useState;
        React.useState = jest.fn(() => ["", mockSetCurrentGuess]);

        // renders component
        wrapper = setup();
    })

    afterEach(() => {
        React.useState = originalUseState;
    })

    test("state updates will value of input box upon change", () => {
        const inputBox = findByTestAttribute(wrapper, 'input-box');

        const mockEvent = {target: {value: 'train'}};
        inputBox.simulate("change", mockEvent);

        expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
    })

    test("field is cleared upon submit button click", () => {
        const submitButton = findByTestAttribute(wrapper, "submit-button");

        submitButton.simulate("click", {
            preventDefault() {
            }
        });

        expect(mockSetCurrentGuess).toHaveBeenCalledWith("");
    })
})