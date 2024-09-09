import React, { useState } from 'react';
import { FaCartPlus, FaList, FaTimes, FaUser } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Logo } from '../../assets';
import { Button } from '../../component';

interface navbarProps {
    type?: 'auth' | 'default',
    active?: boolean,
    onClick?: () => void
}

const Navbar: React.FC<navbarProps> = ({type = 'default', active, onClick}) => {
    
    const cart = useSelector((state: any) => state.cartReducer.dataOrders);
    const [searchTerm, setSearchTerm] = useState('');

    const navigate = useNavigate()
    
    const handleSearch = () => {
        localStorage.removeItem('name')
        localStorage.removeItem('brand')
        localStorage.removeItem('size')
        localStorage.removeItem('color')
        localStorage.setItem('name', searchTerm);

        navigate(`/list-product?name=${encodeURIComponent(searchTerm)}`);
    }

    switch (type) {
        case "auth":
            return (
                <div className='w-screen h-[80px] bg-white shadow-md px-[50px] py-[16px] flex items-center justify-between'>
                <Link to='/'>
                    <div className='flex cursor-pointer hover:brightness-[90%] items-center h-[40px] w-[20%]'>
                        <img src={Logo} alt='logo brand' className='w-[90px]' />
                        <h2 className='text-[20px] font-bold ml-2'>SportivaHub</h2>
                    </div>
                </Link>
                <div className='flex items-center h-[50px] w-[60%]'>
                    <div className='w-full flex overflow-hidden item-center rounded-lg h-full border-2 border-blue-500'>
                        <input placeholder='Find the product you need...' name='search' onChange={(e) => setSearchTerm(e.target.value)} className='w-[80%] border-0 outline-0 h-full bg-white text-[16px] px-3' />
                        <div className='w-[20%] ml-2 h-full bg-blue-500 flex items-center justify-center cursor-pointer hover:brightness-[90%]' onClick={() => handleSearch()}>
                            <p className='text-white font-bold text-[14px]'>Search</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-end items-center h-[40px] w-[20%]'>
                  <Button text='Signup' status='outline' />
                  <Button text='Signin' status='primary' style='ml-3' />
                </div>
            </div>
            )
        default: 
            return  (
                <>
                    {/* Sidebare in mobile device */}
                    <div className={`fixed left-0 top-0 ${active ? 'left-[0%] z-[9999999]' : 'left-[-110%] z-[-1]'} w-screen h-screen shadow-lg overflow-hidden bg-blue-500 transition-all duration-300 p-5`}>
                        <div className='rounded-full right-5 top-5 shadow-lg border border-white absolute bg-white flex items-center justify-center cursor-pointer text-[18px] w-[45px] h-[45px] p-1 hover:brightness-[90%] text-red-500 active:scale-[0.97]' onClick={onClick}>
                            <FaTimes />
                        </div>

                        <div className='flex items-center h-[50px] w-[100%] mt-[100px]'>
                            <div className='w-full flex overflow-hidden item-center rounded-lg h-full'>
                            <input placeholder='Find the product you need...' name='search' onChange={(e) => setSearchTerm(e.target.value)} className='w-[68%] border-0 outline-0 h-full bg-white text-[16px] px-3' />
                            <div className='w-[32%] h-full bg-slate-300 flex items-center justify-center cursor-pointer hover:brightness-[90%]' onClick={() => handleSearch()}>
                                    <p className='text-white font-bold text-[14px]'>Search</p>
                                </div>
                            </div>
                        </div>
                        <div className='h-[40px] w-full text-white'>
                            <Link to='/profileUser'>
                                <div className='flex border-b border-b-slate-300 mb-4 pb-4 items-center w-full mt-6 cursor-pointer hover:brightness-[90%] active:scale-[0.98]'>
                                    <small className='text-white text-[18px] ml-4 w-max'>Profile</small>
                                </div>
                            </Link>
                            <Link to='/buy/history'>
                                <div className='flex border-b border-b-slate-300 mb-4 pb-4 items-center w-full mt-6 cursor-pointer hover:brightness-[90%] active:scale-[0.98]'>
                                    <small className='text-white text-[18px] ml-4 w-max'>History</small>
                                </div>
                            </Link>
                            <Link to='/my-cart'>
                                <div className='relative flex border-b border-b-slate-300 mb-4 pb-4 items-center w-full mt-6 cursor-pointer hover:brightness-[90%] active:scale-[0.98]'>
                                    <div className='absolute top-[-10px] left-[80px] text-blue-500 rounded-full flex items-center justify-center bg-white font-bold text-[12px] w-[22px] h-[22px] p-1'>
                                        {cart && cart?.length}  
                                    </div>
                                    <small className='text-white text-[18px] ml-4 w-max'>My Cart</small>                            
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className='w-screen h-[60px] md:h-[80px] bg-white shadow-md px-[20px] md:px-[50px] py-[16px] flex items-center justify-between'>
                        <Link to='/' className='absolute md:relative'>
                            <div className='flex cursor-pointer hover:brightness-[90%] items-center h-[40px] w-[20%]'>
                                <img src={Logo} alt='logo brand' className='w-[250px] md:w-[90px]' />
                                <h2 className='text-[20px] font-bold ml-2 md:inline hidden'>SportivaHub</h2>
                            </div>
                        </Link>
                        <div onClick={onClick} className='ml-auto w-[45px] h-[40px] border flex md:hidden flex-col items-center justify-between border-slate-300 rounded-md p-1 cursor-pointer active:scale-[0.97] hover:brightness-[90%]'>
                            <div className='w-[100%] h-[5px] bg-slate-300'></div>
                            <div className='w-[100%] h-[5px] bg-slate-300'></div>
                            <div className='w-[100%] h-[5px] bg-slate-300'></div>
                        </div>
                        <div className='hidden md:flex ml-auto items-center h-[50px] w-[80%] md:w-[60%]'>
                            <div className='w-full flex overflow-hidden item-center rounded-lg h-full border-2 border-blue-500'>
                            <input placeholder='Find the product you need...' name='search' onChange={(e) => setSearchTerm(e.target.value)} className='w-[80%] border-0 outline-0 h-full bg-white text-[16px] px-3' />
                            <div className='w-[20%] ml-2 h-full bg-blue-500 flex items-center justify-center cursor-pointer hover:brightness-[90%]' onClick={() => handleSearch()}>
                                    <p className='text-white font-bold text-[14px]'>Search</p>
                                </div>
                            </div>
                        </div>
                        <div className='hidden md:flex justify-end items-center h-[40px] w-[20%]'>
                            <Link to='/profileUser'>
                                <div className='flex flex-col items-center justify-center w-[40px] mt-2 rounded-full cursor-pointer hover:brightness-[90%] active:scale-[0.98] mr-[50px]'>
                                    <FaUser size={18} />
                                    <small className='text-slate-400 mt-2 w-max'>Profile</small>
                                </div>
                            </Link>
                            <Link to='/buy/history'>
                                <div className='flex flex-col items-center justify-center w-[40px] mt-2 rounded-full cursor-pointer hover:brightness-[90%] active:scale-[0.98] mr-[20px]'>
                                    <FaList size={18} />
                                    <small className='text-slate-400 mt-2 w-max'>History</small>
                                </div>
                            </Link>
                            <Link to='/my-cart'>
                                <div className='relative flex flex-col items-center justify-center w-[40px] mt-2 rounded-full cursor-pointer hover:brightness-[90%] active:scale-[0.98] ml-[30px]'>
                                    <div className='absolute top-[-10px] right-[-8px] text-white rounded-full flex items-center justify-center bg-blue-500 font-bold text-[12px] w-[22px] h-[22px] p-1'>
                                        {cart && cart?.length}  
                                    </div>
                                    <FaCartPlus size={18} />
                                    <small className='text-slate-400 mt-2 w-max'>My Cart</small>                            
                                </div>
                            </Link>
                        </div>
                    </div>
                </>
            )
    }
}

export default Navbar
