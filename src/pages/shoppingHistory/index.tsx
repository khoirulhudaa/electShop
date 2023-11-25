import { FaArrowLeft, FaCheckCircle } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button } from '../../component'
import { ListHistory } from '../../component/listProduct'
import { Footer, Navbar } from '../../layout'

const ShoppingHistory = () => {

  const auth = useSelector((state: any) => state.authReducer.auth)
  
  return (
    <>
      <Navbar /> 

      <section className='w-screen px-[20px] md:px-[60px] py-[20px] h-max flex'>
          <div className='w-full flex items-center py-[10px]'>
            <Link to='/my-cart'>
                <div className='rounded-full mr-3 md:ml-[-10px] bg-blue-500 text-white border border-slate-300 cursor-pointer active:scale-[0.98] hover:brightness-[90%] flex items-center justify-center p-1 w-[30px] h-[30px]'>
                    <FaArrowLeft size={14} />
                </div>
            </Link>
            <h2 className='flex text-[20px] font-bold items-center'>History</h2>
          </div>
      </section>

      <section className='w-screen h-max md:flex px-[20px] md:px-[50px] pb-[40px]'>
          <div className='w-full md:w-[70%] mr-6 px-2 md:px-8 py-2 rounded-lg shadow-lg bg-slate-100 border border-slate-300'>
            <ListHistory />            
          </div>
          <div className='w-full md:w-[30%] rounded-lg bg-slate-100 overflow-hidden shadow-lg pb-2 pt-2 h-max'>
            <div className='w-full p-4 h-max rounded-lg overflow-hidden'>
                <div className='w-full border-b border-slate-300 h-max w-full mb-4 pb-4 flex items-center'>
                    <div className='w-[50px] h-[50px] rounded-full overflow-hidden shadow-lg bg-[black]'>
                      <img src={`https://huda.descode.id/uploads/${auth?.consumer_image}`} className='w-full h-full' alt="profilePicture" />
                    </div>
                    <div className='pl-3'>
                        <h3 className='text-black font-bold'>{auth?.consumer_name}</h3>
                        <small className='text-slate-500 text-[12px]'>ID Consumer: {auth?.consumer_id}</small>
                    </div>
                </div>
                <div className='flex items-center'>
                    <FaCheckCircle size={18} style={{marginRight: '19px'}} />
                    <p>Verified Consumer</p>
                </div>
                <Link to='/profileUser'>
                    <Button status='primary' text='View profile' style='mt-8 w-full' />
                </Link>
            </div>
          </div>
      </section>

      <Footer /> 
    </>
  )
}

export default ShoppingHistory
