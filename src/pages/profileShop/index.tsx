import { useEffect, useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { BgProfile } from '../../assets';
import toRupiah from '../../helpers/toRupiah';
import { Footer, Navbar } from '../../layout';
import API from '../../service/api';

const ProfileShop = () => {

  const [dataShop, setDataShop] = useState<Record<any, string>>({});
  const [dataProducts, setDataProducts] = useState<any[]>([]);

  const dispatch = useDispatch()
  const { shop_id } = useParams()

  useEffect(() => {
    const getDataShop = async () => {
        try {
            const responseShop = await API.getShopById(shop_id);
            const responseProduct = await API.getProductByShopId(shop_id ? shop_id : '');
            setDataShop(responseShop.data.data)
            setDataProducts(responseProduct.data.data)
        } catch (error: any) {
            console.log(error.message);
        }
    };
    
    getDataShop();
}, [dispatch]);

  return (
    <>
      <Navbar /> 

        <section className='w-screen h-max rounded-lg overflow-hidden'>
            <div className='relative rounded-lg w-full overflow-hidden bg-slate-100 h-[300px] md:h-[420px] mb-7'>
            <Link to='/'>
                <div className='absolute left-[25px] md:left-[30px] top-5 m:top-7 z-[4] rounded-full flex bg-white items-center justify-center cursor-pointer active:scale-[0.99] shadow-md w-[40px] h-[40px] hover:brightness-[90%]'>
                    <FaArrowLeft size={14} />
                </div>
            </Link>
            <div className='absolute right-6 md:right-12 bg-white top-1 md:top-3 z-[4] w-max px-4 mx-auto border-2 my-4 justify-center border-slate-300 rounded-full flex text-blue-500 items-center w-[40px] h-[42px]      '>
                <p>Indonesia, Cirebon</p>
            </div>
                <img src={BgProfile} alt="bgProfile" className='hover:scale-[110%] ease hover:brightness-[90%] duration-300 w-full mx-auto relative h-full object-cover' />
            </div>
            <div className='relative mx-auto bottom-[90px] z-[2] w-[110px] h-[110px] overflow-hidden rounded-full mx-auto shadow-lg order-2 border-slate-200 cursor-pointer hover:brightness-[90%] active:scale-[0.99]'>
                <img src={`https://huda.descode.id/uploads/${dataShop ? dataShop?.image_shop : ''}`} alt="fotoProfile" className='object-contain' />
            </div>

            <div className='relative w-full mt-[-60px] h-max md:px-[50px] mb:pb-[60px] rounded-lg overflow-hidden'>
                <h2 className='relative text-center font-bold text-[26px]'>{dataShop ? dataShop?.shop_name : ''}</h2>
                <p className='text-slate-500 text-[15px] text-center relative my-4'>{dataShop ? dataShop?.motto_shop : ''}</p>
                <div className='w-full md:flex h-max'>
                    <div className='w-full md:w-[50%] bg-white px-6 pb-6 mt-[50px] h-max'>
                        <div className='relative w-full mr-[30px] h-max rounded-lg bg-white border border-slate-300 shadow-lg'>
                            <Tabs>
                                <TabList className='flex items-center justify-between'>
                                    <Tab className='w-[100%] h-max py-[12px] bg-slate-100 border-0 outline-0 text-center pl-6 border-b-2 text-blue-500 border-b-blue-500 border-r border-r-slate-300 cursor-pointer hover:brightness-[90%] duration-200 flex items-center'>Profile</Tab>
                                </TabList>
                                <div className='w-full h-max overflow-hidden relative'>
                                    <TabPanel className='w-full h-max p-[20px] relative top-0 left-0'>
                                        <div className='w-full h-max flex'>
                                            <div className='w-[95%] md:w-1/2 h-max flex flex-col justify-start'>
                                                <div className='w-full h-max py-1 mt-6 rounded-lg'>
                                                    <p className='mb-4 font-bold text-[18px]'>Email</p>
                                                    <p className='text-slate-500 text-[15px] overflow-hidden max-w-[90%] whitespace-nowrap overflow-ellipsis text-slate-500 leading-[1.6em]'>{dataShop ? dataShop?.email_seller : ''}</p>
                                                </div>
                                                <div className='w-full h-max py-1 mt-4 md:mt-10 rounded-lg'>
                                                    <p className='mb-4 font-bold text-[18px]'>Telephone</p>
                                                    <p className='text-slate-500 text-[15px]'>{dataShop ? dataShop?.telephone_seller : ''}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='w-full h-max py-1 px-[12px] mt-4 md:mt-10 mb-16 rounded-lg'>
                                            <p className='mb-4 font-bold text-[18px]'>Address</p>
                                            <p className='w-[90%] text-slate-500 text-[15px]'>
                                                {dataShop ? dataShop?.shop_address : ''}
                                            </p>
                                        </div>
                                        <div className='absolute bottom-0 left-0 w-full h-max py-3 px-5 bg-slate-100 md:inline hidden'>
                                            <small className='text-slate-500 text-[14px]'><b>Note :</b> Store data is managed by the shop owner</small>
                                        </div>
                                    </TabPanel>
                                </div>
                            </Tabs>
                        </div>
                    </div>
                    <div className='w-full md:w-[50%] bg-white border-l border-l-slate-300 rounded-lg px-3 flex justify-between flex-wrap mt-[30px] md:mt-[50px] flex h-max'>
                        <div className='w-full mx-3 md:mx-2 rounded-md bg-blue-200 text-blue-500 pl-3 py-2 mb-5 border border-blue-500'>
                            Products by shop
                        </div>
                        {
                            dataProducts ? (
                                dataProducts.slice(0, 4)
                                .map((data, index) => (
                                    <div key={index} className={`block w-full md:w-[46%] border border-slate-300 mx-2 h-max rounded-lg shadow-sm mb-[24px] overflow-hidden`}>
                                        <div className={`w-full h-[140px] flex items-center justify-center overflow-hidden`}>
                                            <img src={`https://huda.descode.id/uploads/${data?.product_image}`} alt="fotoProduct" className='w-auto md:scale-[0.8] h-full my-auto' />
                                        </div>
                                        <div className={`w-full my-auto h-[90%] px-[20px] py-[20px]`}>
                                            <h3 className='text-black w-full mb-2 tetx-[16px]'>{data?.product_name}</h3>
                                            <h2 className='text-[24px] font-bold mb-2'>{toRupiah(data?.product_price)}</h2>
                                            <div className='w-max flex  items-center'>
                                            </div>
                                            <Link to={`/detail-product/${data?.product_id}`}>
                                            <p className='text-blue-500 font-bold text-[16px] mt-3'>View Details</p>
                                            </Link>
                                        </div>
                                    </div>

                                ))
                            ) :
                                <p>Product not found!</p>
                        }
                    </div>
                </div>
            </div>
        </section>

      <Footer /> 
    </>
  )
}

export default ProfileShop
