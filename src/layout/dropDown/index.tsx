import { useState } from "react"
import { FaChevronRight } from "react-icons/fa"

interface dropdownInterface {
    listMenu?: string[],
    title?: string,
    onClick?: (arg: string) => void,
    active?: string
}

const DropDown = ({listMenu, title, onClick, active}: dropdownInterface) => {

  const [brandsActive, setBrandsActive] = useState(true)
  
  const handleBrands = () => {
    setBrandsActive(!brandsActive)
  }

  return (
    <ul className='w-full h-max bg-transparent mb-[20px]'>
        <li className='flex hover:brightness-[50%] w-full flex justify-between items-center cursor-pointer font-bold text-black' onClick={() => handleBrands()}>{title} <FaChevronRight style={{transition: 'ease 0.4s', transform: `rotate(${brandsActive ? "90deg" : "0deg"})`, marginLeft: '10px', fontSize: '14px'}} /></li>
        <li className={`overflow-hidden transition-all duration-300 ease ${brandsActive ? "h-auto max-h-[300px] opacity-100" : "h-auto max-h-0 opacity-0"}`}>
            <ul>
                {
                    listMenu?.map((data, index) => (
                        <li key={index} onClick={() => onClick?.(data)} className={`text-${active === data ? 'blue-500 font-bold rounded-full' : 'slate-500'} flex items-center justify-between my-[12px] text-[14px] py-1 hover:brightness-[80%] cursor-pointer`}>{data} <input type="checkbox" name={data} checked={active === data} className="cursor-pointer" /></li>
                    ))
                }
            </ul>
        </li>
    </ul>
  )
}

export default DropDown
