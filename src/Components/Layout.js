import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import Menu from './Menu';
import Content from './Content';
import About from './About';
import Login from './Login';
import NotFound from './NotFound';

import * as AuthenticationActions from '../Actions/AuthenticationActions';

import * as AuthenticationHelper from '../AuthenticationHelper';
import * as Helper from '../Helper';

class Layout extends Component {
  constructor(props) {
    super(props);

    var user = AuthenticationHelper.getLocalUser();

    if(!Helper.isNullOrWhiteSpaceOrEmpty(user)) {
      AuthenticationHelper.setLocalUser(user);
      this.props.login(user);
    }
  }

  getAnonymousLayout = () => {
    return (
      <div>
        <Login />
      </div>
    );
  }

  getAuthenticatedLayout = () => {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Content} />
          <Route path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }

  render() {
    var layout = this.getAnonymousLayout();

    if(this.props.user) {
      layout = this.getAuthenticatedLayout();
    }

    return (
      <div>
        <Menu/>
        <main role="main" className="container">
          { layout }
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.AuthenticationReducer.user,
});

const mapDispatchToProps = dispatch => bindActionCreators(AuthenticationActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
