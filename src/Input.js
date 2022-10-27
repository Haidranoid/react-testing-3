import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {guessWord} from "./actions";

const Input = ({secretWord}) => {
    const [currentGuess, setCurrentGuess] = React.useState('');
    const dispatch = useDispatch();
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
                        dispatch(guessWord(currentGuess));
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