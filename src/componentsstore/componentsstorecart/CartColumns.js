import React, { Component } from 'react'

 class CartColumns extends Component {
    render () {
        return (
            <div className="container-fluid text-center d-none d-lg-block">
                <div className="row" >
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase">service </p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase">name of service </p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase">price </p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase">quantity (months) </p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase">remove </p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase">total </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default CartColumns;



// container-fluid = käyttää koko ruudun
// d-none: alkuun ei näytä mitään... eli ei näytä kolumneja ollenkaan
// d-lg-block ...mutta sitten largella screenillä näyttääkin  
// col-10 = pienellä ruudulla spännää 10 kolumnia leveäksi (tämä ei tarpeen itse asiassa koska tässä renderöidään vaan leveälle ruudulle)
// mx-auto = aina keskellä
// col-lg-2 = isolla ruudulla 2 kolmunia leveä

