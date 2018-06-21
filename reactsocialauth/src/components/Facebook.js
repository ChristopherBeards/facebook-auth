import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

export default class Facebook extends Component {
  state = {
    isLoggedIn: false,
    userID: '',
    name: '',
    email: '',
    picture: ''
  }

  responseFacebook = res => {
    console.log(res);
  }

  componentClicked = () => {
    console.log('Clicked!');
  }

  render() {
    let fbContent;

    if (this.state.isLoggedIn) {
      fbContent = null;
    } else {
      fbContent = (
      <FacebookLogin
        appId="215752209042025"
        autoLoad={true}
        fields="name,email,picture"
        onClick={this.componentClicked}
        callback={this.responseFacebook} 
        />
      );
    }
    return (
      <div>
        {fbContent}
      </div>
    )
  }
}
