import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './main/ui/App';
import * as serviceWorker from './main/service/serviceWorker';
import { Provider } from 'react-redux';
import store from './main/ui/store';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();