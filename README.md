# BTRNSample
Sample react native app that uses react-native-braintree module to accept payments

## Client
React native client built using [react-native-braintree](https://github.com/alawong/react-native-braintree) module

1. Run ``npm install``
2. Run ``npm start`` (starts react-packager)
3. Open ``ios/BTRNSample.xcworkspace`` in Xcode
5. Build and run iOS app

## Server

Simple node server using [Braintree server SDK](https://developers.braintreepayments.com/start/hello-server/node) to:
1. Generate and serve client token
2. Create transaction using a payment method nonce

To run:

1. Run ``npm install``
2. Replace the Braintree keys with your own (In Braintree control panel: Account->My User->View Authorizations->Click on Public Key->Select Node->copy)
3. ``node btserver.js``
