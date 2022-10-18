import React from "react";

const Input = ({secretWord}) => {
    const [currentGuess, setCurrentGuess] = React.useState('');

    return <div data-test="input-component">
        <form className="form-inline">
            <input type="text"
                   data-test="input-box"
                   className="mb-2 mx-sm-3"
                   placeholder="enter guess"
                   value={currentGuess}
                   onChange={e => setCurrentGuess(e.target.value)}
            />
            <button data-test="submit-button" className="btn btn-primary mb-2">
                Submit
            </button>
        </form>
    </div>
}

export default Input;