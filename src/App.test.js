import {shallow} from "enzyme";
import {findByTestAttribute} from "../test/test-utils";
import App from './App';


const setup = (props = {}) => {
    return shallow(<App {...props}/>)
}

describe("App", () => {

    test("renders without error", () => {
        const wrapper = setup();

        const app = findByTestAttribute(wrapper, 'component-app')

        expect(app).toHaveLength(1);
    })
})
