import React from 'react';
import {GuessingGame} from './GuessingGame';

export class GuessingGameComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            game: new GuessingGame()
        }
    }
    render() {
        return (<div></div>);
    }
}