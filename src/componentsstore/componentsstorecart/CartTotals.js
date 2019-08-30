import React from 'react';
import { Link } from 'react-router-dom';
//import CartItem from './CartItem';   


export default function CartTotals ({value}) {
    // yllä "value" on se prop joka haetaan, ja sen {arvot} alla isContext.js:stä 
    const {cartSubTotal, cartTax, cartTotal, clearCart } = value;
    // console.log(value, cart);
    

    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                    <Link to="/store">
                        <button 
                            className="btn btn-outline-danger text-uppercase mb-3 px-5"
                            type="button"
                            onClick={() => clearCart()}>
                            clear cart and go back to products and services
                        </button>
                    </Link>
                    <h5>
                        <span className="text-title"> subtotal (w/o VAT) : </span>
                        <strong> {cartSubTotal} € </strong>
                    </h5>
                    <h5>
                        <span className="text-title"> tax (VAT 14%) : </span>
                        <strong> {cartTax} € </strong>
                    </h5>
                    <h5>
                        <span className="text-title"> total (incl. VAT) : </span>
                        <strong> {cartTotal} € </strong>
                    </h5>
                    </div>
                </div>
            </div>
        </React.Fragment>
        
        
        
        // <div>
        //     hello from CartTotals.js
        // </div>
    );

}

