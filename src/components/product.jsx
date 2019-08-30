import React from 'react';
   
function Product (props) {
    console.log(props.name + ": " + props.price);    
    return (
            <div className="productcss">
                <font style={{fontWeight: "bold", color: "purple"}}> {props.name} </font>
                <br/>
                <font style={{fontWeight: "bold"}}> Hinta: </font> {props.price.toLocaleString("en-FI", { style: "currency", currency: "EUR"})}
                <br/>
                <font style={{fontWeight: "bold"}}> Kuvaus: </font> {props.description} 
            </div>
        );
}


export default Product;
