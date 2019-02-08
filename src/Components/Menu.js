import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as AuthenticationActions from '../Actions/AuthenticationActions';

class Menu extends Component {
  logoff = () => {
    localStorage.clear();
    this.props.logoff();
  }
  
  getAnonymousMenu = () => {
    return (
      <div className="collapse navbar-collapse" id="defaultNavbar">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
        </ul>
        <ul className="navbar-nav px-3">
            <li className="nav-item">
              <Link className="nav-link" to="/">Login</Link>
            </li>
        </ul>
      </div>
    );
  }

  getAuthenticatedMenu = () => {
    return (
      <div className="collapse navbar-collapse" id="defaultNavbar">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
        </ul>
        <ul className="navbar-nav px-3">
          <li className="nav-item">
            <Link className="nav-link" to="/">{ this.props.user.email }</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/" onClick={this.logoff}>Logoff</Link>
          </li>
        </ul>
      </div>
    );
  }

  render() {
    var menu = this.getAnonymousMenu();

    if(this.props.user)
      menu = this.getAuthenticatedMenu();

    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">

        <Link className="navbar-brand" to="/">React Login</Link >

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#defaultNavbar" aria-controls="defaultNavbar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        { menu }
        
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  user: state.AuthenticationReducer.user,
});

const mapDispatchToProps = dispatch => bindActionCreators(AuthenticationActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
