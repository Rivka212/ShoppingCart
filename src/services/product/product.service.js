import { storageService } from '../async-storage.service.js'
import { makeId, saveToStorage, loadFromStorage } from '../util.service.js'

const STORAGE_KEY = 'productDB'
const CART_KEY = 'cart'

let products = _createProducts()

export const productService = {
    query,
    getById,
    remove,
    save,
    getEmptyProduct,
    addToCart,
    loadCartService
}

window.cs = productService

async function query(filterBy = {}) {
    var products = await storageService.query(STORAGE_KEY)
   const cartItems = loadFromStorage('cart') || []
    // if (filterBy.message) {
    //     const regExp = new RegExp(filterBy.message, 'i')
    //     Products = Products.filter(Product => regExp.test(Product.message))
    // }
    if (filterBy.quantity) {
        products = products.filter(product => product.quantity >0)
    }
    return products
}

async function loadCartService() {
    const productsCatalog = await storageService.query(STORAGE_KEY)
    const cartItems = loadFromStorage(CART_KEY) || []

    const cartProducts = cartItems.map(cartItem => {
        const product = productsCatalog.find(product => product._id === cartItem._id)
        return product ? { ...product, quantity: cartItem.quantity } : null
    }).filter(product => product !== null)
    return cartProducts
}

function getById(productId) {
    return storageService.get(STORAGE_KEY, productId)
}

async function remove(productId) {
    await storageService.remove(STORAGE_KEY, productId)
}


async function save(product) {
    product = await storageService.post(STORAGE_KEY, product)
    return product
}

async function addToCart(product) {
    let cart = loadFromStorage(CART_KEY) || []

    const existingIdx = cart.findIndex(p => p._id === product._id)

    if (existingIdx >= 0) {
        cart[existingIdx].quantity += 1
    } else {
        cart.push({ ...product, quantity: 1 })
    }

    saveToStorage(CART_KEY, cart)
    return cart[existingIdx] || cart[cart.length - 1]
}


function getEmptyProduct() {
    return {
        title: '',
        price: '',
    }
}

function _createProducts() {
    var products = loadFromStorage(STORAGE_KEY)
    if (!products || products.length === 0) {
        products = [
            {
                _id: 1,
                title: 'tablet',
                price: 900,
                img: 'tablet.jpg',
            },
            {
                _id: 2,
                title: 'lamp',
                price: 45,
                img: 'lamp.jpg',
            },
            {
                _id: 3,
                title: 'box-pens',
                price: 12,
                img: 'box-pens.jpg',
            },
            {
                _id: 4,
                title: 'flowerpot',
                price: 50,
                img: 'flowerpot.jpg',
            },
            {
                _id: 5,
                title: 'diary',
                price: 23,
                img: 'diary.jpg',
            },
            {
                _id: 6,
                title: 'calculator',
                price: 18,
                img: 'calculator.jpg',
            },
            {
                _id: 7,
                title: 'letter',
                price: 5,
                img: 'letter.jpg',
            },
            {
                _id: 8,
                title: 'pens',
                price: 12,
                img: 'pens.jpg',
            },
            {
                _id: 9,
                title: 'notebook',
                price: 17,
                img: 'notebook.jpg',
            },
        ]
        saveToStorage(STORAGE_KEY, products)
    }
    return products
}




// // cart:
// [
//   {
//     "productId": "123",
//     "quantity": 2
//   },
//   {
//     "productId": "456",
//     "quantity": 1
//   }
// ]