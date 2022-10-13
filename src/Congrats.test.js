import {shallow} from 'enzyme'
import App from './App';
import Congrats from "./Congrats";
import {findByTestAttribute} from "../test/test-utils";

describe("App", () => {

    const setup = (props = {}) => shallow(<Congrats {...props}/>);

    test("renders without error", () => {
        const wrapper = setup();

        const component = findByTestAttribute(wrapper, 'component-congrats');
        expect(component.length).toBe(1)
    });

    test("renders no text when 'success' prop is false", () => {
        const wrapper = setup({success: false});

        const component = findByTestAttribute(wrapper, 'component-congrats');
        expect(component.text()).toBe('')
    });

    test("renders non-empty congrats message when 'success' prop is true", () => {
        const wrapper = setup({success: true});

        const component = findByTestAttribute(wrapper, 'congrats-message');
        expect(component.length).toBe(1)
    });
})