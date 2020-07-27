import React from 'react';
import { Message } from './Message';

export class Header extends React.Component {
    render() {
        return (<div>
            <h1>Welcome to React Testing</h1>
            <Message/>
        </div>);
    }
}