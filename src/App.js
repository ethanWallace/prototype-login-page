import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Recover from './components/recover.js';

const style = {
    paper: {
      minHeight: 400,
      width: 450,
      margin: 20,
      padding: 10,
      textAlign: 'left',
      display: 'inline-block',
    },
    button: {
        marginTop: 10,
    }
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
        
            
            <Paper style={style.paper} zDepth={2}>
            
        <div>
            <SelectField
              floatingLabelText="Occupation"
              onChange={this.handleChange}
            >
              <MenuItem value={1} primaryText="Academic" />
              <MenuItem value={2} primaryText="Student" />
              <MenuItem value={3} primaryText="Federal Government" />
              <MenuItem value={4} primaryText="Provincal/Territorial Government" />
              <MenuItem value={5} primaryText="Municipal Government" />
              <MenuItem value={6} primaryText="International/Foreign Government" />
              <MenuItem value={7} primaryText="Non-Government Organization" />
              <MenuItem value={8} primaryText="Community/Non-profit" />
              <MenuItem value={9} primaryText="Business" />
              <MenuItem value={10} primaryText="Media" />
              <MenuItem value={11} primaryText="Retired Public Servant" />
              <MenuItem value={12} primaryText="Other" />
            </SelectField>
            <TextField
              floatingLabelText="Enter your email"
            />
            <TextField
              floatingLabelText="Confirm your email"
            />
        
            <TextField
              floatingLabelText="Password"
            />
            <TextField
              floatingLabelText="Confirm your password"
            />
        </div>
            <RaisedButton labelColor='#fff' backgroundColor="#46246a" label="Register" style={style.button} />
            </Paper>
            <Paper>
              <Recover />
            </Paper>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
