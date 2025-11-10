import { useSelector } from 'react-redux'
import { loadCart, removeProductFromCart, updateProductQuantity } from '../store/actions/product.action.js'

import { CartPreview } from '../cmps/CartPreview.jsx'
import { useEffect, useState } from 'react';
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js';


export function CartList() {

    const [filterBy, setFilterBy] = useState({ quantity: true })
    const cartProducts = useSelector(storeState => storeState.productModule.cart)


    useEffect(() => {
        loadCart()
    }, [])


    async function onRemoveProductFromCart(productId) {
        try {
            await removeProductFromCart(productId)
            showSuccessMsg('Product removed from cart.', 'success')
        } catch (err) {
            console.log('Cannot remove product from cart')
            showErrorMsg('Failed to remove product from cart.', 'error')
        }
    }

    async function handleQuantityChange(productId, diff) {
        try {
            await updateProductQuantity(productId, diff)
        } catch (err) {
            const action = diff > 0 ? 'increase' : 'decrease'
            showErrorMsg(`Failed to ${action} quantity`, 'error')
        }
    }

    return (
        <section className='my-cart'>
            <h1 >MY CART</h1>
            <ul className="cart-list">
                {cartProducts?.map(product => (
                    <li className="cart-preview" key={product._id}>
                        <CartPreview product={product} onRemoveProductFromCart={onRemoveProductFromCart} onQuantityChange={handleQuantityChange} />
                    </li>
                )
                )}
            </ul>
        </section>
    )
}



