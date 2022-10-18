import {shallow} from "enzyme";
import Input from "./Input";
import {findByTestAttribute} from "../test/test-utils";

describe("Input", () => {

    const setup = () => shallow(<Input/>);
    test("renders without error", () => {
        const wrapper = setup();

        const inputComponent = findByTestAttribute(wrapper, "input-component");
        expect(inputComponent.length).toBe(1);
    })
});