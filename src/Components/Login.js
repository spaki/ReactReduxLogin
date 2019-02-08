import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as AuthenticationActions from '../Actions/AuthenticationActions';

class Login extends Component {
  state = {
    email: '',
    password: ''
  };
  
  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.login(this.state);
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
      </form>
    );
  }
}

const mapStateToProps = state => ({
  user: state.AuthenticationReducer.user,
});

const mapDispatchToProps = dispatch => bindActionCreators(AuthenticationActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);