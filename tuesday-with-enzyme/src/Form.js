import React from 'react';

export class Form extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
            <h1>{this.props.name}</h1>
        </div>);
    }

}