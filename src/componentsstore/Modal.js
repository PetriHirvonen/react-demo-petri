import React, { Component } from 'react';
import styled from 'styled-components';
import {ProductConsumer} from '../context';
import {ButtonContainer} from './Button';
import {Link} from 'react-router-dom';


export default class Modal extends Component {
    render () {
        return (
            <div>
                <ProductConsumer>
                    {(ValueOfWhateverIHaveInMyContextJSfilePleaseReturnItHere3) =>  {
                        const   {modalOpen, closeModal} = ValueOfWhateverIHaveInMyContextJSfilePleaseReturnItHere3;
                        const   {img, title, price} = ValueOfWhateverIHaveInMyContextJSfilePleaseReturnItHere3.modalProduct;
                        
                        if(!modalOpen) {
                            return null;
                            // return (
                            //     <div> fffff </div>
                            // );
                        }
                        
                        else{
                            return (
                                <ModalContainer>
                                    {console.log("else activated = modal is open")};
                                    <div className="container">
                                        <div className="row">
                                            <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                                                <h5>service added to the cart</h5>
                                                <img src={img} className="img-fluid" alt="product" />
                                                <h5> {title} </h5>
                                                <h5 className="text-muted"> price:  {price}  € </h5>
                                                
                                                <br />

                                                <Link to='/storedetails'>
                                                    <ButtonContainer onClick={()=>closeModal()}>
                                                        See the details of Your Service
                                                    </ButtonContainer>
                                                </Link>

                                                <div className= "spacekomponentticss" >
                                                  &nbsp;
                                                </div>

                                                {/* <br />
                                                <br /> */}
                                                
                                                <Link to='/store'>
                                                    <ButtonContainer onClick={()=>closeModal()}>
                                                        Continue shopping
                                                    </ButtonContainer>
                                                </Link>
                                                
                                                &nbsp; 

                                                <Link to='/storecart'>
                                                    <ButtonContainer addToCartNapinPROPDetailsjsFilestaButtonjsFileen onClick={()=>closeModal()}>
                                                        Go to cart
                                                    </ButtonContainer>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </ModalContainer>
                            );
                        }
                        
                    }}
                </ProductConsumer>
                        
                <div>
                    <small> Modal.js</small>
                </div>
            </div>
        );
    }
}

const ModalContainer = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom 0;
background: rgba(0,0,0,0.3);
// Seuraavat kolme riviä laittavat keskelle ruutua, vertikaalsiesti ja horizontaalisesti:
display: flex;
align-items: center;
justify-content: center;
// seuraava hakee yllä annetun id:n mukaan:
#modal{
    background: var(--mainWhite);
}
`



