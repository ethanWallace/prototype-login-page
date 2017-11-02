import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Recover extends Component {
    render(){
        return(
            <div>
                <MuiThemeProvider>
                    <h1>Recover Your Password</h1>
                    <p>Enter your Email or Usersname and we will send you an email to recover your password</p>
                    <TextField 
                        floatingLabelText="Username of Email"
                    />
                    <RaisedButton label="Reover Password" fullWidth={true} />
                </MuiThemeProvider>
            </div>
        );
    }
}

export default Recover;