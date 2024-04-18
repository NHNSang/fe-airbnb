import ImgBanner from '../../assets/img/Banner_homepage.jpg';
import SearchInput from '../searchInput';
const Banner = () => {

  return (
    <div className=''>
      <div className="mt-[7px] container mx-auto relative ]">
        <div className='relative'>
          <img src={ImgBanner} alt='img-banner' className='border rounded-3xl w-[95%] md:w-full lg:w-full mx-auto h-[300px] md:h-[560px] lg:h-[830px] object-fill mt' />
        </div>
        <div className='absolute text-center top-[7%] md:top-[22%] lg:top-[22%]  z-10  w-full'>
          <p className='text-[24px]  md:text-[35px] lg:text-[55px] font-extrabold mb-4 text-white'>LET'S STAY LET'S ENJOY</p>
          <div className='left-[0%] lg:left-[25%] w-[90%] md:w-[80%] lg:w-[49.3%] mx-auto'>
            <SearchInput />
          </div>
          <p className='text-[24px]  md:text-[35px] lg:text-[50px] font-medium mt-[2rem] md:mt-[5rem] lg:mt-[9rem] text-white'>FIND YOUR APARTMENT FOR VACATION IN DA NANG</p>
        </div>
      </div>
    </div>

  )
}

export default Banner
