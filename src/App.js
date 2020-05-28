import React, { Component } from 'react';
import './App.css';

const POSSIBLE_WORDS = [
  "BALLAST", 
  "CITHARE", 
  "QUETSCHE", 
  "TOMAHAWK", 
  "BALALAIKA", 
  "QUEMANDER",
  "FLIBUSTIER",
  "MAHARADJAH"
]
const LETTERS = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ']
const HIDDEN_SYMBOL = "_"

const DEFAULT_STATE = {
  numberOfWrongGuesses: 0,
  lettersAlreadyUsed: [],
}

const WordToGuess = ({ wordToGuess, lettersAlreadyUsed }) => (
  <div className="wordToGuess">
    {[...wordToGuess].map(
      (letter, index) =>(
      <span key={index}>
        {lettersAlreadyUsed.includes(letter) ? letter : HIDDEN_SYMBOL} </span>
    ))}
  </div>
)

const EndMessage = ({ text, onClick }) => (
  <div>
    <div className="wordToGuess">You have {text}!</div>
    <div className="letterButton" onClick={onClick}> Click here to reset the game... </div>
  </div>
  
)

const GuessCount = ({ numberOfWrongGuesses }) => (
  <div className="guesses">Number of wrong guesses left: {10 - numberOfWrongGuesses}</div>
)

const LetterButton = ({ letter, alreadyClicked, onClick }) => (
  <div className={`letterButton ${alreadyClicked}`} onClick={() => onClick(letter)}>
    <span className="letter">
      {letter}
    </span>
  </div>
  )

class App extends Component {
  state = {
    ...DEFAULT_STATE,
    wordToGuess: this.generateWordToGuess(),
  }

  generateWordToGuess(){
    return POSSIBLE_WORDS[Math.floor(Math.random() * POSSIBLE_WORDS.length)]
  }

  handleLetterClick = letter => {
    !this.state.lettersAlreadyUsed.includes(letter) && (
      this.setState({ 
        lettersAlreadyUsed: [...this.state.lettersAlreadyUsed, letter],
      }))
      
    !this.state.lettersAlreadyUsed.includes(letter) && !this.state.wordToGuess.includes(letter) && (
      this.setState({ 
        numberOfWrongGuesses: this.state.numberOfWrongGuesses + 1,
      }))
  }

  resetGame = () => {
    this.setState({
      ...DEFAULT_STATE,
      wordToGuess: this.generateWordToGuess(),
    })
  }

  render() {
    const { wordToGuess, numberOfWrongGuesses, lettersAlreadyUsed } = this.state
    const won = [...wordToGuess].every(i => lettersAlreadyUsed.includes(i))
    const lost = numberOfWrongGuesses >= 10

    return (
      <div className="pendu">
        <WordToGuess wordToGuess={wordToGuess} lettersAlreadyUsed={lettersAlreadyUsed} />
        {LETTERS.map(letter => (
            <LetterButton 
              letter={letter}
              onClick={this.handleLetterClick}
              alreadyClicked={lettersAlreadyUsed.includes(letter)}
              key={letter}
            />
          ))}
        <GuessCount numberOfWrongGuesses={numberOfWrongGuesses} />
        {won && <EndMessage text="won" onClick={this.resetGame}/>}
        {lost && <EndMessage text="lost" onClick={this.resetGame}/>}
      </div>
    )
  }
}

export default App;
