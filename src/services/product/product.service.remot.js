import { httpService } from '../http.service.js'

const BASE_URL = 'product/'

export const ProductService = {
    query,
    getById,
    save,
    remove,
    getEmptyProduct,

}

function query(filterBy = {}) {
    return httpService.get(BASE_URL, filterBy)
}

function getById(productId) {
    return httpService.get(BASE_URL + productId)
}

function remove(productId) {
    return httpService.delete(BASE_URL + productId)
}

function save(product) {
    if (product._id) {
        return httpService.put(BASE_URL, product)
    } else {
        return httpService.post(BASE_URL, product)
    }
}

function getEmptyProduct() {
    return {
        title: '',
        price:'',
        img:'',
    }
}


