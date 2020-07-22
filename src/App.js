import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    textInput: ''
  };

  outputLengthCharactersHandler = (event) => {
    this.setState({
      textInput: event.target.value
    })
  };

  removeCharacterHandler = (index) => {
    const characterArray = this.state.textInput.split('')
    characterArray.splice(index, 1);
    console.log(characterArray);
    this.setState({ textInput: characterArray.join('') });
  }

  render() {
    const characters = (
      <div>
        {this.state.textInput.split('').map((char, index) => {
          return (<CharComponent
            char={char}
            key={index}
            click={() => { this.removeCharacterHandler(index) }}
          />);
        })}
      </div>);
      
    return (
      <div className="App">
        <input onChange={this.outputLengthCharactersHandler} value={this.state.textInput} />
        <p>{this.state.textInput.length}</p>
        <ValidationComponent length={this.state.textInput.length} />
        {characters}
      </div>
    );
  }
}

export default App;
