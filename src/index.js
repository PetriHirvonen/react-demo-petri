import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
//import Counter from './components/counter';
//import Counters from './components/counters';
import IndexOma from './indexOma';

//AmplifyCognito-jutut: 
import Amplify from "aws-amplify";
import config from "./config";
//import AppAmplify from './AppAmplify';

Amplify.configure({
    Auth: {
      //mandatorySignIn: true,
      mandatorySignIn: false,
      region: config.cognito.REGION,
      userPoolId: config.cognito.USER_POOL_ID,
      userPoolWebClientId: config.cognito.APP_CLIENT_ID,
      identityPoolId: config.cognito.IDENTITY_POOL_ID
    }
  });


//ReactDOM.render(<Counter />, document.getElementById('root'));
ReactDOM.render(<IndexOma />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();




// Polku: index.js <- indexOma.js <- indexOmaAppRouter.js