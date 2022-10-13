import Enzyme from 'enzyme'
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import App from './App';

Enzyme.configure({
    adapter: new EnzymeAdapter()
})

describe("App", () => {
    test("test", () => {
        
    })
})
