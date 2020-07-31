import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428584220_.jpg" alt="" />
            <div className="home__row">
                <Product
                    id="234322"
                    title="The hell of a component"
                    price={1999.99}
                    rating={4}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRFkV908SfI51uianufVskUl9zAyFkfTyvX_Q&usqp=CAU"/>
                <Product
                    id="234322"
                    title="The hell of a component"
                    price={11.99}
                    rating={3}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQj0DvWF6vIDejrACEXlCpKgm-NMByO5TE8pQ&usqp=CAU"/>
            </div>
            <div className="home__row">
                <Product
                    id="234322"
                    title="The hell of a component"
                    price={199.99}
                    rating={4}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTUAi79U442p9tnb_3G2CMmHUBOcT94mjWv1A&usqp=CAU"/>
                <Product
                    id="234322"
                    title="The hell of a component"
                    price={199.99}
                    rating={4}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQsuLcRB3BFfes_oZ4gIMV0YBwpsNUZs5jsUE3oWH09o1McHuiqs-XXUC5GKlgtCyFGmxRRST0&usqp=CAc"/>
                <Product
                    id="234322"
                    title="The hell of a component"
                    price={49.99}
                    rating={4}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQnmy_7ZPPjP09iQbglIDpr2ZxLc6iSDEWmGA&usqp=CAU"/>
            </div>
            <div className="home__row">
                <Product
                    id="234322"
                    title="The hell of a component"
                    price={159.99}
                    rating={5}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSw087XCY5Tc-t37zAmLa03NiOZfVR2OS1ZqQ&usqp=CAU"/>
            </div>
        </div>
    )
}

export default Home
