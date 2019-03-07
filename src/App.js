import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';

import Panel from './pages/panel';
import Login from './pages/login';
import Registration from './pages/registration';

import './App.css';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Panel} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/registration" component={Registration} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
