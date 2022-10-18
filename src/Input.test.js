import {shallow} from "enzyme";
import React from "react";
import Input from "./Input";
import {findByTestAttribute} from "../test/test-utils";


const setup = () => shallow(<Input/>);

describe("Input", () => {

    test("renders without error", () => {
        const wrapper = setup();

        const inputComponent = findByTestAttribute(wrapper, "input-component");
        expect(inputComponent.length).toBe(1);
    })
});

describe("Input - state controlled input field", () => {

    test("state updates will value of input box upon change", () => {
        const mockSetCurrentGuess = jest.fn();
        React.useState = jest.fn(() => ["", mockSetCurrentGuess]);

        const wrapper = setup();
        const inputBox = findByTestAttribute(wrapper, 'input-box');

        const mockEvent = {target: {value: 'train'}};
        inputBox.simulate("change", mockEvent);

        expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
    })
})