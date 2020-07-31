import React, { useContext } from 'react'
import { StateContext } from '../Context/StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct.js'
import Subtotal from './Subtotal';

function Checkout() {

    const [{ basket }] = useContext(StateContext);

    return (
        <div className="checkout">
            <div className="checkout__left">
            <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt=""/>
            {basket?.length === 0 ? (
                <div>
                    <h2>Your Shopping Basket is empty</h2>
                    <p>
                        You have no items in your basket. To buy one or "Add to basket" next to the item.
                    </p>
                </div>
            ) : (
                <div>
                    <h2 className="checkout__title">Your Shopping Basket</h2>

                    {/* List out all of the checkout Products */}

                    {basket.map((item) => (
                        <CheckoutProduct
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            )}
            </div>
            {basket.length > 0 && (
                <div className="checkout__right">
                    <Subtotal />
                </div>
            )}
        </div>
    )
}

export default Checkout
