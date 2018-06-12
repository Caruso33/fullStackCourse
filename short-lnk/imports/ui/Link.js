import React from 'react';
import {BrowserHistory} from 'react-router-dom';

export default class Link extends React.Component{
  clickLogout () {
    BrowserHistory.push('/')
  }
  render(){
    return (
      <div>
        <h1>Your Links</h1>
        <button onClick={this.clickLogout.bind(this)}></button>
      </div>
    )
  }
}
