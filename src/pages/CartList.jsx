import { useSelector } from 'react-redux'
import { loadCart } from '../store/actions/product.action.js'

import { CartPreview } from '../cmps/CartPreview.jsx'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


export function CartList() {

    const [filterBy, setFilterBy] = useState({ quantity: true });
    const cartProducts = useSelector(storeState => storeState.productModule.cart)
    // const currentProduct = Products.length > 0 ? Products[Products.length - 1] : null;
    const navigate = useNavigate()

    useEffect(() => {
        loadCart()
    }, [])

    return (
        <section className='my-cart'>
            <h1 >MY CART</h1>
            {/* <button onClick={() => navigate('/')}>Back to Home</button> */}

            <ul className="cart-list">
                {cartProducts?.map(product => (
                    <li className="cart-preview" key={product._id}>
                        <CartPreview product={product} />
                    </li>
                )
                )}
            </ul>
        </section>
    )
}