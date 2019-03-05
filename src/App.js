import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';

import Panel from './pages/Panel';
import Login from './pages/Login';

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
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
