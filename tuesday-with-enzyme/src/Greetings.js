import React from 'react';

export class Greetings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            message: null,
            message2: null
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

    secondButtonClicked() {
        this.setState({
            message2: `Hi ${this.state.name}`
        })
    }


    render() {
        return (<div>
            <input type="text" data-test="name"
                onChange={this.nameChanged.bind(this)}></input>
            <br/>
            <button className="cls1" id="firstbutton" data-test="button1"
                onClick={this.buttonClicked.bind(this)}>Click</button>
            <h1 data-test="header1" id="firstheader">{this.state.message}</h1>
            <button id="secondbutton" data-test="button2"
                onClick={this.secondButtonClicked.bind(this)}>Click</button>
            <h1 data-test="header2" id="secondheader">{this.state.message2}</h1>
        </div>);
    }
}