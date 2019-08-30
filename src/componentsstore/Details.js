import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';


 class Details extends Component {
    render () {
        return (
            <div>
                <ProductConsumer>
                    {ValueOfWhateverIHaveInMyContextJSfilePleaseReturnItHere => {
                        console.log(ValueOfWhateverIHaveInMyContextJSfilePleaseReturnItHere.detailProduct);
                        const {id,company,img,info,price,title,inCart} = ValueOfWhateverIHaveInMyContextJSfilePleaseReturnItHere.detailProduct;
                        return (
                            <div className="container py-5">
                                {/* title: */}
                                    <div className="row">
                                        <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                            <h1>{title}</h1>
                                        </div>
                                    </div>
                                {/* product kuva: (Huom. img-fluid varmistaa ettei kuva tule ulos divistä) */}
                                    <div className="row">
                                        <div className="col-10 mx-auto col-md-6 my-3">
                                            <img src={img} className="img-fluid" alt="product" />
                                        </div>
                                    </div>
                                {/* product text alkaa: */}
                                    <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                        <h2> Offering: {title} </h2>
                                        <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                            basic building blocks made by: <span className="text-uppercase"> {company} </span>
                                        </h4>
                                        <h4 className="text-blue">
                                            <strong> price: <span> € </span> {price} </strong>
                                        </h4>
                                        <p className="text-capitalize font-weight-bold mt-3 mb-0"> Info about the customization and service from SADE for you: </p>
                                        <p className="text-muted lead">{info} </p>
                                        {/* Napit alkaa: */}
                                            <div>

                                                <Link to='/store'>
                                                    <ButtonContainer> back to products and services </ButtonContainer>
                                                </Link>
                                                
                                                &nbsp; 

                                                <ButtonContainer 
                                                    addToCartNapinPROPDetailsjsFilestaButtonjsFileen
                                                    disabled={inCart?true:false}
                                                    onClick={() => {
                                                        ValueOfWhateverIHaveInMyContextJSfilePleaseReturnItHere.addToCart(id);
                                                        ValueOfWhateverIHaveInMyContextJSfilePleaseReturnItHere.openModal(id);
                                                    }}
                                                    >
                                                    {inCart ? "inCart" : "add to cart"}
                                                </ButtonContainer>
                                                
                                                &nbsp; 

                                                <Link to='./storecart' className="ml-auto">
                                                    <ButtonContainer> Go to My Cart </ButtonContainer>
                                                </Link> 


                                            </div>
                                        {/* Napit loppuu. */}
                                    </div>  
                                {/* product text loppuu. */}
                            </div>
                        )
                    }}
                </ProductConsumer>
                
                <div>
                    <h6>hello from Details.js file</h6>
                </div>

                {/* <div className="refreshnappikorkeusvasemmallafooterinpaallaylempanacss">
                    <small>
                        Details.js file
                    </small>
                </div> */}
            </div>
        )
    }
}

export default Details;
