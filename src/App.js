import {useEffect} from "react";
import Congrats from "./Congrats";
import GuessedWords from "./GuessedWords.";
import Input from "./Input";
import {getSecretWord} from "./actions";
import {useDispatch, useSelector} from "react-redux";

function App() {
    const success = useSelector(state => state.success);
    const secretWord = useSelector(state => state.secretWord);
    const guessedWords = useSelector(state => state.guessedWords);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getSecretWord());
    }, [])

    return (
        <div data-test="component-app">
            <h1>Jotto</h1>
            <Congrats success={success}/>
            <Input success={success} secretWord={secretWord}/>
            <GuessedWords guessedWords={guessedWords}/>
        </div>
    );
}

export default App;
