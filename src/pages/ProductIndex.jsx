import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { ProductList } from '../cmps/ProductList.jsx'
import { ProductFilter } from '../cmps/ProductFilter.jsx'
import { loadProducts, removeProduct, addProductToCart } from '../store/actions/product.action.js'
import { productService } from '../services/product/product.service.js'
import { AppHeader } from '../cmps/AppHeader.jsx'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js'


export function ProductIndex() {
    const [filterBy, setFilterBy] = useState({ title: '', price: '' });

    const products = useSelector(storeState => storeState.productModule.products)
    // const currentProduct = Products.length > 0 ? Products[Products.length - 1] : null;

    useEffect(() => {
        loadProducts(filterBy)
    }, [filterBy])


    async function onRemoveProduct(productId) {
        try {
            await removeProduct(productId)
            showSuccessMsg('Product removed successfully.', 'success')
        } catch (err) {
            console.log('Cannot remove product')
            showErrorMsg('Failed to remove product.', 'error')
        }
    }

    async function onAddProductToCart(product) {
        try {
            const savedProduct = await addProductToCart(product)
            showSuccessMsg('Product added to cart.', 'success')
            // console.log(`Product added (id: ${savedProduct._id})`)
        } catch (err) {
            console.log('Cannot add product')
            showErrorMsg('Failed to add product to cart.', 'error')
        }
    }


    function onSetFilterBy(newFilter) {
        // console.log(newFilter);
        setFilterBy({ ...newFilter })
    }

    return (
        <section className="app">
            <AppHeader />
            <section className="main-container">
                <div>
                    <ProductFilter filterBy={filterBy} onFilterBy={onSetFilterBy} />
                    <ProductList products={products} onAddProductToCart={onAddProductToCart} />
                </div>
            </section>
        </section>
    )



}