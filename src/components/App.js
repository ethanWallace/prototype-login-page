import React, { Component } from 'react';
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
import Login from './login';
import Recover from './recover';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
        
            
  <Switch>
           <Route exact path='/' render={() => <Redirect to='/login' />} />


            <Route exact path='/register' component={Register} />
<Route exact path='/login' component={Login} />
<Route exact path='/recover' component={Recover} />
          </Switch>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
