import React from 'react'
import './App.css';
import {Route, Switch} from 'react-router-dom';

import Home from './pages/Home';
import SignInPage from './pages/SignInPage';


function App() {
    return (
        <Switch>
            <Route path='/' component={Home} exact/>
            <Route path='/signin' component={SignInPage} exact/>
            <Home/>
        </Switch>
    );
}

export default App;
