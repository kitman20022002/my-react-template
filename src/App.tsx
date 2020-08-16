import React from 'react';

import './App.scss';
import Home from "./pages/Home/Home";
import Title from "./pages/Title/Title";
import {Route, Switch, BrowserRouter} from 'react-router-dom';

function App() {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/titles/:title" component={Title}/>
                </Switch>
            </BrowserRouter>
        </React.Fragment>
    );
}

export default App;
