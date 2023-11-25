import { Link } from 'react-router-dom'
import { BGHero1 } from '../../assets'
import { Button } from '../../component'

const Hero = () => {
  return (
    <div className='relative w-screen px-[20px] md:px-[50px] mt-[30px] h-max'>
      <div className='w-full bg-white rounded-lg shadow-lg h-max flex'>
        <div className='w-full relative overflow-hidden rounded-lg h-max md:h-[400px]'>
            <div className='absolute z-[20] top-[20%] left-[25px] md:left-[40px]'>
                <h2 className='text-[16px] md:text-[32px] text-white md:text-[#1C1C1C]'>Latest trending</h2>
                <h1 className='text-[25px] md:text-[40px] font-bold text-white md:text-[#1C1C1C]'>Electronic items</h1>
                <Link to='/list-product'>
                    <Button status='primary' text="Source Now" style='mt-3 w-max' />
                </Link>
            </div>
            <img src={BGHero1} className='w-full h-auto'  alt="backgroundHero" />
        </div>
      </div>
    </div>
  )
}

export default Hero
