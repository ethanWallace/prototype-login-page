import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
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
    submitButton:{
      marginBottom: 12,
      width: "100%"
    },
    textfield: {
      marginBottom: 10
    },
    loginHolder:{
      margin: 20
    },

}

class Recover extends Component {
    constructor(props){
        super(props);
        this.state = {
            emailSent:null,
            value:''
        };
        this.sendRecoveryEmail = this.sendRecoveryEmail.bind(this);
    }

    sendRecoveryEmail(event){
        //Handle the event here
        event.preventDefault();
        this.setState({
            emailSent:true
        });

    }
    render(){
        return(
            <div style={style.loginHolder}>
                    <h1>Recover Your Password</h1>
                    {!this.state.emailSent &&
                    <div>
                        <p>Enter your Email or Usersname and we will send you an email to recover your password</p>
                        <form onSubmit={this.sendRecoveryEmail}>
                        <TextField
                            id="email"
                            label="Username or Email"
                            value = {this.state.value}
                            fullWidth={true}
                            style={style.textfield}
                        />

                        <Button raised color="primary" style={style.submitButton}>
                          Recover Password
                        </Button>
                        </form>
                    </div>}
                    {this.state.emailSent &&
                    <div>
                        <p>The email has been sent!</p>
                    </div>}
                    <Link style={style.link} to="./login">Go back to sign in</Link>
            </div>
        );
    }
}

export default Recover;
