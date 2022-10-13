import Enzyme, {shallow} from 'enzyme'
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import App from './App';

Enzyme.configure({
    adapter: new EnzymeAdapter()
})

describe("App", () => {

    /**
     * Factory function to create a ShallowWrapper for the App component.
     * @function setup
     * @returns {ShallowWrapper}
     */
    const setup = () => shallow(<App/>)

    const findByTestAttribute = (wrapper, value) => wrapper.find(`[data-test='${value}']`)

    test('renders without crashing', () => {
        const wrapper = setup();

        //console.log(wrapper.debug())
        expect(wrapper.exists()).toBe(true)
    });

    test('renders increment button', () => {
        const wrapper = setup();

        const appComponent = findByTestAttribute(wrapper,'component-app')
        expect(appComponent.length).toBe(1);
    });

    test('renders counter display', () => {
        const wrapper = setup();

        const buttonElement = findByTestAttribute(wrapper,'increment-button')
        expect(buttonElement.length).toBe(1);
    });

    test('counter display starts at 0', () => {
        const wrapper = setup();

        const count = findByTestAttribute(wrapper,"count").text();
        expect(count).toBe("0");
    });

    test('clicking increment button', () => {
        const wrapper = setup();

        // find the button
        const button = findByTestAttribute(wrapper,"increment-button");

        // click the button
        button.simulate("click");

        // find the display, and test that the number has been incremented
        const count = findByTestAttribute(wrapper,"count").text();
        expect(count).toBe("1");
    });

    test('clicking decrement button', () => {
        const wrapper = setup();

        const buttonIncrement = findByTestAttribute(wrapper,"increment-button");
        buttonIncrement.simulate("click");

        const buttonDecrement = findByTestAttribute(wrapper,"decrement-button");
        buttonDecrement.simulate("click");

        const count = findByTestAttribute(wrapper,"count").text();
        expect(count).toBe("0");
    })

    test('display error message when decrement button is clicked in 0', () => {
        const wrapper = setup();

        const buttonDecrement = findByTestAttribute(wrapper,"decrement-button");
        buttonDecrement.simulate("click");

        const error = findByTestAttribute(wrapper,"error-message")
        expect(error.exists()).toBe(true);
    })
})
