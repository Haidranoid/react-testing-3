import Congrats from "./Congrats";
import GuessedWords from "./GuessedWords.";
import Input from "./Input";

function App() {
    const success = false;
    const secretWord = 'party';
    const guessedWords = [];

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
