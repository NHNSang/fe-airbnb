import ImgBanner from '../../assets/img/Banner_homepage.jpg';
import SearchInput from '../searchInput';
const Banner = () => {
  
  return (
    <div className=''>
        <div className="mt-[7px] container mx-auto relative ]">
      <div className='relative'>
        <img src={ImgBanner} alt='img-banner' className='border rounded-3xl w-full h-[830px] object-fill mt' />
      </div>
      <div className='absolute text-center top-[22%] left-[25%] z-10 w-[49.3%]'>
        <p className='text-[55px] font-extrabold mb-4 text-white'>LET'S STAY LET'S ENJOY</p>
        <SearchInput/>
        <p className='text-[50px] font-medium mt-[9rem] text-white'>FIND YOUR APARTMENT FOR VACATION IN DA NANG</p>
      </div>
    </div>
    </div>
    
  )
}

export default Banner
