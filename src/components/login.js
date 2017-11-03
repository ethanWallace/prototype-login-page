import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom';

import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';



class Login extends React.Component {
  state = {
      value: 1,
    };
  handleChange = (event, index, value) => this.setState({value});
   render() {
      return (
         <div>
         <MuiThemeProvider>

         <div>

             <TextField  floatingLabelText="Enter your email" /><br/>

             <TextField floatingLabelText="Password" />
         </div>

         <RaisedButton primary={true} label="Login"/><br/>
<Link to="./register">Register</Link><span ClassName='spacetest'> / </span>
<Link to="./recover">Forget your password</Link>

         </MuiThemeProvider>
         </div>
      );
   }
}

export default Login;
