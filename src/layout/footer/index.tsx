import { AppStore, Logo, PlayStore } from '../../assets'

const Footer = () => {
  return (
    <>
      <div className='w-screen h-max md:flex px-[20px] md:px-[40px] mt-10 md:mt-0 py-[20px] md:py-[80px]'>
        <div className='w-full md:flex rounded-lg h-max'>
          <div className='w-full md:w-[35%] h-max'>
            <div className='flex items-center w-full md:pl-[20px]'>
              <img src={Logo} className='w-[60px] h-[60px] mr-4' alt="logoBrand" />
              <h2 className='font-bold text-[24px] text-blue-500'>ElectShop</h2>
            </div>
          </div>
          <div className='w-full md:w-[65%] gap-4 md:flex justify-between'>
            <div className='w-full my-7 md:border-none border-b border-b-slate-300 pb-6 md:pb-0 md:my-0 md:w-[30%]'>
              <h3 className='font-bold text-black text-[18px] mb-4'>About Us</h3>
              <ul className='list-none'>
                <a href="#" className='text-slate-500'>
                  <li className='mb-3 text-slate-500'>About Us</li>
                </a>
                <a href="#" className='text-slate-500'>
                  <li className='mb-3 text-slate-500'>FInd Store</li>
                </a>
                <a href="#" className='text-slate-500'>
                  <li className='mb-3 text-slate-500'>Categories</li>
                </a>
                <a href="#" className='text-slate-500'>
                  <li className='mb-3 text-slate-500'>Blogs</li>
                </a>
              </ul>
            </div>
            <div className='w-full my-7 md:border-none border-b border-b-slate-300 pb-6 md:pb-0 md:my-0 md:w-[30%]'>
              <h3 className='font-bold text-black text-[18px] mb-4'>Information</h3>
              <ul className='list-none'>
                <a href="#" className='text-slate-500'>
                  <li className='mb-3 text-slate-500'>About Us</li>
                </a>
                <a href="#" className='text-slate-500'>
                  <li className='mb-3 text-slate-500'>FInd Store</li>
                </a>
                <a href="#" className='text-slate-500'>
                  <li className='mb-3 text-slate-500'>Categories</li>
                </a>
                <a href="#" className='text-slate-500'>
                  <li className='mb-3 text-slate-500'>Blogs</li>
                </a>
              </ul>
            </div>
            <div className='w-full my-7 md:border-none border-b border-b-slate-300 pb-6 md:pb-0 md:my-0 md:w-[30%]'>
              <h3 className='font-bold text-black text-[18px] mb-4'>For Users</h3>
              <ul className='list-none'>
                <a href="#" className='text-slate-500'>
                  <li className='mb-3 text-slate-500'>About Us</li>
                </a>
                <a href="#" className='text-slate-500'>
                  <li className='mb-3 text-slate-500'>FInd Store</li>
                </a>
                <a href="#" className='text-slate-500'>
                  <li className='mb-3 text-slate-500'>Categories</li>
                </a>
                <a href="#" className='text-slate-500'>
                  <li className='mb-3 text-slate-500'>Blogs</li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full md:flex items-center justify-between px-[20px] md:px-[60px]'>
        <small className='text-slate-500 text-[14px]'>© 2023 Swiftvel. All rights reserved.</small>
        <div className='w-full md:w-max h-max flex items-center'>
          <a href="#">
            <img src={AppStore} className='my-6 w-[150px] mr-5' alt="appStore" />
          </a>
          <a href="#">
          <img src={PlayStore} className='w-[150px]' alt="playStore" />
          </a>
        </div>
      </div>
    </>
  )
}

export default Footer
