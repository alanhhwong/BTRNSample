/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

class BTRNSample extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

/*
Setup BTClient with client token.  The one provided below is just for DEMO purposes.  You need to have 
completed the simple server side integration to generate and serve your own client token.  The guide below 
thoroughly details what you need to do:
https://developers.braintreepayments.com/start/hello-server/node (select your preferred server language) 
*/

var BTClient = require('react-native-braintree');
fetch('http://localhost:3000/get_token', {method: "GET"})
.then((response) => response.json())
.then((responseData) => {
  var clientToken = responseData.clientToken;
  BTClient.setup(clientToken);

  BTClient.showPaymentViewController(function(err, nonce) {
    //callback after the user completes (or cancels) the flow.
    //with the nonce, you can now pass it to your server to create a charge against the user's payment method
    fetch('http://localhost:3000/pay', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({payment_method_nonce: nonce})
    }).done();
  });

}).done();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('BTRNSample', () => BTRNSample);
