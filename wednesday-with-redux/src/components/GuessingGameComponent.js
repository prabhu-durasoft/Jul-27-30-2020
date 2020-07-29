import React from 'react';

export class GuessingGameComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            guess: 0
        }
    }
    guessChanged(e) {
        this.setState({guess: e.target.value});
    }
    guessButtonClicked() {
        this.props.play(this.state.guess);
    }
    render() {
        const {message, attempts} = this.props;
        return (<div>
            <input type="text" placeholder="Enter your guess" onChange={this.guessChanged.bind(this)}></input>
            <br/>
            <button onClick={this.guessButtonClicked.bind(this)}>Guess</button>
            <h1 data-test="message">{message == null ? '' : message }</h1>
            <h1 data-test="attempts">Attempts: {attempts}</h1>
        </div>);
    }
}