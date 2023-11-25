import React, { useEffect, useState } from "react"
import { FaStore, FaTrash } from "react-icons/fa"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import toRupiah from "../../helpers/toRupiah"
import API from "../../service/api"
import { Cart } from "../../assets"
import Alert from "../alert"
import Button from "../button"

const ListHistory:React.FC = () => {
    
    const auth = useSelector((state: any) => state.authReducer.auth)
    const [dataHistory, setDataHistory] = useState<any[]>([])
    const [getStatus, setGetStatus] = useState<boolean>(false)

    useEffect(() => {
        const getHistoryConsumerById = async () => {
            try {
                const response = await API.getAllHistoryBuy(auth?.consumer_id)
                setDataHistory(response.data.data)
                setGetStatus(false)
            } catch (error: any) {
                console.log(error.message)
            }
        }

        getHistoryConsumerById()
    }, [getStatus])

    const handleRemoveHistory = async (history_id: string, idCart: string) => {
        const response = await API.removeHistoryConsumer(history_id, idCart)
        if(response.data.status === 200) {
            Alert({
                title:'success', 
                text:'Delete history!' ,
                icon:'success',
                showCancelButton: false,
            })
            setGetStatus(true)
        }
    }

    const handlePack = async (history_id: string, status: string) => {
        const response = await API.updateStatusPayment(history_id, status)
        if(response.data.message) {
            Alert({
                title:'success', 
                text:`${response.data.message}`,
                icon:'success',
                showCancelButton: false,
            })
            setGetStatus(true)
        }
    }

    const handleCancel = async (history_id: string, status: string) => {
        const response = await API.updateStatusPayment(history_id, status)
        if(response.data.message) {
            Alert({
                title:'success', 
                text:`${response.data.message}`,
                icon:'success',
                showCancelButton: false,
            })
            setGetStatus(true)
        }
    }

  return (
    <>
    {
        dataHistory && dataHistory
            .filter((data) => data.email_consumer === auth?.email_consumer)
            .length !== 0 ? (
                dataHistory?.map((dataMain) => (
                    dataMain.products.map((data: any, index: number) => (
                        <div key={index} className={`relative md:flex w-full mt-4 h-max rounded-lg bg-white shadow-sm mb-[24px] overflow-hidden`}>
                            <div className={`w-full md:w-[30%] min-h-max flex items-center justify-center overflow-hidden`}>
                                <img src={`https://huda.descode.id/uploads/${data?.product_image}`} alt="fotoProduct" className='w-[80%] md:w-[55%] my-auto' />
                            </div>
                            <div className={`relative w-full md:w-[70%] border-l my-auto border-l-slate-300 h-[90%] px-[20px] py-[20px]`}>
                                <div className='absolute rounded-full right-[25%] bottom-5 hover:brightness-[90%] active:scale-[0.98] cursor-pointer w-[40px] h-[40px] flex items-center justify-center text-green-500 shadow-lg'>
                                    <small className='bg-blue-500 text-white rounded-full flex items-center justify-center w-[40px] h-[40px] text-[12px] absolute'>{data?.quantityInCart} Pcs</small>
                                </div>
                                <Link to={`/profileShop/${data?.shop_id}`}>
                                    <div className='absolute rounded-full border border-green-500 right-[14%] bottom-5 hover:brightness-[90%] active:scale-[0.98] cursor-pointer w-[40px] h-[40px] flex items-center justify-center text-green-500 shadow-lg'>
                                        <FaStore size={14} />
                                    </div>
                                </Link>
                                <div onClick={() => handleRemoveHistory(dataMain?.history_id, data?.idCart ? data?.idCart : "")} className='absolute rounded-full bg-red-500 right-5 bottom-5 hover:brightness-[90%] active:scale-[0.98] cursor-pointer w-[40px] h-[40px] flex items-center justify-center text-white shadow-lg'>
                                    <FaTrash size={14} />
                                </div>
                                <h3 className='text-black w-full mb-6 tetx-[16px]'>{data?.product_name}</h3>
                                <h2 className='text-[24px] font-bold mb-2'>{toRupiah(data?.total_price)}</h2>
                                <hr className="mb-3" />
                                {
                                    dataMain?.status === 'PENDING' ? (
                                        <Button status="delete"  handleClick={() => handleCancel(dataMain?.history_id, 'CANCELED')} text="Canceled" />
                                    ) :
                                        <Button status="primary" disabled={dataMain?.status !== 'ON-DELIVERY'} handleClick={() => handlePack(dataMain?.history_id, 'ACCEPTED')} text="Accepted" />
                                }
                                <div className={`absolute right-[25px] top-[12px] rounded-full w-max h-max px-[10px] text-[14px] py-[6px] text-white ${dataMain?.status === 'CANCELED' ? 'bg-red-500' : 'bg-blue-500'} flex justify-center items-center`}>
                                    {dataMain?.status}
                                </div>
                            </div>
                        </div>
                    ))
                ))
            ): (
                <div className='w-full h-full rounded-lg mt-4 mb-[24px] text-center flex justify-center items-center'>
                    <Link to={'/'}>
                        <img src={Cart} alt="cartIcon" className='w-[28px]' />
                    </Link>
                    <p className='text-[18px] ml-4 text-slate-500'>Your shopping cart is still empty</p>
                </div>
            )
        }
    </>
  )
}

export default ListHistory
