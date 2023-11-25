import Alert from "../component/alert"
import { addCart } from "../redux/reducers/cartSlice"

const handleCart = (idCart: any, product: any, dispatch: any) => {
    console.log(idCart)

    const data = {
        ...product,
        idCart,
        quantityInCart: 1,
        total_price: product?.product_price
    }

    const response = dispatch(addCart(data))
    if(response.payload) {
        Alert({
            showConfirmButton: true,
            text:"Success add to cart",
            title: 'Succes',
            icon: 'success',
            showCancelButton: false
        })
    }
    console.log(response)
}

export default handleCart