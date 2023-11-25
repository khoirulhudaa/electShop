import { FaArrowLeft } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from '../../component';
import ToRupiah from '../../helpers/toRupiah';
import { Footer, Navbar } from '../../layout';
import { CartInterface } from '../../utils/interfaces/cartInterface';
import ListProductInCart from '../../component/listProduct/listProductInCart';

const MyCart = () => {

    const cart = useSelector((state: any) => state.cartReducer.dataOrders)
    const totalPrice = () => {
        return cart.reduce((total: number, product: CartInterface) => total + (product?.total_price || 0), 0)
    } 

  return (
    <>
        <Navbar />

        <section className='w-screen px-[20px] md:px-[60px] py-[20px] h-max flex'>
            <div className='w-full flex items-center py-[10px]'>
            <Link to='/'>
                <div className='rounded-full mr-3 md:ml-[-10px] bg-blue-500 text-white border border-slate-300 cursor-pointer active:scale-[0.98] hover:brightness-[90%] flex items-center justify-center p-1 w-[30px] h-[30px]'>
                    <FaArrowLeft size={14} />
                </div>
            </Link>
            <h2 className='flex text-[20px] font-bold items-center'>My cart ({cart.length})</h2>
            </div>
        </section>

        <section className='w-screen h-max md:flex px-[20px] md:px-[50px] pb-[40px]'>
            <div className='w-full md:w-[70%] mr-6 p-4 rounded-lg shadow-lg bg-slate-100 border border-slate-300'>
                <ListProductInCart />
            </div>
            <div className='w-full md:w-[30%] mt-6 md:mt-0 rounded-lg bg-slate-100 overflow-hidden shadow-lg p-4 h-max'>
                <div className='w-full border-b border-b-slate-400 pb-3'>
                    <div className='w-full justify-between mb-5 px-3 flex items-center'>
                        <p className='text-slate-500 font-normal'>Subtotal : </p>
                        <p className='text-slate-500 font-normal'>{ToRupiah(totalPrice())}</p>
                    </div>
                    <div className='w-full justify-between mb-5 px-3 flex items-center'>
                        <p className='text-slate-500 font-normal'>Total product : </p>
                        <p className='text-slate-500 font-normal'>{cart && cart?.length}</p>
                    </div>
                </div>
                <div className='w-full flex items-center h-max py-[16px] justify-center justify-between'>
                    <h3 className='text-[16px] font-bold text-black'>Total : </h3>
                    <h3 className='text-[18px] font-bold text-black'>{ToRupiah(totalPrice())}</h3>
                </div>
                {
                    cart?.[0]?.shop_id ? (
                        <Link to={`/my-cart/${cart?.[0]?.shop_id}/checkout`}>
                            <Button status='primary' text='Checkout' style='mt-3 w-full' />
                        </Link>
                    ) :
                        <Button disabled={true} status='primary' text='Checkout' style='mt-3 w-full' />
                }
            </div>
        </section>

        <Footer /> 
    </>
  )
}

export default MyCart
