import React from 'react';
 

export default function CartItem ({itemArvoX, valueArvoX}) {
    const {id, title, img, price, total, count} = itemArvoX;
    const {increment, decrement, removeItem} = valueArvoX;

    return (
        <div>

            <div className = "row my-2 text-capitalize text-center">
                {/* 1st column: */}
                    <div className = "col-10 mx-auto col-lg-2">
                        <img src={img} style={{width: '5rem', height:"5rem"}} className="img-fluid" alt="product" />
                    </div>
                {/* 2nd column: */}
                    <div className = "col-10 mx-auto col-lg-2">
                        <span className="d-lg-none"> product : </span>
                        {title}
                    </div>
                {/* 3rd column: */}
                    <div className = "col-10 mx-auto col-lg-2">
                        <span className="d-lg-none"> price : </span>
                        {price}
                    </div>
                {/* Plus ja miinus napit: */}
                    <div className = "col-10 mx-auto col-lg-2 my-2 my-lg-0">
                        <div className="d-flex justify-content-center" > 
                            <div>
                                <span className="btn btn-black mx-1" onClick= {() => decrement(id)}> - </span>
                                <span className="btn btn-black mx-1">{count} </span>
                                <span className="btn btn-black mx-1" onClick= {() => increment(id)}> + </span>
                            </div>
                        </div>
                    </div>
                {/* Remove item nappikolumni: */}
                    <div className = "col-10 mx-auto col-lg-2">
                        <div>
                            <div className="cart-icon" onClick= {()=> removeItem (id)}>
                                <i className="fas fa-trash" />
                            </div>
                        </div>
                    </div>
                {/* Total columni: */}
                    <div className = "col-10 mx-auto col-lg-2">
                        <strong> item total: {total} € </strong>
                    </div>

            </div>

            {/* Jos tähän laittaa seur. divin, tulisi näkyviin joka cart rivin väliin ostoskorissa:
            <div>
                CartItem.js
            </div> */}

        </div>

    );

}