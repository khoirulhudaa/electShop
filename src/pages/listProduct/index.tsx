import { useEffect, useState } from 'react'
import { FaCartPlus, FaChevronRight, FaFilter } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Block, Grid, Search } from '../../assets'
import { Button, Question } from '../../component'
import handleCart from '../../helpers/addToCart'
import generateRandomCharacter from '../../helpers/randomCharacters'
import toRupiah from '../../helpers/toRupiah'
import { DropDown, Footer, Navbar } from '../../layout'
import API from '../../service/api'

const ListProduct = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [queryParams, setQueryParams] = useState<Record<any, string>>({});
  
  const location = useLocation()
  const [display, setDisplay] = useState<string>('grid')
  const [activeBrand, setActiveBrand] = useState<string>('')
  const [activeSize, setActiveSize] = useState<string>('')
  const [activeColor, setActiveColor] = useState<string>('')
  const [showMenu, setShowMenu] = useState<boolean>(true)
  const [statusGet, setStatusGet] = useState<boolean>(true)

  const navigate = useNavigate();
  const brands = useSelector((state: any) => state.productReducer.brand)
  const sizes = useSelector((state: any) => state.productReducer.size)
  const colors = useSelector((state: any) => state.productReducer.color)
  const [active, setActive] = useState<any>(false)

  const dispatch = useDispatch()

  useEffect(() => {
    const getDataProduct = async () => {

        const nameStorage = localStorage.getItem('name')
        const brandStorage = localStorage.getItem('brand')
        const sizeStorage = localStorage.getItem('size')
        const colorStorage = localStorage.getItem('color')

        const data = {
          ...queryParams,
          name: nameStorage !== null && nameStorage !== undefined ? nameStorage : undefined,
          brand: brandStorage !== null && brandStorage !== undefined ? brandStorage : undefined,
          size: sizeStorage !== null && sizeStorage !== undefined ? sizeStorage : undefined,
          color: colorStorage !== null && colorStorage !== undefined ? colorStorage : undefined,
        }

        setActiveBrand(brandStorage !== null && brandStorage !== undefined ? brandStorage : activeBrand)
        setActiveSize(sizeStorage !== null && sizeStorage !== undefined ? sizeStorage : activeSize)
        setActiveColor(colorStorage !== null && colorStorage !== undefined ? colorStorage : activeColor)

        const response = await API.getAllProduct(data)
        setProducts(response.data.data)
        setStatusGet(false)
    }

    getDataProduct()
}, [queryParams, statusGet, localStorage.getItem('name')])

  const handleMainMenu = () => {
    setShowMenu(!showMenu)
  }

  const handleActiveSidebare = () => {
    setActive(!active)
  }

  const handleChangeQuery = (name: string, e: string) => {
    const newQueryParams = { ...queryParams, [name]: e };
    setQueryParams(newQueryParams);

    
    const newSearchParams = new URLSearchParams(newQueryParams);
    navigate({ search: newSearchParams.toString() });
   
    if(name == 'brand') {
      localStorage.setItem('brand', e)
      setActiveBrand(e)
    }else if(name === 'size') {
      localStorage.setItem('size', e)
      setActiveSize(e)
    }else {
      localStorage.setItem('color', e)
      setActiveColor(e)
    }
  }

  const handleReset = () => {
    localStorage.removeItem('name')
    localStorage.removeItem('brand')
    localStorage.removeItem('size')
    localStorage.removeItem('color')

    navigate('/list-product')
    setStatusGet(true)
  }

  return (
    <>
      <Navbar onClick={() => handleActiveSidebare()} active={active} />
      
      <section className='w-screen px-[20px] md:px-[60px] py-[20px] h-max flex'>
        <div className='w-full flex items-center py-[10px]'>
          <p className='flex items-center'><Link to='/' className='text-blue-500'>Home</Link> <FaChevronRight size={13} style={{fontSize: '10px', marginLeft: '6px', marginRight: '6px'}} /> <p className='text-slate-500'>{location.pathname.substring(1)}</p></p>
        </div>
      </section>

      <section className='w-full flex h-max px-[20px] md:px-[60px]'>
        
        <div className='md:block hidden w-[20%] h-max pb-[20px] px-[0px] border-t-slate-300'>
          <Button text='Clear filter' type='outline-with-icon' style='mb-8' handleClick={() => handleReset()} icon={<FaFilter />} />
          <DropDown title='Brand products' onClick={(e: string) => handleChangeQuery('brand', e)} listMenu={brands} active={activeBrand} />
          <DropDown title='Size products' onClick={(e: string) => handleChangeQuery('size', e)} listMenu={sizes} active={activeSize} />
          <DropDown title='Price ranges' onClick={(e: string) => handleChangeQuery('color', e)} listMenu={colors} active={activeColor} />
        </div>

        <div className={`w-full md:w-[80%] overflow-y-auto transition-all duration-300 ease ${showMenu ? "h-100vh max-h-[100vh] opacity-100" : "h-auto max-h-[75px]"} md:px-[40px] pb-[20px]`}>

          <div className='w-full py-[14px] rounded-lg border-2 border-slate-300 bg-slate-100 mb-[20px] p-[12px] flex  justify-between items-center'>
            <p>{products ? products.length : 0} items in brand <b className='md:flex hidden'>{localStorage.getItem('brand') ? localStorage.getItem('brand') : 'all brands'}, {localStorage.getItem('size') ? localStorage.getItem('size') : 'all sizes'}, {localStorage.getItem('color') ? localStorage.getItem('color') : 'all colors'}</b></p>
            <div className='w-max flex items-center'>
              <div onClick={() => handleMainMenu()} className='w-[35px] rounded-lg border-2 border-slate-500 h-[35px] flex items-center justify-center cursor-pointer hover:brightness-[80%] duration-200'>
                <FaChevronRight size={14} style={{transition: "0.4s ease",transform: `rotate(${showMenu ? "90deg" : "0deg"})`}} />
              </div>
              <div onClick={() => setDisplay('bloack')} className='w-[35px] mx-2 rounded-lg border-2 border-slate-500 h-[35px] flex items-center justify-center cursor-pointer hover:brightness-[80%] duration-200'>
                <img src={Grid} alt="gridMode" className='w-[60%] opacity-[0.7]' />
              </div>
              <div onClick={() => setDisplay('grid')} className='w-[35px] rounded-lg border-2 border-slate-500 h-[35px] flex items-center justify-center cursor-pointer hover:brightness-[80%] duration-200'>
                <img src={Block} alt="blockMode" className='w-[50%] opacity-[0.7]' />
              </div>
            </div>
          </div>

          <div className='w-full flex flex-wrap justify-between h-max px-[10px] py-[20px] md:p-[20px] bg-slate-100 rounded-lg overflow-hidden'>
            
            {
              products ? (
                products.map((data: any, index: number) => (
                  <div key={index} className={`${display === "grid" ? "flex w-full mr-0 h-[280px]" : "block w-full md:w-[31%] mx-2 h-max"} rounded-lg bg-white shadow-sm mb-[24px] overflow-hidden`}>
                    <div className={`${display === "grid" ? "w-[30%] min-h-max" : "w-full h-[200px]"} flex items-center justify-center overflow-hidden`}>
                      <img src={`https://huda.descode.id/uploads/${data?.product_image}`} alt="fotoProduct" className='rounded-lg w-[85%] h-auto my-auto' />
                    </div>
                    <div className={`${display === "grid" ? "e-full md:w-[70%]" : "w-full"} relative w-[70%] border-l my-auto border-l-slate-300 h-[90%] px-[20px] py-[20px]`}>
                      <div className='absolute bg-green-500 text-white rounded-full px-3 py-1 right-4 top-1'>
                        {data?.shop_name}
                      </div>
                      <h3 className='text-black w-full mb-6 text-[18px]'>{data?.product_name}</h3>
                      <h2 className='text-[24px] font-bold mb-2'>{toRupiah(data?.product_price)}</h2>
                      <div className='w-max flex  items-center'>
                      </div>
                      <p className={`${display === "grid" ? "block" : "hidden"} mt-[20px] text-[14px] overflow-hidden max-w-full whitespace-nowrap overflow-ellipsis text-slate-500 leading-[1.6em]`}>
                        {data?.product_description}
                      </p>
                      <div className='flex items-center mt-4 w-max'>
                        <Link key={index} to={`/detail-product/${data?.product_id}`}>
                          <p className='text-blue-500 font-bold text-[16px]'>View details</p>
                        </Link>
                        <div className='w-[35px] ml-3 cursor-pointer hover:brightness-[85%] duration-100 text-white rounded-full bg-blue-500 h-[35px] text-[14px] flex items-center justify-center' onClick={() => handleCart(generateRandomCharacter(5), data, dispatch)}>
                            <FaCartPlus />
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ):
                <div className='flex items-center'>
                  <img src={Search} alt="searchIcon" className='w-[40px] mr-3' />
                  <p>The product <b><i>specifications</i></b> were not found!</p>
                </div>
            }
          
          </div>
        </div>

      </section>

      {/* Component Question */}
      <Question />
      {/* End component Question */}
      
      <Footer />
    </>
  )
}

export default ListProduct
