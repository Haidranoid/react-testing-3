const GuessedWords = ({guessedWords}) => {

    return <div data-test="component-guessed-words">
        {guessedWords.length === 0 && <span data-test="guess-instructions">
            Try to guess the secret word!
        </span>}
    </div>
}

export default GuessedWords;