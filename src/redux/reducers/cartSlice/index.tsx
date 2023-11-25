import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartInterface } from "../../../utils/interfaces/cartInterface";

interface CartState {
    dataOrders: CartInterface[];
}

const initialState: CartState = {
    dataOrders: []
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCart: (state, action: PayloadAction<CartInterface>) => {
            const existingProductIndex = state.dataOrders.findIndex(
                (item) => item.product_id === action.payload.product_id
            )
            
            if(existingProductIndex !== -1 && state.dataOrders[existingProductIndex]) {
                const existingProduct = state.dataOrders[existingProductIndex];

                // Ensure that the existing product is not undefined
                if (existingProduct && existingProduct.quantityInCart !== undefined && action.payload.product_price !== undefined) {
                    const updatedProduct = {
                        ...existingProduct,
                        quantityInCart: existingProduct.quantityInCart + 1,
                        total_price: (existingProduct.quantityInCart + 1) * action.payload.product_price,
                    };
        
                    state.dataOrders[existingProductIndex] = updatedProduct;
                }
            } else {
                state.dataOrders.push(action.payload)
            }
        },
        removeProductInCart: (state, action: PayloadAction<any>) => {
            state.dataOrders = state.dataOrders.filter(product => product.idCart !== action.payload)
            state.dataOrders = [...state.dataOrders];
        },
        updateQuantity: (state, action: PayloadAction<any>) => {
            const { product, delta } = action.payload;
            const newQuantity = Math.max((product?.quantityInCart || 0) + delta, 0);
            const newTotalPrice = (product?.product_price || 0) * newQuantity;

            state.dataOrders = state.dataOrders.map(item =>
                item?.idCart === product?.idCart
                    ? { ...item, quantityInCart: newQuantity, total_price: newTotalPrice }
                    : item
            );
        },
        clearCart: (state) => {
            state.dataOrders = []
        }
    }
})

export const { addCart, removeProductInCart, updateQuantity, clearCart } = cartSlice.actions
export default cartSlice.reducer