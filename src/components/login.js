import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import { Link } from 'react-router-dom';

const style = {
  submitInput:{
      cursor: 'pointer',
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      width: '100%',
      opacity: 0,
  },
  loginHolder:{
    margin: 20
  },
  checkbox:{
    marginTop: 12,
    marginBottom: 12
  },
  submitButton:{
    marginBottom: 12
  }
}

class Login extends React.Component {
  state = {
      value: 1,
      username: '',
      password: '',
      checked: true
    };

    updateCheck() {
      this.setState((oldState) => {
        return {
          checked: !oldState.checked,
        };
      });
    }
    handleChange = (event, index, value) => this.setState({value});
    sendLogin(event){
        //Handle the event here
        event.preventDefault();
        console.log('login');
    }

   render() {
      return (
        <div style={style.loginHolder}>
        <h1>GCTools Sign In</h1>
        <form onSubmit={this.sendLogin}>
        <div>
          <TextField  floatingLabelText="Enter your email"  value={this.state.username} fullWidth={true}/><br/>
          <TextField floatingLabelText="Password" type="password" value={this.state.password} fullWidth={true} />
          <Checkbox
            label="Keep me logged in"
            checked={this.state.checked}
            onCheck={this.updateCheck.bind(this)}
            style={style.checkbox}
          />
          <RaisedButton 
            primary={true} 
            label="Login"
            containerElement="label"
            fullWidth={true}
            style={style.submitButton}
            onClick={this.sendLogin.bind(this)}
          >
            
          </RaisedButton>
        </div>
        </form>
        <Link to="./register">Register</Link><span className='spacetest'> / </span>
        <Link to="./recover">Forget your password</Link> 
        </div>
      );
   }
}

export default Login;
