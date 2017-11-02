import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

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
    }

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
            <div>
                    <h1>Recover Your Password</h1>
                    {!this.state.emailSent &&
                    <div>
                        <p>Enter your Email or Usersname and we will send you an email to recover your password</p>
                        <form onSubmit={this.sendRecoveryEmail}>
                        <TextField 
                            floatingLabelText="Username of Email"
                            value = {this.state.value}
                        />
                        <RaisedButton 
                            label="Recover Password" 
                            fullWidth={true} 
                            containerElement="label"
                        >
                            <input type="submit" style={style.submitInput} />
                        </RaisedButton>
                        </form>
                    </div>}
                    {this.state.emailSent &&
                    <div>
                        <p>The email has been sent!</p>
                    </div>}
            </div>
        );
    }
}

export default Recover;