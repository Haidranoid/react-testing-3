import React from "react";
import {useSelector} from "react-redux";

const Input = ({secretWord}) => {
    const [currentGuess, setCurrentGuess] = React.useState('');
    const success = useSelector(state => state.success)

    const renderInput = success => {
        if (success) return

        return <>
            <input type="text"
                   data-test="input-box"
                   className="mb-2 mx-sm-3"
                   placeholder="enter guess"
                   value={currentGuess}
                   onChange={e => setCurrentGuess(e.target.value)}
            />
            <button data-test="submit-button"
                    className="btn btn-primary mb-2"
                    onClick={event => {
                        event.preventDefault();
                        setCurrentGuess("")
                    }}>
                Submit
            </button>
        </>
    }

    return <div data-test="input-component">
        <form className="form-inline">
            {renderInput(success)}
        </form>
    </div>
}

export default Input;