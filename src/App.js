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
  guesses: 0,
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

const GuessCount = ({ guesses }) => (
  <div className="guesses">Number of guesses: {guesses}</div>
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
        guesses: this.state.guesses + 1,
        lettersAlreadyUsed: [...this.state.lettersAlreadyUsed, letter],
      }))
  }

  resetGame = () => {
    this.setState({
      ...DEFAULT_STATE,
      wordToGuess: this.generateWordToGuess(),
    })
  }

  render() {
    const { wordToGuess, guesses, lettersAlreadyUsed } = this.state
    const won = [...wordToGuess].every(i => lettersAlreadyUsed.includes(i))

    return (
      <div className="pendu">
        <WordToGuess wordToGuess={wordToGuess} lettersAlreadyUsed={lettersAlreadyUsed} />
        {won ? 
        <div>gagné!</div> : 
        <div>perdu</div>}
        {LETTERS.map(letter => (
            <LetterButton 
              letter={letter}
              onClick={this.handleLetterClick}
              alreadyClicked={lettersAlreadyUsed.includes(letter)}
              key={letter}
            />
          ))}
          <GuessCount guesses={guesses} />
      </div>
    )
  }
}

export default App;
