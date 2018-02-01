import React, { Component } from 'react';
import { inject } from 'mobx-react';

@inject('theme')
export default class App extends Component {
  render() {
    return (
      <div>Ping</div>
    )
  }
}
