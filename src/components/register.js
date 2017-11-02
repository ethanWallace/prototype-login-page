import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

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

class Register extends React.Component {
  state = {
      value: 1,
    };
  handleChange = (event, index, value) => this.setState({value});
   render() {
      return (
         <div>
         <MuiThemeProvider>

         <div>
             <SelectField
             floatingLabelText="Occupation"
             value={this.state.value}
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

             <TextField floatingLabelText="Display Name" />

             <TextField  floatingLabelText="Enter your email" />
             <TextField floatingLabelText="Confirm your email" />

             <TextField floatingLabelText="Password" />
             <TextField  floatingLabelText="Confirm your password" />
         </div>

         <RaisedButton primary={true} label="Register" style={style.button} />

         </MuiThemeProvider>
         </div>
      );
   }
}

export default Register;
