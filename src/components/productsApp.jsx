import React from 'react';
import Product from './product';
import ProductsData from './productsData';


function ProductsApp () {

    const productComponents = ProductsData.map(productitem => {
        return (
            <Product key={productitem.id} name={productitem.name} price={productitem.price} description={productitem.description} />
        )
    })
    
    
    return (
        <div>
            Tuotteet.
            <div className="productsAppboxcss">
                {productComponents} 
            </div>
        </div>

    );
}

  
export default ProductsApp;
   


