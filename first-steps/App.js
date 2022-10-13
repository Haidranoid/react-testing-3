import {useState} from "react";

function App() {
    const [counter, setCounter] = useState(0);
    const [error, setError] = useState(false);

    return (
        <div data-test="component-app">
            <h1 data-test="counter-display">
                The counter is currently &nbsp;
                <span data-test="count">{counter}</span>
            </h1>
            <button data-test="increment-button" onClick={() => setCounter(v => (v + 1))}>
                Increment counter
            </button>
            <button data-test="decrement-button" onClick={() => {
                if (counter === 0) {
                    setError(true)
                } else {
                    setError(false)
                    setCounter(v => (v - 1))
                }
            }}>
                Decrement counter
            </button>
            {error && <div data-test="error-message">Error</div>}
        </div>
    );
}

export default App;
