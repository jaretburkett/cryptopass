import React, {Component} from 'react';
import {observer} from 'mobx-react'
import App from './App';

@observer
export default class Root extends Component {
    render() {
        return (
            <App store={this.props.store} />
        );
    }
}
