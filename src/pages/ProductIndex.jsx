import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { ProductList } from '../cmps/ProductList.jsx'
import { ProductFilter } from '../cmps/ProductFilter.jsx'
import { loadProducts, removeProduct, addProductToCart } from '../store/actions/product.action.js'
import { productService } from '../services/product/product.service.js'
import { AppHeader } from '../cmps/AppHeader.jsx'


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
        } catch (err) {
            console.log('Cannot remove product')
        }
    }

    async function onAddProductToCart(product) {
        try {
            const savedProduct = await addProductToCart(product)
            console.log(`Product added (id: ${savedProduct._id})`)
        } catch (err) {
            console.log('Cannot add product')
        }
    }


    function onSetFilterBy(newFilter) {
        console.log(newFilter);

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