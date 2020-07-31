import React, { useContext } from 'react';
import './Product.css';
import {StateContext} from '../Context/StateProvider'


function Product({ id, title, image, price, rating }) {

    const [dispatch] = useContext(StateContext);

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id, 
                title, 
                image,
                price, 
                rating
            }
        })
    }

    const stars = () => {
        let p='⭐️';
        for(let i=0; i<rating; i++) {
            p += '⭐️'
        }
        return p;
    }

    return (
        <div className="product">
            <div className="product__info">
            <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    { stars()
                        /* Array(rating)
                         .fill()
                         .map((_) => (
                             <p>⭐️</p>
                         ))
                        */
                    }
                </div>
            </div>
            <img src={image} alt=""/>
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
};



export default Product
