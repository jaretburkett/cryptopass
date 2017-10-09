import React from 'react';
import ReactDOM from 'react-dom';
import Root from '../../app/containers/Root';
import './todoapp.css';

chrome.storage.local.get('state', (obj) => {
    const {state} = obj;
    const initialState = JSON.parse(state || '{}');

    const store = require('../../app/store');

    // add historical store
    for(let key in initialState){
        store[key] = initialState[key];
    }

    ReactDOM.render(
        <Root store={store}/>,
        document.querySelector('#root')
    );
});
