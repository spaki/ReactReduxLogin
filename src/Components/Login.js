import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as AuthenticationActions from '../Actions/AuthenticationActions';
import * as Client from '../ApiClient';
import * as Helper from '../Helper';
import * as AuthenticationHelper from '../AuthenticationHelper';

class Login extends Component {
  state = {
    email: '',
    password: '',
    error: null
  };
  
  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  
  handleSubmit = (event) => {
    event.preventDefault();

    Client
      .Post("User/login", this.state)
      .then(response => { 
        this.login(response);
      })
      .catch(error => { 
        this.setState({ error: "invalid login" });
        console.log(error);
      });
  }

  login = (user) => {
    AuthenticationHelper.setLocalUser(user);
    this.props.login(user);
  }

  getLoginError = () => {
    if(!Helper.isNullOrWhiteSpaceOrEmpty(this.state.error))
      return(
        <div>
          <br />
          <div className="form-group alert alert-danger" role="alert">
            { this.state.error }
          </div>
        </div>
      );

    return null;
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <div className="form-group">
          <label>Email address</label>
          <input type="email" name="email" value={ this.state.email } onChange={ this.handleInputChange } className="form-control" placeholder="Enter email" required></input>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" value={ this.state.password } onChange={ this.handleInputChange } className="form-control" placeholder="Password" required></input>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        { this.getLoginError() }
      </form>
    );
  }
}

const mapStateToProps = state => ({
  user: state.AuthenticationReducer.user,
});

const mapDispatchToProps = dispatch => bindActionCreators(AuthenticationActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);