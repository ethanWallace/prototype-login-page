import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
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

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      userType: 1
    }
  }
   render() {
      return (
         <div>
         <MuiThemeProvider>
         <div>
            <h1>Register</h1>

             <OccupationDropdown/>

             <TextField style={style.textfield} floatingLabelText="Display Name" />

             <TextField style={style.textfield} floatingLabelText="Enter your email" />
             <TextField style={style.textfield} floatingLabelText="Confirm your email" />

             <TextField style={style.textfield} floatingLabelText="Password" />
             <TextField style={style.textfield} floatingLabelText="Confirm your password" />


            <RaisedButton primary={true} fullWidth={true} label="Register" style={style.button} />

            <Link to="./login">Go back to sign in</Link>
         </div>
         </MuiThemeProvider>
         </div>
      );
   }
}

class OccupationDropdown extends React.Component {
  constructor(){
    super();
    this.state = {
      userType: 1,
    }
  }
  handleChange = (event, index, value) => this.setState({userType: value});
  render() {

    const organizationTextField = (
      <TextField style={style.textfield} floatingLabelText="Organization" />
    )

    const extraFields = {
      1: [<InstitutionDropDown/>],
      2: [<InstitutionDropDown/>],
      3: [<DepartmentDropDown/>],
      4: [<ProvincialDropDown/>],
      5: [<MunicipalDropDown/>],
      6: [organizationTextField],
      7: [organizationTextField],
      8: [organizationTextField],
      9: [organizationTextField],
      10: [organizationTextField],
      11: [<DepartmentDropDown/>],
      12: [organizationTextField]
    }

    return (
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
      </div>
    )
  }
}

class InstitutionDropDown extends React.Component {
  constructor(){
    super();
    this.state = {
      institutionType: '---',
      institution: '-',
      universities: [],
      colleges: []
    }
  }
  componentWillMount(){
      //fetch( 'http://swapi.co/api/people/?format=json' ).then( response => response.json() ).then( ({results: items}) => {this.setState({universities})} )     will eventually get the selected list for people
      //fetch( 'http://swapi.co/api/people/?format=json' ).then( response => response.json() ).then( ({results: items}) => {this.setState({colleges})} )
  }
  handleChange = (event, index, value) => this.setState({institutionType: value, institution: '-'});
  selectSchool = (event, index, value) => this.setState({institution: value});
  render() {
    return (
      <div>
      <SelectField floatingLabelText="Institution" value={this.state.institutionType} onChange={this.handleChange} style={style.textfield}>
        <MenuItem value={'---'} primaryText="Please select one" />
        <MenuItem value={'University'} primaryText="University" />
        <MenuItem value={'College'} primaryText="College" />
        <MenuItem value={'High School'} primaryText="High School" />
      </SelectField>

      {(() => {
       switch (this.state.institutionType) {
         case "University":   return (
           <SelectField floatingLabelText="University" value={this.state.institution} onChange={this.selectSchool} style={style.textfield}>
             <MenuItem value={'-'} primaryText="Please make a selection" />
             <MenuItem value={'University of Ottawa'} primaryText="University of Ottawa" />
           </SelectField>
         );
         case "College": return (
           <SelectField floatingLabelText="College" value={this.state.institution} onChange={this.selectSchool} style={style.textfield}>
             <MenuItem value={'-'} primaryText="Please make a selection" />
             <MenuItem value={'Algonquin College'} primaryText="Algonquin College" />
           </SelectField>
         );
         case "High School":  return (
           <TextField style={style.textfield} floatingLabelText="High School" />
         );
         default:      return;
       }
     })()}
      </div>
    );
  }
}

class DepartmentDropDown extends React.Component {
  constructor(){
    super();
    this.state = {department: '-'}
  }
  update = (event, index, value) => this.setState({department: value});
  componentWillMount(){
    //fetch( 'http://swapi.co/api/people/?format=json' ).then( response => response.json() ).then( ({results: items}) => {this.setState({universities})} )     will eventually get the selected list for people
  }
  render(){
    return(
      <div>
        <SelectField floatingLabelText="Department" value={this.state.department} onChange={this.update} style={style.textfield}>
          <MenuItem value={'-'} primaryText="Please make a selection" />
          <MenuItem value={'TBS'} primaryText="Treasury Board of Canada Secretariat" />
        </SelectField>
      </div>
    )
  }
}

