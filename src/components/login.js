import React from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Checkbox from 'material-ui/Checkbox';
import { FormControlLabel } from 'material-ui/Form';
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
    marginBottom: 12,
    width: "100%"
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
          <TextField id="email" label="Enter your email"  value={this.state.username} fullWidth={true}/><br/>
          <TextField id="password" label="Password" type="password" value={this.state.password} fullWidth={true} />

          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.checkedA}
                onChange={this.updateCheck.bind(this)}
                style={style.checkbox}
                value="checked"
              />
            }
            label="Keep me logged in"
          />

          <Button raised color="primary" style={style.submitButton} onClick={this.sendLogin.bind(this)}>
            Login
          </Button>
        </div>
        </form>
        <Link to="./register">Register</Link><span className='spacetest'> / </span>
        <Link to="./recover">Forget your password</Link>
        </div>
      );
   }
}

export default Login;
