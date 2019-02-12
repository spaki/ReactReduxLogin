import React, { Component } from 'react';

class NotFound extends Component {
  render() {
    return (
      <div>
        <h1>404</h1>
        <h2>No match found for <code>{window.location.pathname}</code></h2>
      </div>
    );
  }
}

export default NotFound;
