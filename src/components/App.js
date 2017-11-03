import React, { Component } from 'react';
import '../App.css';

import CanadaBanner from '../img/govt-of-canada-logo.png';

import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';

import { withRouter } from 'react-router';
import { Switch, Route, Redirect } from 'react-router-dom';
import Register from './register';

import Login from './login';
import Recover from './recover';

const style = {
    paper: {
      height: 'auto',
      width: 450,
      margin: 20,
      padding: 15,
      textAlign: 'left',
      display: 'inline-block',
    },
    button: {
        marginTop: 10,
    },
    textfield: {
      width: '100%'
    }
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>

        <Paper style={style.paper} zDepth={2}>
         <img src={CanadaBanner} alt="Government of Canada" />
        <Switch>
           <Route exact path='/' render={() => <Redirect to='/login' />} />


            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/recover' component={Recover} />

          </Switch>
          </Paper>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
