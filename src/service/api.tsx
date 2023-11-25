import { authInterface } from "../utils/interfaces/authInterface";
import { requestInterface } from "../utils/interfaces/requestInterface";
import api from "./axios";

const API = {
    
    // Account Consumer
    createAccountConsumer: (body: authInterface) => {
        return api.post('/account/signup/consumer', body)
    },
    checkAccountConsumer: (body: authInterface) => {
        return api.post('/account/signin/consumer', body)
    },
    updateAccountConsumer: ({consumer_id, body} : {consumer_id: string, body: any}) => {
        return api.put(`/account/consumer/${consumer_id}`, body)
    },
    getAccountConsumerById: (consumer_id: string) => {
        return api.get(`/account/list/consumer/${consumer_id}`)
    },

    // Shop
    getShopById: (id?: string) => {
        return api.get(`/shop/oneShop/${id}`)
    },

    // Product
    getAllProduct: (data?: object) => {
        return api.get('/product', {params: data})
    },
    getProductById: (product_id: string) => {
        return api.get(`/product/Oneproduct/${product_id}`)
    },
    getProductByShopId: (shop_id: string) => {
        return api.get(`/product/shop/${shop_id}`)
    },

    // History
    getAllHistoryBuy: (id?: string) => {
        return api.get(`/history/${id}`)
    },
    removeHistoryConsumer: (history_id: string, idCart: string) => {
        return api.delete(`/history/consumer/${history_id}/product/${idCart}`)
    },

    // Request
    createRequest: (body: requestInterface) => {
        return api.post('/request', body)
    },

    // Subsribe
    newSubscribe: (body: any) => {
        return api.post('/subscribe', body)
    },

    // Payment
    getPaymentByShop: (shop_id: string) => {
        return api.get(`/payment/${shop_id}`)
    },
    checkout: (body: any) => {
        return api.post('/payment/create', body)
    },
    updateStatusPayment: (history_id: string, status: string) => {
        return api.put(`/history/updateStatus/${history_id}/${status}`)
    },

}

export default API;