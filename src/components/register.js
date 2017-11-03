import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import { Link } from 'react-router-dom';

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
    },
    textfield: {
      width: '100%'
    }
};

const organizationTextField = (
  <TextField style={style.textfield} floatingLabelText="Organization" />
)

const institutionDropDown = (
  <SelectField floatingLabelText="Institution" style={style.textfield}>
    <MenuItem value={'University'} primaryText="University" />
    <MenuItem value={'College'} primaryText="College" />
  </SelectField>
)

const provinceDropDown = (
  <SelectField floatingLabelText="Province/Territory" style={style.textfield}>
    <MenuItem value={'Ontario'} primaryText="Ontario" />
    <MenuItem value={'Quebec'} primaryText="Quebec" />
    <MenuItem value={'PEI'} primaryText="Prince Edward Island" />
  </SelectField>
)

const departmentDropDown = (
  <SelectField floatingLabelText="Department" style={style.textfield}>
    <MenuItem value={'TBS'} primaryText="Treasury Board of Canada" />
  </SelectField>
)

const extraFields = {
  1: [institutionDropDown],
  2: [institutionDropDown],
  3: [departmentDropDown],
  4: [provinceDropDown],
  5: [provinceDropDown],
  6: [organizationTextField],
  7: [organizationTextField],
  8: [organizationTextField],
  9: [organizationTextField],
  10: [organizationTextField],
  11: [departmentDropDown],
  12: [organizationTextField],
}


class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userType: 1
    }
  }

  handleChange = (event, index, value) => this.setState({userType: value});

   render() {
      return (
         <div>
         <MuiThemeProvider>

         <h1>Register</h1>
         <div>
             <SelectField
             floatingLabelText="Occupation"
             style={style.textfield}
             value={this.state.userType}
             onChange={this.handleChange}>
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

             {extraFields[this.state.userType]}

             <TextField style={style.textfield} floatingLabelText="Display Name" />

             <TextField style={style.textfield} floatingLabelText="Enter your email" />
             <TextField style={style.textfield} floatingLabelText="Confirm your email" />

             <TextField style={style.textfield} floatingLabelText="Password" />
             <TextField style={style.textfield} floatingLabelText="Confirm your password" />
         </div>

         <RaisedButton primary={true} fullWidth={true} label="Register" style={style.button} />

         <Link to="./login">Go back to sign in</Link>

         </MuiThemeProvider>
         </div>
      );
   }
}

export default Register;
