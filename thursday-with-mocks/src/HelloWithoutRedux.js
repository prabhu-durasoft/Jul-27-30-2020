import React from 'react';
import axios from 'axios';

export class HelloWithoutRedux extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ''
        }
    }
    componentDidMount() {
        axios
            .get('/intuit.txt')
            .then(response => this.setState({data: response.data}))
            .catch(error => this.setState({data: error.message}));
    }

    render() {
        return (<div>
            <h1>{this.state.data}</h1>
        </div>);
    }
}