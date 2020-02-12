import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AwsNavbar from './components/awsNavbar';
// import Home from './components/Home';
// import Products from './components/Products';
// import ProductAdmin from './components/ProductAdmin';
import LogIn from './components/auth/LogIn';
import Register from './components/auth/Register';
import ForgotPassword from './components/auth/ForgotPassword';
import ForgotPasswordVerification from './components/auth/ForgotPasswordVerification';
import ChangePassword from './components/auth/ChangePassword';
import ChangePasswordConfirm from './components/auth/ChangePasswordConfirm';
import Welcome from './components/auth/Welcome';
//import Footer from './components/Footer';
import { Auth } from 'aws-amplify';
//import { library } from '@fortawesome/fontawesome-svg-core';
//import { faEdit } from '@fortawesome/free-solid-svg-icons';
//library.add(faEdit);


class AppAmplify extends Component {

  //app-wide asetus (!!!) että ollaanko logged in vai ei: -->  
  state = {
    isAuthenticated: false,
    isAuthenticating: true,
    user: null
  } 

  setAuthStatus = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }

  setUser = user => {
    this.setState({ user: user });
  }

  //tarvitaan jotta logged in informaatio säilyy app-wide ja vaikka sivuja refreshataan:
  //talletaan session ja user aina stateen.
  async componentDidMount() {
    try {
      // ladataan session object local storagesta:
      const session = await Auth.currentSession();
      // kun session object on tullut, muutetaan AuthStatus true´ksi:
      this.setAuthStatus(true);
      console.log("User is still logged in. Session info: ", session);
      // ja vastaavasi user object:
      const user = await Auth.currentAuthenticatedUser();
      this.setUser(user);
    } catch(error) {
      if (error !== 'No current user') {
        console.log(error);
      }
    }
    this.setState({ isAuthenticating: false });
  }

  render() {
    //tehdään const johon arvot imetään y.o. methodeista & stateista, ja näitä voidaan sitten passata jokaiseen komponenttiin alla:
    //huom että returnin alla "props" ja "authprops" tekee sen että kaikki perus-propsit tulee mukaan JA MYÖS authpropsit siihen päälle
    const authProps = {
      isAuthenticated: this.state.isAuthenticated,
      user: this.state.user,
      setAuthStatus: this.setAuthStatus,
      setUser: this.setUser
    }
    return (
      // Tsekataan ihan alkuun että joko on autentikoitu vai equivalent, ennen kuin rendaa sivun ruudulle:
      !this.state.isAuthenticating &&
      <div className="App">
        <Router>
          <div>
            <AwsNavbar auth={authProps} />
            <Switch>
              {/* <Route exact path="/" render={(props) => <Home {...props} auth={authProps} />} />
              <Route exact path="/products" render={(props) => <Products {...props} auth={authProps} />} />
              <Route exact path="/admin" render={(props) => <ProductAdmin {...props} auth={authProps} />} /> */}
              <Route exact path="/login" render={(props) => <LogIn {...props} auth={authProps} />} /> 
              <Route exact path="/register" render={(props) => <Register {...props} auth={authProps} />} />
              <Route exact path="/forgotpassword" render={(props) => <ForgotPassword {...props} auth={authProps} />} />
              <Route exact path="/forgotpasswordverification" render={(props) => <ForgotPasswordVerification {...props} auth={authProps} />} />
              <Route exact path="/changepassword" render={(props) => <ChangePassword {...props} auth={authProps} />} />
              <Route exact path="/changepasswordconfirmation" render={(props) => <ChangePasswordConfirm {...props} auth={authProps} />} />
              <Route exact path="/welcome" render={(props) => <Welcome {...props} auth={authProps} />} />
            </Switch>
            {/* <Footer /> */}
          </div>
        </Router>
      </div>
    );
  }
}

export default AppAmplify;

