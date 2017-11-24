import React from 'react';

import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';
import { Link } from 'react-router-dom';

const style = {
    loginHolder:{
      margin: 20
    },
    button: {
        marginTop: 10,
    },
    textfield: {
      width: '100%',
      marginBottom: 10
    },
    formControl: {
      width: '100%'
    },
    link: {
      marginTop: '10px',
      display: 'block'
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
         <div style={style.loginHolder}>
            <h1>Register</h1>
             <form>
               <FormControl style={style.formControl}>
                 <OccupationDropdown/>

                 <TextField fullWidth={true} id="name" label="Name" style={style.textfield} helperText="Please enter your first and last name, as you are known in the workplace/school. As per the Terms and Conditions, your display name must reflect your real name. Pseudonyms are not allowed."/>

                 <TextField fullWidth={true} id="email" label="Enter your email" style={style.textfield}  />
                 <TextField fullWidth={true} id="confirm-email" label="Confirm your email" style={style.textfield} />

                 <TextField fullWidth={true} id="password" label="Password" style={style.textfield} />
                 <TextField fullWidth={true} id="confirm-password" label="Confirm your password" style={style.textfield} />

                <Button raised color="primary" style={style.button}>
                  Register
                </Button>
              </FormControl>
            </form>
            <Link style={style.link} to="./login">Go back to sign in</Link>
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
  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };
  render() {

    const organizationTextField = (
      <TextField id="organization" label="Organization" style={style.textfield} />
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
      <FormControl style={style.formControl}>
        <InputLabel htmlFor="occupation">Occupation</InputLabel>
        <Select
          style={style.textfield}
          value={this.state.userType}
          onChange={this.handleChange('userType')}
          input={<Input id="occupation" />}>
            <MenuItem value={1} >Academic </MenuItem>
            <MenuItem value={2} >Student</MenuItem>
            <MenuItem value={3} >Federal Government</MenuItem>
            <MenuItem value={4} >Provincal/Territorial Government</MenuItem>
            <MenuItem value={5} >Municipal Government</MenuItem>
            <MenuItem value={6} >International/Foreign Government</MenuItem>
            <MenuItem value={7} >Non-Government Organization</MenuItem>
            <MenuItem value={8} >Community/Non-profit</MenuItem>
            <MenuItem value={9} >Business</MenuItem>
            <MenuItem value={10} >Media</MenuItem>
            <MenuItem value={11} >Retired Public Servant</MenuItem>
            <MenuItem value={12} >Other</MenuItem>
        </Select>
      </FormControl>
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
  handleChange = name => event => {
    this.setState({ [name]: event.target.value, institution: '-' });
  };
  selectSchool = name => event => {
    this.setState({ [name]: event.target.value });
  };
  render() {
    return (
      <div>
      <FormControl style={style.formControl}>
        <InputLabel htmlFor="institution">Institution</InputLabel>
        <Select
          input={<Input id="institution" />}
          value={this.state.institutionType}
          onChange={this.handleChange('institutionType')}
          style={style.textfield}>
          <MenuItem value={'---'} >Please select one</MenuItem>
          <MenuItem value={'University'} >University</MenuItem>
          <MenuItem value={'College'} >College</MenuItem>
          <MenuItem value={'High School'} >High School</MenuItem>
        </Select>
      </FormControl>
      {(() => {
       switch (this.state.institutionType) {
         case "University":   return (
           <FormControl style={style.formControl}>
             <InputLabel htmlFor="university">University</InputLabel>
             <Select value={this.state.institution} onChange={this.selectSchool('institution')} style={style.textfield} input={<Input id="university" />}>
               <MenuItem value={'-'} >Please make a selection</MenuItem>
               <MenuItem value={'University of Ottawa'} >University of Ottawa</MenuItem>
             </Select>
           </FormControl>
         );
         case "College": return (
           <FormControl style={style.formControl}>
           <InputLabel htmlFor="college">College</InputLabel>
           <Select value={this.state.institution} onChange={this.selectSchool('institution')} style={style.textfield} input={<Input id="college" />}>
             <MenuItem value={'-'} >Please make a selection</MenuItem>
             <MenuItem value={'Algonquin College'} >Algonquin College</MenuItem>
           </Select>
           </FormControl>
         );
         case "High School":  return (
           <TextField id="highschool" label="High School" style={style.textfield}/>
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
  update = name => event => {
    this.setState({ [name]: event.target.value });
  };
  componentWillMount(){
    //fetch( 'http://swapi.co/api/people/?format=json' ).then( response => response.json() ).then( ({results: items}) => {this.setState({universities})} )     will eventually get the selected list for people
  }
  render(){
    return(
      <FormControl style={style.formControl}>
        <InputLabel htmlFor="department">Department</InputLabel>
        <Select value={this.state.department} onChange={this.update('department')} style={style.textfield} input={<Input id="department" />}>
          <MenuItem value={'-'} >Please make a selection</MenuItem>
          <MenuItem value={'TBS'} >Treasury Board of Canada Secretariat</MenuItem>
        </Select>
      </FormControl>
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
  selectProvince = name => event => {
    this.setState({ [name]: event.target.value, ministry: '-' });
  };
  selectMinistry = name => event => {
    this.setState({ [name]: event.target.value });
  };
  componentWillMount(){
    //will have to read province and get the ministry
    fetch( 'https://swapi.co/api/starships/' ).then( response => response.json() ).then( ({results: items}) => {this.setState({ministries: items})} )
  }
  render(){
    let items = this.state.ministries
    return(
      <FormControl style={style.formControl}>
        <InputLabel htmlFor="provincial">Province/Territory</InputLabel>
        <Select value={this.state.province} onChange={this.selectProvince('province')} style={style.textfield} input={<Input id="provincial" />}>
          <MenuItem value={'--'} >Please make a selection</MenuItem>
          <MenuItem value={'AB'} >Alberta</MenuItem>
          <MenuItem value={'BC'} >British Columbia</MenuItem>
          <MenuItem value={'MB'} >Manitoba</MenuItem>
          <MenuItem value={'NB'} >New Brunswick</MenuItem>
          <MenuItem value={'NL'} >Newfoundland and Labrador</MenuItem>
          <MenuItem value={'NS'} >Northwest Territories</MenuItem>
          <MenuItem value={'NT'} >Nova Scotia</MenuItem>
          <MenuItem value={'NU'} >Nunavut</MenuItem>
          <MenuItem value={'ON'} >Ontario</MenuItem>
          <MenuItem value={'PE'} >Prince Edward Island</MenuItem>
          <MenuItem value={'QC'} >Quebec</MenuItem>
          <MenuItem value={'SK'} >Saskatchewan</MenuItem>
          <MenuItem value={'YT'} >Yukon</MenuItem>>
        </Select>

        {this.state.province !== '--' &&
        <FormControl style={style.formControl}>
          <InputLabel htmlFor="ministry">Ministry</InputLabel>
          <Select value={this.state.ministry} onChange={this.selectMinistry('ministry')} style={style.textfield} input={<Input id="ministry" />}>
            <MenuItem value={'-'} >Please make a selection</MenuItem>
            {items.map(item =>
              <MenuItem value={item.name}>{item.name}</MenuItem>
            )}
          </Select>
        </FormControl>
        }
      </FormControl>
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
  selectProvince = name => event => {
    this.setState({ [name]: event.target.value });
  };
  render(){
    return(
      <FormControl style={style.formControl}>
        <InputLabel htmlFor="municipal">Municipal</InputLabel>
        <Select value={this.state.province} onChange={this.selectProvince('province')} style={style.textfield} input={<Input id="municipal" />}>
        <MenuItem value={'--'} >Please make a selection</MenuItem>
        <MenuItem value={'AB'} >Alberta</MenuItem>
        <MenuItem value={'BC'} >British Columbia</MenuItem>
        <MenuItem value={'MB'} >Manitoba</MenuItem>
        <MenuItem value={'NB'} >New Brunswick</MenuItem>
        <MenuItem value={'NL'} >Newfoundland and Labrador</MenuItem>
        <MenuItem value={'NS'} >Northwest Territories</MenuItem>
        <MenuItem value={'NT'} >Nova Scotia</MenuItem>
        <MenuItem value={'NU'} >Nunavut</MenuItem>
        <MenuItem value={'ON'} >Ontario</MenuItem>
        <MenuItem value={'PE'} >Prince Edward Island</MenuItem>
        <MenuItem value={'QC'} >Quebec</MenuItem>
        <MenuItem value={'SK'} >Saskatchewan</MenuItem>
        <MenuItem value={'YT'} >Yukon</MenuItem>>
        </Select>

        {this.state.province !== '--' &&
          <TextField id="city" label="City" style={style.textfield} />
        }
      </FormControl>
    )
  }
}

export default Register;
