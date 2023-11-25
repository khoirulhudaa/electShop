import { FaMinus, FaPlus, FaTrash } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { Cart } from "../../assets"
import ToRupiah from '../../helpers/toRupiah'
import { removeProductInCart, updateQuantity } from "../../redux/reducers/cartSlice"
import { CartInterface } from "../../utils/interfaces/cartInterface"
import Alert from "../alert"

const ListProductInCart = () => {

    const cart:any = useSelector((state: any) => state.cartReducer.dataOrders)
    const dispatch = useDispatch()

    const handleRemoveProduct = async (idCart: any) => {
        try {
          dispatch(removeProductInCart(idCart));
          Alert({
            showConfirmButton: true,
            text: "Success remove from cart",
            title: 'Success',
            icon: 'success',
            showCancelButton: false,
          });
        } catch (error: any) {
          Alert({
            showConfirmButton: false,
            text: error, 
            title: 'Failed',
            icon: 'error',
            showCancelButton: true,
            cancelButtonText: 'Confirm',
          });
        }
      };

    const handleMinus = (product: any, delta: any) => {
        dispatch(updateQuantity({product, delta}))
    }
    
    const handlePlus = (product: any, delta: any) => {
        dispatch(updateQuantity({product, delta}))
    }

  return (
    <>
         {
            cart && cart.length > 0 ? (
                cart.map((product: CartInterface, index: number) => (
                    <div key={index} className='w-full h-max md:h-[200px] bg-white mb-[20px] p-4 md:flex'>
                        <div className='overflow-hidden rounded-lg w-full md:w-[20%] h-[100%] flex items-center justify-center'>
                            <img src={`https://huda.descode.id/uploads/${product && product?.product_image}`} alt="fotoProduct" className='w-full md:w-[80%] h-auto' />
                        </div>
                        <div className='w-full md:w-[80%] pt-4 md:pt-0 md:flex px-2 md:px-5'>
                            <div className='w-full md:w-[80%]'>
                                <h3 className='text-black font-bold mb-5 text-[20px] w-[92%]'>{product && product?.product_name}</h3>
                                <p className='text-[14px] text-slate-500 w-[96%]'>Size: {product && product?.product_size}, Color: {product && product?.product_color},  Type: {product && product?.product_type}</p>
                                <div className='w-max flex items-center mt-4 h-max'>
                                    <div onClick={() => handleRemoveProduct(product && product?.idCart)} className='rounded-full bg-red-500 mt-5 hover:brightness-[90%] active:scale-[0.98] cursor-pointer w-[40px] h-[40px] flex items-center justify-center text-white shadow-lg'>
                                        <FaTrash size={14} />
                                    </div>  
                                    <div className='w-max flex items-center ml-6 mt-5 h-max'>
                                        <div onClick={() => product && product?.quantityInCart === 1 ? null : handleMinus(product && product, -1)} className={`w-[30px] ${product && product?.quantityInCart === 1 ? 'bg-slate-400 cursor-not-allowed hover:brightness-[100%]' : 'bg-slate-200 cursor-pointer hover:brightness-[90%] active:scale-[0.98]'} duration-100 h-[30px] rounded-md flex items-center justify-center p-1`}>
                                            <FaMinus size={16} />
                                        </div>
                                        <div className='text-center mx-2 w-[30px] h-max'>{product && (product?.quantityInCart || 0)}</div>
                                        <div onClick={() => handlePlus(product && product, 1)} className='w-[30px] bg-slate-200 active:scale-[0.98] hover:brightness-[90%] duration-100 h-[30px] rounded-md flex items-center justify-center cursor-pointer p-1'>
                                            <FaPlus size={16} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="md:hidden mt-6" />
                            <div className='relative w-full md:w-[20%] h-full'>
                                <h3 className='w-max font-bold text-black text-[20px] md:mt-0 mt-3 md:mt-5 md:text-[16px]'>{ToRupiah(product && product?.total_price)}</h3>
                                <div className='absolute bottom-6 right-5 rounded-full px-3 py-1 bg-blue-500 font-normal text-center text-white text-[14px] hidden md:inline'>
                                    {product && product?.idCart}
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            ):
                <div className='w-full h-full rounded-lg text-center flex justify-center items-center'>
                    <Link to={'/'}>
                        <img src={Cart} alt="cartIcon" className='w-[28px]' />
                    </Link>
                    <p className='text-[18px] ml-4 text-slate-500'>Your shopping cart is still empty</p>
                </div>
        } 
    </>
  )
}

export default ListProductInCart
