import React from 'react';
import CartItem from './CartItem';   


export default function CartList ({value}) {
    const {cart} = value;
    console.log(value, cart);
    console.log(value);
    console.log(cart);

    return (
        <div className="container-fluid">
            {cart.map(item=>{
                return <CartItem key={item.id} itemArvoX={item} valueArvoX={value} /> 
                // huom. nuo itemArvoX ja valueArvox tulee CartItem.js;stä
            })}
            <br />
            CartList.js
            <br />
        </div>
    );

}

