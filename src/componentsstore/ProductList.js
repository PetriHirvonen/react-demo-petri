import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
// import {storeProducts} from '../data';
import {ProductConsumer} from '../context';

 class ProductList extends Component {
    
    // Tätä käytetään pelkästään a.o."this.state.products" console-logitukseen jne. eli voidaan poistaa:
    // (samoin kuin a.o. k.o. console.log ja y.o. k.o. import)
    // state={
    //     products: storeProducts
    // }
         
    render () {
        //console.log(this.state.products);

        return (
            <React.Fragment>
                <div className="py-5">  
                    <div className="container">
                        <Title name="our" title="products and services" />

                        <div className="row">

                            <div>
                                <br />
                                <h4>Want to set up a service and keep it running? Don´t worry. 
                                    SADE Innovations will do it for you. Just give us the "GO", and enjoy.</h4>
                                <h4>Select from below. </h4>
                                <br />
                            </div>

                            <ProductConsumer>
                                {ValueOfWhateverIHaveInMyContextJSfilePleaseReturnItHere=>{
                                    console.log(ValueOfWhateverIHaveInMyContextJSfilePleaseReturnItHere);
                                    // return <h5>{ValueOfWhateverIHaveInMyContextJSfilePleaseReturnItHere}</h5>;
                                    return ValueOfWhateverIHaveInMyContextJSfilePleaseReturnItHere.products.map( product => {
                                        return <Product key={product.id} product={product}/>;
                                    // y.o: map´ataan array, ei pelkkää arvoa, siksi ylempi // return ei toimi.
                                    // y.o: loopataan koko array läpi, ja ja returnataan product jokaisesta productista joka on array´ssa
                                    // y.o: call-back function (eli product => ) spesifioi mitä tehdään jokaiselle productille...
                                    // y.o: ...joka on se, että jokaiselle palautetaan Product & KAIKKI sen tiedot (eli "product={product}")
                                    // y.o. lopuksi pitää lisätä "key" koska tämä on lista, pitää olla uniikki key arvo
                                    })
                                }}
                            </ProductConsumer>

                            <div>
                                <br />
                                <br />
                                <br />
                                <h4>SADE will take care of everything for you. 
                                    You pay. You use. We service. 24/7/365. </h4>
                                <br />
                                <br />
                                <br />
                            </div>

                            <small>ProductList.js file</small>

                            {/* <div className="refreshnappikorkeusvasemmallafooterinpaallaylempanacss">
                                <small>
                                    ProductList.js file
                                </small>
                            </div> */}

                        </div>

                    </div>
                </div>
            </React.Fragment>
        )

    }
}

export default ProductList;
