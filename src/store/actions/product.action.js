import { productService } from '../../services/product/product.service.js'
import { ADD_PRODUCT, ADD_TO_CART, REMOVE_PRODUCT, SET_CART, SET_PRODUCT, SET_PRODUCTS, UPDATE_PRODUCT } from '../reducers/product.reducer.js'
import { store } from '../store.js'

export async function loadProducts(filterBy = {}) {
    try {
        const products = await productService.query(filterBy)
        store.dispatch(getCmdSetProducts(products))
        // return products
    } catch (err) {
        console.log('Cannot load product', err)
        throw err
    }
}

export async function loadProduct() {
    try {
        const product = await productService.getById(productId)
        store.dispatch(getCmdSetProduct(product))
    } catch (err) {
        console.log('Cannot load product', err)
        throw err
    }
}

export async function loadCart() {
    try {
        const cartProducts = await productService.loadCartService()
        store.dispatch(getCmdSetCart(cartProducts))
    } catch (err) {
        console.log('Cannot load cart', err)
        throw err
    }
}


export async function removeProduct(productId) {
    try {
        const product = await productService.remove(productId)
        store.dispatch(getCmdRemoveProduct(product))
    } catch (err) {
        console.log('Cannot remove product', err)
        throw err
    }
}

export async function addProductToCart(product) {
    try {
        const updatedProduct = await productService.addToCart(product)
        store.dispatch(getCmdSetCart(updatedProduct))
        // store.dispatch(getCmdAddToCart(updatedProduct))
        return updatedProduct
    } catch (err) {
        console.log('Cannot add product', err)
        throw err
    }
}

export async function removeProductFromCart(productId) {
    try {
        const updatedCart = await productService.removeFromCart(productId)
        store.dispatch(getCmdSetCart(updatedCart))
        //   store.dispatch(getCmdAddProduct(updatedCart))
    } catch (err) {
        console.log('Cannot remove product from cart', err)
        throw err
    }
}

export async function updateProductQuantity(productId, diff) {
    try {
        const updatedCart = await productService.updateQuantity(productId, diff)
        store.dispatch(getCmdSetCart(updatedCart))
    } catch (err) {
        console.log('Cannot update quantity', err)
        throw err
    }
}

// Command Creators:
function getCmdSetProducts(products) {
    return {
        type: SET_PRODUCTS,
        products
    }
}
function getCmdSetProduct(product) {
    return {
        type: SET_PRODUCT,
        product
    }
}
function getCmdRemoveProduct(productId) {
    return {
        type: REMOVE_PRODUCT,
        productId
    }
}
function getCmdAddProduct(product) {
    return {
        type: UPDATE_PRODUCT,
        product
    }
}

function getCmdSetCart(products) {
    return {
        type: SET_CART,
        products
    }
}

function getCmdAddToCart(product) {
    return {
        type: ADD_TO_CART,
        product
    }
}


