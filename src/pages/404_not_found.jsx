import React, { Component } from 'react';
import { Link } from "react-router-dom";

 class Default extends Component {
    render () {
        console.log(this.props);
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
                        <h1 className="display-3">404</h1>
                        <h1>error </h1>
                        <h2>page not found</h2>
                        <h3>the requested URL 
                            <span className="text-danger"> {this.props.location.pathname} </span> 
                            {" "} was not found 
                        </h3>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                    <Link to="/home"> Go Back to Petri´s Home, you will feel better there. </Link>
                <br />     
            </div>
            
            
            // <div>
            //     <h6> page not found</h6>
            // </div>
        )
    }
}

export default Default;
