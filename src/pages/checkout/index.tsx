import { useEffect, useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { Button } from '../../component';
import ErrorMessage from '../../component/errorMessage';
import InputField from '../../component/inputField';
import toRupiah from '../../helpers/toRupiah';
import { Footer, Navbar } from '../../layout';
import { CartInterface } from '../../utils/interfaces/cartInterface';
import { usePaymentFormik } from '../../utils/validations/paymentValidation';

const MyCart = () => {
    
    const { shop_id } = useParams() 
    const [errorMessage, setErrorMessage] = useState<string>("")

    const cart:any = useSelector((state: any) => state.cartReducer.dataOrders)
   
    const totalPrice = () => {
        return cart.reduce((total: number, product: CartInterface) => total + (product?.total_price || 0), 0)
    } 
    
    const handleErrorMessage = (error: any) => {
        setErrorMessage(error)
    }

    const formik = usePaymentFormik({ onError: handleErrorMessage })
    
    useEffect(() => {
        const getPayment = async () => {
            try {
                if(shop_id) {
                    formik.setFieldValue('shop_id', shop_id)
                }
            } catch (error: any) {
                handleErrorMessage(error.message)
                console.log(error.mesage)
            }
        }

        getPayment()
    }, [])
  
    return (
    <>
        {
            errorMessage !== "" ? (
                <>
                  <ErrorMessage error={errorMessage} />
                </>
            ):
                null
        }
        <Navbar />
        <section className='w-screen px-[60px] py-[20px] h-max flex'>
            <div className='w-full flex items-center py-[10px]'>
            <Link to='/my-cart'>
                <div className='rounded-full mr-3 ml-[-10px] bg-blue-500 text-white border border-slate-300 cursor-pointer active:scale-[0.98] hover:brightness-[90%] flex items-center justify-center p-1 w-[30px] h-[30px]'>
                    <FaArrowLeft size={14} />
                </div>
            </Link>
            <h2 className='flex text-[20px] font-bold items-center'>Checkout</h2>
            </div>
        </section>

        <form onSubmit={formik.handleSubmit}>
            <section className='w-screen h-max flex px-[50px] pb-[40px]'>
                <div className='w-[70%] mr-6 px-8 py-10 rounded-lg shadow-lg bg-slate-100 border border-slate-300'>
                    <div className='w-full flex justify-between mb-8 items-center'>
                        <div className='w-[48%] h-[90px] block'>
                            <InputField 
                                value={formik.values.consumer_name} 
                                name='consumer_name' 
                                label='Your name'
                                type="text"
                                id='Yourname'
                                onError={formik.errors.consumer_name}
                                onTouched={!!formik.touched.consumer_name}
                                onChange={formik.handleChange} 
                                onBlur={formik.handleBlur} 
                                placeholder="Enter your name" 
                            />
                        </div>
                        <div className='w-[48%] h-[90px] block'>
                            <InputField 
                                value={formik.values.post_code} 
                                name='post_code' 
                                label='Post code'
                                type="text"
                                id='post_code'
                                onError={formik.errors.post_code}
                                onTouched={!!formik.touched.post_code}
                                onChange={formik.handleChange} 
                                onBlur={formik.handleBlur} 
                                placeholder="45153" 
                            />
                        </div>
                    </div>
                    <div className='w-full flex mt-7 item-center justify-between'>
                        <div className='w-[48%] h-[90px] block'>
                            <InputField 
                                value="Jawa Barat"
                                disabled={true} 
                                name='province' 
                                label='Province'
                                type="text"
                                id='province'
                            />
                        </div>
                        <div className='w-[48%] h-[90px] block'>
                            <InputField 
                                value="Cirebon"
                                disabled={true} 
                                name='City' 
                                label='City/Regency'
                                type="text"
                                id='city'
                            />
                        </div>
                    </div>
                    <div className='w-full flex flex-col'>
                        <div className='w-full mt-7 h-max block'>
                            <InputField 
                                value={formik.values.description} 
                                name='description' 
                                label='Description'
                                type="text"
                                typeInput='textarea-input'
                                id='description'
                                onError={formik.errors.description}
                                onTouched={!!formik.touched.description}
                                onChange={formik.handleChange} 
                                onBlur={formik.handleBlur} 
                                placeholder="Enter description..." 
                            />
                        </div>
                    </div>
                    <div className='w-full flex flex-col'>
                        <div className='w-full mt-7 h-max block'>
                            <InputField 
                                value={formik.values.address} 
                                name='address' 
                                label='Adress'
                                type="text"
                                typeInput='textarea-input'
                                id='address'
                                onError={formik.errors.address}
                                onTouched={!!formik.touched.address}
                                onChange={formik.handleChange} 
                                onBlur={formik.handleBlur} 
                                placeholder="Enter address" 
                            />
                        </div>
                    </div>
                </div>

                <div className='w-[30%] rounded-lg bg-slate-100 overflow-hidden shadow-lg pb-6 h-max'>
                    <div className='w-full px-[20px] flex items-center h-max py-[16px] justify-center justify-between'>
                        <h3 className='text-[16px] font-bold text-black'>Total : </h3>
                        <h3 className='text-[18px] font-bold text-black'>{toRupiah(totalPrice())}</h3>
                    </div>
                    <Button typeButton='submit' status='primary' text='Pay now' style='mt-4 w-[90%] mx-auto' />
                </div>
            </section>
        </form>

        <Footer /> 
    </>
  )
}

export default MyCart
