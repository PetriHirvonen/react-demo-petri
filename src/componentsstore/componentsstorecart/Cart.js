import React, { Component } from 'react'
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import {ProductConsumer} from '../../context'; 
import CartList from './CartList';
import CartTotals from './CartTotals';
import Spacekomponentti from '../../components/spacekomponentti';
import Spacekomponentti2 from '../../components/spacekomponentti2';
import Spacekomponentti3 from '../../components/spacekomponentti3';

 class Cart extends Component {
    render () {
        return (
            <div>
                <section>
                    {/* {cart}" saadaan context.js filestä: */}
                    <ProductConsumer>
                        {valueArvoCartille => {
                            const {cart} = valueArvoCartille;
                            if (cart.length>0) {
                                return(
                                    <React.Fragment>
                                        <Title name="your" title="SADE service cart" />
                                        <CartColumns />
                                        <CartList value={valueArvoCartille} />
                                        {/* tällä y.o:lla saadaan koko context.js:n arvot eli ultimately kaikki data.js filen itemit */}
                                        <CartTotals value={valueArvoCartille} history={this.props.history}/>
                                        {/* y.o. history props passataan PayPalButton.js:ään */}
                                    </React.Fragment>
                                );
                            } 
                            else {
                                return (
                                    <EmptyCart />
                                );
                            }
                        }}
                    </ProductConsumer>
                   
                    
                    <Spacekomponentti />
                    <Spacekomponentti2 />
                    <Spacekomponentti3 />
                </section>
                
                
                <div>
                    <h6> Cart.js file</h6>
                </div>
                
            </div>
        )
    }
}

export default Cart;