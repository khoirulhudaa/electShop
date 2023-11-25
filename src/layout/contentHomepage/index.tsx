import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Shoes } from '../../assets';
import { Button, Question } from '../../component';
import Alert from '../../component/alert';
import { ListProductAllBrand, ListProductEquipment, ListProductShoes, ListRecommended } from '../../component/listProduct';
import { saveBrands, saveColors, saveSizes } from '../../redux/reducers/productSlice';
import API from '../../service/api';
import { useFormikSubscribe } from '../../utils/validations/subscribeValidation';

const ContentHomepage = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [update, setUpdate] = useState(false)

    useEffect(() => {
        const getDataProduct = async () => {
            const response = await API.getAllProduct()
            const dataProducts = response.data.data
            
            const brands = dataProducts.map((data: any) => data.product_brand)
            const sizes = dataProducts.map((data: any) => data.product_size)
            const colors = dataProducts.map((data: any) => data.product_color)
            
            dispatch(saveBrands(brands))
            dispatch(saveSizes(sizes))
            dispatch(saveColors(colors))

            console.log('response data product:', response.data.data)
            setUpdate(false)
        }

        getDataProduct()
    }, [dispatch, update])

    const handleResponse = (response: number) => {
        if(response === 200) {
          Alert({
            title:'success', 
            text:"Thank you for subscribing!" ,
            icon:'success',
            showCancelButton: false,
          })
        } 
      }
      
    const handleError = (error: string) => {
        return (
            Alert({
                title:'Error', 
                text:error ,
                icon:'error',
                showCancelButton: false,
            })
        ) 
    }

    const useFormikSubs = useFormikSubscribe({ onError: handleError, onResponse: handleResponse })

    return (
        <>
            <div className='flex items-center mt-5 px-[20px] md:px-[50px] justify-between w-full'>
                <h2 className='font-bold text-[20px] md:text-[26px] my-[30px]'>Product - All brands</h2>
                <Button text='View all' status='primary' handleClick={() => navigate('/list-product')} style='scale-[0.8]' />
            </div>
            <section className='menuProducts px-[20px] md:px-[50px] py-[10px] pb-[45px] md:pb-[60px] overflow-hidden h-max w-screen flex items-center'>
                <div className='w-max overflow-x-auto'>
                    {/* Al brands */}
                    <div className='w-max overflow-x-auto flex items-center'>
                      <ListProductAllBrand />
                    </div>
                </div>
            </section>

            <section className='menuProducts px-[20px] md:px-[50px] pb-[30px] md:pb-[60px] overflow-hidden h-max w-screen md:flex'>
                <div className='w-full md:w-[30%] h-[300px] overflow-hidden rounded-lg relative'>
                    <div className='absolute left-5 top-5'>
                        <h2 className='font-bold mb-5 text-black text-[28px] w-[59%]'>Shoes</h2>
                    </div>
                    <img src={Shoes} className='w-full h-auto' alt="bgHomeOutdor" />
                </div>
                <div className='w-full md:w-[70%] h-max md:h-[300px] flex flex-wrap'>
                    {/* Brand - Shoes */}
                    <ListProductShoes />
                </div>
            </section>
            
            <section className='menuProducts px-[20px] md:px-[50px] pb-[60px] overflow-hidden h-max w-screen md:flex'>
                <div className='w-full md:w-[30%] h-[300px] overflow-hidden rounded-lg relative'>
                    <div className='absolute left-5 top-5'>
                        <h2 className='font-bold mb-5 text-black text-[28px] w-[59%]'>Equipment</h2>
                    </div>
                    <img src={Shoes} className='w-full h-auto' alt="bgHomeOutdor" />
                </div>
                <div className='w-full md:w-[70%] h-max md:h-[300px] flex flex-wrap'>
                    {/* Brand - Shoes */}
                    <ListProductEquipment />
                </div>
            </section>

            {/* Component Question */}
            <Question />
            {/* End Component Question */}

            <h2 className='font-bold text-[20px] md:text-[26px] my-[30px] ml-[20px]'>Recommended items</h2>
            <section className='menuProducts px-[20px] md:px-[50px] pb-[60px] overflow-hidden h-max w-screen flex items-center'>
                <div className='w-max overflow-x-auto'>
                    {/* Al brands */}
                    <div className='w-max overflow-x-auto flex items-center'>
                      <ListRecommended />
                    </div>
                </div>
            </section>

            <section className='w-screen h-max px-[20px] md:px-[50px]'>
                <div className='w-full bg-gray-100 flex flex-col items-center justify-center text-center py-6 md:py-0 h-max md:h-[300px] rounded-lg overflow-hidden shadow-lg'>
                    <h2 className='text-[20px] md:text-[26px] font-bold text-black mb-2'>Subscribe on our market</h2>
                    <p className='text-[15px] text-slate-500 md:inline hidden'>Get daily news on upcoming offers from many suppliers all over the world</p>
                    <form onSubmit={useFormikSubs.handleSubmit} className='mt-5'>
                        <div className='w-max flex items-center'>
                            <input 
                                type='email' 
                                onChange={useFormikSubs.handleChange} 
                                onBlur={useFormikSubs.handleBlur} 
                                value={useFormikSubs.values.email_consumer} 
                                name='email_consumer' 
                                placeholder='Your email' 
                                className='w-[190px] md:w-[300px] py-[10px] px-4 rounded-lg border border-slate-400 outline-0' 
                            />
                            <Button text='Subscribe' typeButton='submit' status='primary' style='ml-2' />
                        </div>
                    </form>
                </div>
            </section>
        </>
  )
}

export default ContentHomepage
