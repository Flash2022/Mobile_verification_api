import React, { Component } from 'react';
import firebaseConfig from './firebaseConfig';
import * as firebaseui from 'firebaseui';
import firebase from 'firebase';
import 'firebaseui/dist/firebaseui.css';


class App extends Component {
  componentDidMount() {
    firebase.initializeApp(firebaseConfig);
    const uiConfig = {
      signInOptions: [{
        provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
        recaptchaParameters: {
          type: 'image',
          size: 'normal',
          badge: 'bottomleft'
        },
        defaultCountry: 'IN'
      }],
      callbacks: {
        signInSuccessWithAuthResult: function (authResult, redirectUrl) {
          alert('Number-verified-Successfully');
          return true;
        }
      },
      signInSuccessUrl: "https://www.google.com/"
    };

    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start("#firebaseui-auth-container", uiConfig);
  };
  render() {
    return (
      <div id="firebaseui-auth-container">
        
      </div>
    )
  }
}

export default App;