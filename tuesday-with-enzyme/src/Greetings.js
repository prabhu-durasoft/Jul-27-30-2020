import React from 'react';

export class Greetings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            message: null
        };
    }

    nameChanged(e) {
        this.setState({name: e.target.value});
    }

    buttonClicked() {
        this.setState({
            message: `Hello ${this.state.name}`
        })
    }


    render() {
        return (<div>
            <input type="text" 
                onChange={this.nameChanged.bind(this)}></input>
            <br/>
            <button 
                onClick={this.buttonClicked.bind(this)}>Click</button>
            <h1>{this.state.message}</h1>
        </div>);
    }
}