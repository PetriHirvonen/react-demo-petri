//Tämä file on AWS Cognito juttuja varten luotu
//Tämä file tekee log-in register+UI:n, tästä flow -> AppAmplify.js

import React, { Component } from 'react';
import { Auth } from 'aws-amplify';

export default class AwsNavbar extends Component {
  handleLogOut = async event => {
    event.preventDefault();
    try {
      Auth.signOut();
      this.props.auth.setAuthStatus(false);
      this.props.auth.setUser(null);
      console.log("User is now logged out");
    }catch(error) {
      console.log(error.message);
    }
  }
  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src="hexal-logo.png" width="112" height="28" alt="logo pic" />
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          
          {/* Alkuperäinen toteutus pelkän aws-amplify´n kautta:
          <div className="navbar-start">
            <a href="/" className="navbar-item">
              Home
            </a>
            <a href="/products" className="navbar-item">
              Products
            </a>
            <a href="/admin" className="navbar-item">
              Admin
            </a>
          </div> */}

          {/* Uusi, oma toteutus: */}
          <div className="navbar-start">
            <a href="/" className="navbar-item">
              Home
            </a>
            <a href="/changepassword" className="navbar-item">
              _ChangePassword
            </a>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              {/* JOS joku on logged in ja JA JOS on validi user, näyttää (jonka data tulee this.propsin kautta LogIn.js filestä) userin nimen: */}
              {this.props.auth.isAuthenticated && this.props.auth.user && (
                <p>
                  Hello {this.props.auth.user.username}
                </p>
              )}
              <div className="buttons">
              {/* JOS user on logged in, piilotetaan register ja log in napit ja näytetään log out nappi:  */}
                {!this.props.auth.isAuthenticated && (
                  <div>
                    <a href="/register" className="button is-primary">
                      <strong>Register</strong>
                    </a>
                    <a href="/login" className="button is-light">
                      Log in
                    </a>
                  </div>
                )}
                {this.props.auth.isAuthenticated && (
                  <a href="/" onClick={this.handleLogOut} className="button is-light">
                    Log out
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}