import React, { Component } from 'react';
import  {storeProducts, detailProduct} from './data';
//import Product from './componentsstore/Product';


// Flow´t ovat:
// data.js -->  context.js --> ProductList.js //   {ProductConsumer} --> key={product.id} product={product} (<= =kaikki tiedot)
// data.js -->  context.js --> Product.js     //   {ProductConsumer} --> {id, title, img, price, inCart}
// data.js -->  context.js --> Details.js     //   {ProductConsumer} --> {id,company,img,info,price,title,inCart} 


const ProductContext = React.createContext();
//Provider (provides)
//Consumer (uses)


class ProductProvider extends Component  {
    // Tässä alunperin haettiin stateksi storeProducts ja detailProduct, molemmat siis haettiin data.js filestä: (huom. import yllä). 
    // Mutta tämä ei oikein pelittänyt koska muutti referenssejä ei-halutusti. Joten piti fiksata niin että itemit KOPIOIDAAN uusi numerosetti; ei referoida:
    state ={
        //products: storeProducts,
        products: [],
        detailProduct: detailProduct,
        cart:[],
        // jotta saadaan näkyviin tekemisen aikana aina suoraan jotain Cartissa:
        // cart: storeProducts,
        modalOpen:false,
        modalProduct:detailProduct,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0,
    };
    //Toiseksipiti luoda componentDiDMount (jolla saadaan kopiot numeroista, ei referenssit):
    componentDidMount () {
        this.setProducts();
    }
    //Ensin piti luoda uusi metodi setProducts (joka kopioi itemit eikä referoi) ja sille setState (2:45:00):
    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item=>{
            const singleItem = {...item};
            tempProducts = [...tempProducts,singleItem];
    })
    this.setState(()=>{
        return {products: tempProducts};
    });
};

    // This utility method gets the item by its ID:
    // ("jos item ID mätsää sen ID:n kanssa mikä passataan sisään niin sitten returnaa k.o. item")
    getItem = (id) => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    }

    //seuraavassa suluissa oleva "id" tekee sen, että kun klikkaa jotain tuotetta, Product.js file osaa tuotteen kuvaa
    // klikatessa eli .handleDetail(id) -kohdassa siirtyä nimenomaan sen tuotteen details-sivulle:
    handleDetail = (id) => {
        console.log("hello from detail");
        const product = this.getItem(id);
        this.setState(() => {
            return {detailProduct: product}
        })
    };

    // 3:25:13  ( https://www.youtube.com/watch?v=wPQ1-33teR4 )
    // tämä tekee sen että kun lisää carttiin, se reflektoituu statessa ja "incart" kuvakkeessa jota ei voi enää klikata uudelleen carttiin:
    addToCart = (id) =>  {
        console.log(`hello from add to cart.id is ${id}`);
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;

        // a.o. [...this.state.cart, product] tekee sen että product oikeasti lisätään MyCart´tiin: 
        this.setState(
            () => {
                return { products: tempProducts, cart: [...this.state.cart, product] };
            },
            () => {
                console.log('this.statea lisäyksessä: ');
                console.log(this.state);
                this.addTotals();  // tämä tekee että oikeasti laskee summat kun painaa + tai - nappia
            }
        );
    };
    
    //Seuraavat 2 kpl Modal eli Pop-up mgmt:
    openModal = id => {
        const product = this.getItem(id);
        this.setState(() => {
            return  {modalProduct:product, modalOpen:true}
        })
    }
    closeModal = () => {
        this.setState (() => {
            return {modalOpen:false}
        })
    }
    
    //Seuraavat 5 kpl ostoskori-mgmt:
    increment = (id) => {
        console.log('increment method alkaa, ts. lisää');
        //ensin haetaan statesta nykyiset cart items -tilat uuten array´hin:
        let tempCart = [...this.state.cart];
        //sitten valitulle tuottelle etsitään id eli jos sama id niin palauta se:
        const selectedProduct = tempCart.find(item=>item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count = product.count + 1;
        product.total = product.count * product.price;
        this.setState(() => {return{cart:[...tempCart]}},() => {this.addTotals()} );
        console.log('increment method loppuu, ts. lisätty');
    }
    decrement = (id) => {
        console.log('decrement method, ts. vähemmän');
        //ensin haetaan statesta nykyiset cart items -tilat uuten array´hin:
        let tempCart = [...this.state.cart];
        //sitten valitulle tuottelle etsitään id eli jos sama id niin palauta se:
        const selectedProduct = tempCart.find(item=>item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count = product.count - 1;
        // Jos vähennetään nollaan, poistetaan, muuten pidetään:
            if(product.count === 0) {
                this.removeItem(id)
            }
            else{
                product.total = product.count * product.price;
                this.setState(() => {return{cart:[...tempCart]}},() => {this.addTotals()} );
                console.log('decrement method loppuu, ts. poistettu');
            }
    }

    
    removeItem = (id) => {
        console.log('removeItem method, ts. poisto alkaa');
        //ensin haetaan products ja cart tilat kahdeen uuten array´hin:
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];
        // sitten filteröidään cart ja returnataan vain (kaikki) ne itemit jotka eivät matchää k.o. id:n kanssa: 
        // (eli ts. poistettua id:tä ei returnata => ei ole enää olemassa = poistuu cartista )
        // 1. Cart´ille helppo homma:
        tempCart = tempCart.filter(item => item.id !== id);
        // 2. Product´ille hieman hankalampaa:
        // index yhdelle tuotteelle, jonka perusteella voidaa laittaa poistetun tuotteen arvot nolliksi:
        const indexYksiTuote = tempProducts.indexOf(this.getItem(id));
        let removedProduct = tempProducts[indexYksiTuote];
        removedProduct.inCart = false;
        removedProduct.count = 0;
        removedProduct.total = 0;
        // ja sitten uudet arvot stateen:
        this.setState (
            () => {
                return {
                    cart: [...tempCart],
                    products: [...tempProducts]
                };
            },
            () => {
                this.addTotals ();
                this.closeModal ();
            }
        )
        console.log('removeItem method, ts. poisto loppuu');
        console.log (this.state);  // palauttaa vielä ei-muuttuneen array´n! Muutettu tule CartList.js;stä.
    }
    clearCart = () => {
        console.log('cart cleared');
        console.log (this.state);
        this.setState (() => {
            return { cart: [] };
        },
        () => {
            this.setProducts();  // tämä antaa uudet tuoreet kopiot objekteista eli palataan default arvoihin
            this.addTotals();
            this.closeModal ();
        });
        console.log('cart cleared & back to defaults');
        console.log (this.state); // palauttaa vielä ei-muuttuneen array´n! Muutettu tulee ProductList.js:stä.
    }
    addTotals = () => {
        // ensin kerätään kaikki arvot, alussa se on 0:
        let subTotal = 0;
        // sitten tehdään mapping eli loopataan läpi koko cart array jotta saadaan kaikki cartin total values
        // huom "+=": lisätään totalin value subTotaliin
        this.state.cart.map(item => (subTotal += item.total))
        const tempTax = subTotal * 0.14;
        const tax = parseFloat(tempTax.toFixed(2)); // pyöristetään kahteen decimaaliin
        const tempTotal = subTotal + tax;
        const total = parseFloat(tempTotal.toFixed(2)); // pyöristetään kahteen decimaaliin
        //laitetaan y.o. arvot stateen:
        this.setState(() => {
            return {
                cartSubTotal: subTotal,
                cartTax: tax,
                cartTotal: total,
            }
        })
    }


    render ()   {
        return (
            // HUOM. tämä mahdollistaa ServiceUIFrameContext.käytön misssä tahansa eri komponentissa, esim. ProductList.js:ssä.
            // <ProductContext.Provider value="hello from context.js...">
            //     {this.props.children}
            // </ProductContext.Provider>

            <ProductContext.Provider 
                value={{  ...this.state, 
                    handleDetail: this.handleDetail, 
                    addToCart: this.addToCart, 
                    openModal: this.openModal, 
                    closeModal: this.closeModal,
                    increment: this.increment,
                    decrement: this.decrement,
                    removeItem: this.removeItem,
                    clearCart: this.clearCart,
                    }}>

                {this.props.children}
            </ProductContext.Provider>

            // Huom yllä "...this.state" (aka de-structuring) tarkoittaa että hakee stateen/stateksi kaikki propertiekset ARVOINEEN suoraan (eikä koko array´tä)
            // (=ei tarvitse erikseen määritellä "products" ("products: this.state.products") eikä "detailProduct" jnen jos niitä tulee lisää)  
        );
    }
}


const ProductConsumer = ProductContext.Consumer;

export { ProductProvider,ProductConsumer };

