import React, { Component } from 'react' ;
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// Huom. a.o. Modal´in olisi voinut importata tähänkin mutta laitoin sen suoraan store.jsx:ään...
// import Modal from './componentsstore/Modal.js';


class App extends Component {
    render () {
        return (
          // <div className="container">
          //   <div className="row">
          //     <div className="col-6"> column number one </div>
          //     <div className="col-6">
          //         <span> 
          //           <i className="fas fa-home" />  
          //         </span> column number two </div>
          //   </div>
          // </div>
          <React.Fragment>
            {/* <Modal /> */}
            <small> App.js (for WebStore)</small>
          </React.Fragment>
        );
    }
}


export default App;
