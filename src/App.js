import React, { Component } from 'react';
import './App.css';

// Ressources found here: http://www.idees-gages.com/mots-jeu-pendu.php
// const POSSIBLE_WORDS = [
//   "BALLAST", 
//   "BRETZEL",
//   "DJEMBE",
//   "JOUXTER",
//   "RENEGAT",
//   "STROPHE",
//   'UKELELE',
//   "ZOZOTER",
//   "CITHARE", 
//   "QUETSCHE",
//   "PASTICHE",
//   "CAPELINE",
//   "PASTICHE",
//   "SYMPTOME",
//   "ZEPPELIN", 
//   "TOMAHAWK", 
//   "BALALAIKA", 
//   "ASEPTISER",
//   "KLAXONNER",
//   "PRINTEMPS",
//   "XYLOPHONE",
//   "QUEMANDER",
//   "FLIBUSTIER",
//   "APOCALYPSE",
//   "CONTROVERSE",
//   "LABYRINTHE",
//   "SOLILOQUER",
//   "COQUELICOT",
//   "ACROSTICHE",
//   "MAHARADJAH"
// ]

const POSSIBLE_WORDS = [
  "NEURONE",
  "CERVEAU",
  "NEUROTRANSMETTEUR",
  "DENDRITE",
  "SOMA",
  "AXONE",
  "RECEPTEUR",
  "VESICULE",
  "SYNAPSE",
  "IONS",
  "GLIE",
  "MICROGLIE",
  "PHAGOCYTOSE",
  "OLIGODENDROCYTE",
  "ASTROCYTE",
  "GLUCOSE",
  "LACTATE",
  "CRANE",
  "CERVELET"
]

const maximumOfWrongGuesses = 4

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

const GuessCount = ({ numberOfWrongGuesses }) => (
  <div className="guesses">Nombre d'essais restants: {maximumOfWrongGuesses - numberOfWrongGuesses}</div>
)

const LetterButton = ({ letter, alreadyClicked, onClick }) => (
  <div className={`letterButton ${alreadyClicked}`} onClick={() => onClick(letter)}>
    <span className="letter">
      {letter}
    </span>
  </div>
  )

const EndMessage = ({ text, onClick }) => (
  <div>
    <div className="resetButton" onClick={onClick}> Cliquez ici pour rejouer </div>
    <div className="endMessage">Vous avez {text} !</div>
  </div>
)

const ShowWordToGuess = ({ wordToGuess }) => (
  <div className="endMessage">
    Le mot à deviner était : {[...wordToGuess].map((letter, index) =>(<span key={index}>{letter}</span>))}.
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
    const lost = numberOfWrongGuesses >= maximumOfWrongGuesses

    return (
      <div className="pendu">
        <WordToGuess 
          wordToGuess={wordToGuess} 
          lettersAlreadyUsed={lettersAlreadyUsed} 
        />
        {LETTERS.map(letter => (
            <LetterButton 
              letter={letter}
              onClick={this.handleLetterClick}
              alreadyClicked={lettersAlreadyUsed.includes(letter)}
              key={letter}
            />
          ))}
        <GuessCount numberOfWrongGuesses={numberOfWrongGuesses} />
        {won && <EndMessage text="gagné" onClick={this.resetGame}/>}
        {lost && <EndMessage text="perdu" onClick={this.resetGame}/>}
        {lost && <ShowWordToGuess wordToGuess={wordToGuess}/>}
      </div>
    )
  }
}

export default App;
