import React from 'react';
import {GuessingGame} from './GuessingGame';

export class GuessingGameComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            game: new GuessingGame(),
            guess: 0
        }
    }
    guessChanged(e) {
        this.setState({guess: e.target.value});
    }
    guessButtonClicked() {
        const {game, guess} = this.state;
        game.play(guess);
        //Asynchronously
        this.setState({game});
    }
    render() {
        const {message, attempts} = this.state.game;
        return (<div>
            <input type="text" placeholder="Enter yourr guess" onChange={this.guessChanged.bind(this)}></input>
            <br/>
            <button onClick={this.guessButtonClicked.bind(this)}>Guess</button>
            <h1 data-test="message">{message == null ? '' : message }</h1>
            <h1 data-test="attempts">Attempts: {attempts}</h1>
        </div>);
    }
}