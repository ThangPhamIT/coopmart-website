import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { userLoggedIn } from './actions/authenticate';
import App from './App';
import * as serviceWorker from './serviceWorker';

import store from './store/store';

import 'semantic-ui-css/semantic.min.css';
import 'font-awesome/css/font-awesome.css';
import './App.css';

if (localStorage.bookwormJWT) {
    const user = { 
        token: localStorage.bookwormJWT, 
        username: localStorage.bookwormUser, 
        submitTest: localStorage.bookwormTest,
        department: localStorage.department 
    };
    store.dispatch(userLoggedIn(user));
}

ReactDOM.render(<BrowserRouter>
        <Provider store={store}>
            <Route component={App}/>
        </Provider>
    </BrowserRouter>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
