import React, { Component } from 'react';
import '../App.css';

import CanadaBanner from '../img/govt-of-canada-logo.png';

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import purple from 'material-ui/colors/purple';
import Paper from 'material-ui/Paper';

import { Switch, Route, Redirect } from 'react-router-dom';
import Register from './register';

import Login from './login';
import Recover from './recover';

const style = {
    paper: {
      height: 'auto',
      width: 400,
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

const theme = createMuiTheme({
  palette: {
    primary: purple,
  },
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>

        <Paper style={style.paper} elevation={2}>
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
