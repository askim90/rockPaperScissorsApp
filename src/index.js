import React from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx';

const ws = new WebSocket('ws://localhost:1337');

render(<App ws={ ws }/>, document.getElementById('main'));