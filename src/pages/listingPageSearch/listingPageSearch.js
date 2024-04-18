import React from 'react'
import SearchInput from '../../components/searchInput'
import { Breadcrumb, Col, Pagination, Row } from 'antd'
import SortButton from '../listingPage/SortButton'
import DisplayListing from '../listingPage/DisplayListing'
import ListingCard from '../../components/listingCard/ListingCard'
import Accommodation from '../listingPage/accommodation'



const listingData = [
    {
        id: 0,
        src: "https://media.istockphoto.com/id/806594086/photo/modern-living-room-with-garden-view-3d-rendering-image.webp?b=1&s=170667a&w=0&k=20&c=9oGnAnUtFdTq7iC4UcOsp2hFfs7XVR-0kKTw2tRdVUA=",
        alt: "img1",
        title: "1 Apartment for rent in Da Nang Viet Nam",
        subtitle: "modern studio nearby beach with green spaces around, near downtown of Da Nang",
        numberOfRoom: 2,
        numberOfBath: 2,
        numberofGuest: 2,
        starOfListing: 4.5,
        priceOfRoom: 500,
    },
    {
        id: 1,
        src: "https://media.istockphoto.com/id/1470717532/photo/modern-home-interior.webp?b=1&s=170667a&w=0&k=20&c=ZQJAOGtMWzpnjnL7pi6mDj0Pc9TMZPwz7VKHuYJAB6c=",
        alt: "img2",
        title: "2 Apartment for rent in Da Nang Viet Nam",
        subtitle: "modern studio nearby beach with green spaces around, near downtown of Da Nang",
        numberOfRoom: 2,
        numberOfBath: 2,
        numberofGuest: 2,
        starOfListing: 5,
        priceOfRoom: 500,
    },
    {
        id: 3,
        title: "3 Apartment for rent in Da Nang Viet Nam",
        subtitle: "modern studio nearby beach with green spaces around, near downtown of Da Nang",
        alt: "img1",
        src: "https://media.istockphoto.com/id/1182454305/photo/bohemian-living-room-interior-3d-render.webp?b=1&s=170667a&w=0&k=20&c=PCDW1o3TLyjYTAgFh_AaXFSqTENWDY7xVC1Q-EC1OUM=",

        numberOfRoom: 2,
        numberOfBath: 2,
        numberofGuest: 2,
        starOfListing: 4,
        priceOfRoom: 500,
    },
    {
        id: 4,
        title: "4 Apartment for rent in Da Nang Viet Nam",
        subtitle: "modern studio nearby beach with green spaces around, near downtown of Da Nang",
        src: "https://plus.unsplash.com/premium_photo-1684508638760-72ad80c0055f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fG5pY2UlMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D",
        alt: "img1",
        numberOfRoom: 2,
        numberOfBath: 2,
        numberofGuest: 2,
        starOfListing: 4,
        priceOfRoom: 500,
    },
    {
        id: 5,
        title: "5 Apartment for rent in Da Nang Viet Nam",
        subtitle: "modern studio nearby beach with green spaces around, near downtown of Da Nang",
        src: "https://images.unsplash.com/photo-1459535653751-d571815e906b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fG5pY2UlMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D",
        alt: "img1",
        numberOfRoom: 2,
        numberOfBath: 2,
        numberofGuest: 2,
        starOfListing: 4,
        priceOfRoom: 500,
    },
    {
        id: 6,
        title: "6 Apartment for rent in Da Nang Viet Nam",
        subtitle: "modern studio nearby beach with green spaces around, near downtown of Da Nang",
        src: "https://plus.unsplash.com/premium_photo-1686090448451-fe1327f9b042?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG5pY2UlMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D",
        numberOfRoom: 2,
        numberOfBath: 2,
        numberofGuest: 2,
        starOfListing: 4,
        priceOfRoom: 500,
    },
]
const ListingPageSearch = () => {
    return (
        <div className='container mx-auto mt-5'>
            <div className='md:w-[75%] lg:w-[49.3%] mx-auto'>
                <SearchInput />
            </div>
            <Row className='mt-8 px-2'>
                <Col xs={24} xl={11}>
                    <Breadcrumb
                        separator=">"
                        items={[
                            {
                                title: <a href="/"   >Home  </a>,
                            },
                            {
                                title: <a href="" >Da Nag</a>,
                            },
                            {
                                title: <a href="" >Son Tra</a>,
                            },
                            {
                                title: <p className='text-[#007882] dark:text-white font-normal'>Studio Son Tra</p>,
                            },
                        ]}
                    />
                    <div className='flex justify-between mt-5 items-center'>
                        <p> 456 listing for rent in <span className='font-bold'>Son Tra, Da Nang</span> </p>
                        <div className='lg:mr-[5rem]'>
                            <SortButton />
                        </div>
                    </div>
                    <div className='flex flex-wrap mt-5'>
                        {listingData.map((_, index) =>
                            <div key={index} className='w-full md:w-1/2 lg:w-1/2 pr-4 mb-8 flex justify-center lg:block'>
                                <ListingCard
                                    key={index}
                                    src={_.src}
                                    alt={_.alt}
                                    title={_.title}
                                    subtitle={_.subtitle}
                                    numberOfRoom={_.numberOfRoom}
                                    numberofGuest={_.numberofGuest}
                                    numberOfBath={_.numberOfBath}
                                    starOfListing={_.starOfListing}
                                    priceOfRoom={_.priceOfRoom}
                                />
                            </div>
                        )}
                    </div>
                </Col>
                <Col xs={24} xl={13} className=''>
                    <div className='w-full h-[350px] lg:h-full p-5'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12137.60283814843!2d108.23538075721262!3d16.066668986736772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314217810d88c3e7%3A0x9173b408ccfeb12a!2zMjQgUGjGsOG7m2MgTeG7uSAxLCBQaMaw4bubYyBN4bu5LCBTxqFuIFRyw6AsIMSQw6AgTuG6tW5nIDU1MDAwMCwgVmnhu4d0IE5hbQ!5e1!3m2!1svi!2s!4v1713094175520!5m2!1svi!2s" width="100%" height="100%" style={{ border: 5, borderRadius: 15 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                    </div>

                </Col>
            </Row>
            <div className="flex justify-center mt-7 ">
                <Pagination defaultCurrent={1} total={50} />
            </div>
            <Accommodation/>
        </div>
    )
}

export default ListingPageSearch
