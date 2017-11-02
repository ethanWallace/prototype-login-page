import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import { withRouter } from 'react-router';
import { Switch, Route, Redirect } from 'react-router-dom';
import Register from './register';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
        
            
  <Switch>
           <Route exact path='/' render={() => <Redirect to='/register' />} />
: <Route exact path='/' render={() => <Redirect to='/register' />} />

            <Route exact path='/register' component={Register} />
          </Switch>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
