import Congrats from "./Congrats";
import GuessedWords from "./GuessedWords.";

function App() {

    return (
        <div>
            <h1>Jotto</h1>
            <Congrats success/>
            <GuessedWords guessedWords={[{guessedWord: 'train', letterMatchCount: 3}]}/>
        </div>
    );
}

export default App;
