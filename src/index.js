import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/store';

import {BrowserRouter}  from 'react-router-dom' ;
import {Provider} from 'react-redux';


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter >
            <App />
        </BrowserRouter>
    </Provider>
, document.getElementById('root'));

//provider is the parent of every thing in it 
//and can access the every thing realted to store and everything hat we want to store in react-redux