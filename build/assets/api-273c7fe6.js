import{d as e}from"./index-75ae6465.js";const o={createAccountConsumer:t=>e.post("/account/signup/consumer",t),checkAccountConsumer:t=>e.post("/account/signin/consumer",t),updateAccountConsumer:({consumer_id:t,body:r})=>e.put(`/account/consumer/${t}`,r),getAccountConsumerById:t=>e.get(`/account/list/consumer/${t}`),getShopById:t=>e.get(`/shop/oneShop/${t}`),getAllProduct:t=>e.get("/product",{params:t}),getProductById:t=>e.get(`/product/Oneproduct/${t}`),getProductByShopId:t=>e.get(`/product/shop/${t}`),getAllHistoryBuy:t=>e.get(`/history/${t}`),removeHistoryConsumer:(t,r)=>e.delete(`/history/consumer/${t}/product/${r}`),createRequest:t=>e.post("/request",t),newSubscribe:t=>e.post("/subscribe",t),getPaymentByShop:t=>e.get(`/payment/${t}`),checkout:t=>e.post("/payment/create",t),updateStatusPayment:(t,r)=>e.put(`/history/updateStatus/${t}/${r}`)};export{o as A};