class ProvincialDropDown extends React.Component {
  constructor(){
    super();
    this.state = {
      province: '--',
      ministry: '-',
      ministries: []
    }
  }
  selectProvince = (event, index, value) => this.setState({province: value, ministry: '-'})
  selectMinistry = (event, index, value) => this.setState({ministry: value})
  componentWillMount(){
    //will have to read province and get the ministry
    fetch( 'https://swapi.co/api/starships/' ).then( response => response.json() ).then( ({results: items}) => {this.setState({ministries: items})} )
  }
  render(){
    let items = this.state.ministries
    console.log(items);
    console.log(this.state.province);
    return(
      <div>
        <SelectField floatingLabelText="Province/Territory" value={this.state.province} onChange={this.selectProvince} style={style.textfield}>
          <MenuItem value={'--'} primaryText="Please make a selection" />
          <MenuItem value={'AB'} primaryText="Alberta" />
          <MenuItem value={'BC'} primaryText="British Columbia" />
          <MenuItem value={'MB'} primaryText="Manitoba" />
          <MenuItem value={'NB'} primaryText="New Brunswick" />
          <MenuItem value={'NL'} primaryText="Newfoundland and Labrador" />
          <MenuItem value={'NS'} primaryText="Northwest Territories" />
          <MenuItem value={'NT'} primaryText="Nova Scotia" />
          <MenuItem value={'NU'} primaryText="Nunavut" />
          <MenuItem value={'ON'} primaryText="Ontario" />
          <MenuItem value={'PE'} primaryText="Prince Edward Island" />
          <MenuItem value={'QC'} primaryText="Quebec" />
          <MenuItem value={'SK'} primaryText="Saskatchewan" />
          <MenuItem value={'YT'} primaryText="Yukon" />
        </SelectField>

        {this.state.province != '--' &&
        <SelectField floatingLabelText="Ministry" value={this.state.ministry} onChange={this.selectMinistry} style={style.textfield}>
          <MenuItem value={'-'} primaryText="Please make a selection" />
          {items.map(item =>
            <MenuItem value={item.name} primaryText={item.name} />)} //will change to etter thign later
        </SelectField>
        }
      </div>
    )
  }
}

class MunicipalDropDown extends React.Component {
  constructor(){
    super();
    this.state = {
      province: '--'
    }
  }
  selectProvince = (event, index, value) => this.setState({province: value});
  render(){
    return(
      <div>
        <SelectField floatingLabelText="Province/Territory" value={this.state.province} onChange={this.selectProvince} style={style.textfield}>
          <MenuItem value={'--'} primaryText="Please make a selection" />
          <MenuItem value={'AB'} primaryText="Alberta" />
          <MenuItem value={'BC'} primaryText="British Columbia" />
          <MenuItem value={'MB'} primaryText="Manitoba" />
          <MenuItem value={'NB'} primaryText="New Brunswick" />
          <MenuItem value={'NL'} primaryText="Newfoundland and Labrador" />
          <MenuItem value={'NS'} primaryText="Northwest Territories" />
          <MenuItem value={'NT'} primaryText="Nova Scotia" />
          <MenuItem value={'NU'} primaryText="Nunavut" />
          <MenuItem value={'ON'} primaryText="Ontario" />
          <MenuItem value={'PE'} primaryText="Prince Edward Island" />
          <MenuItem value={'QC'} primaryText="Quebec" />
          <MenuItem value={'SK'} primaryText="Saskatchewan" />
          <MenuItem value={'YT'} primaryText="Yukon" />
        </SelectField>

        {this.state.province != '--' &&
          <TextField style={style.textfield} floatingLabelText="City" />
        }
      </div>
    )
  }
}

export default Register;



/*
{this.state.institutionType != '---' &&
  <p>red</p>
}
const organizationTextField = (
  <TextField style={style.textfield} floatingLabelText="Organization" />
)

const InstitutionDropDown = (props) =>
  <SelectField floatingLabelText="Institution" style={style.textfield}>
    <MenuItem value={'University'} primaryText="University" />
    <MenuItem value={'College'} primaryText="College" />
  </SelectField>


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

*/
