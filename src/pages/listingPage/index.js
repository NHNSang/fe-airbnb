import React from "react";
import CategoryList from "../../components/categoryList";
import CategoryFilter from "../../components/categoryFilter";
import CategoryInfo from "./CategoryInfo";

import SortButton from "./SortButton";
import './style.css'
import DisplayListing from "./DisplayListing";
import MapView from "./MapView";
import ListingList from "./ListingList";
import { Col, Pagination, Row } from "antd";
import Accommodation from "./accommodation";

// demo rendering listing
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
    {
        id: 7,
        title: "7 Apartment for rent in Da Nang Viet Nam",
        subtitle: "modern studio nearby beach with green spaces around, near downtown of Da Nang",
        src: "https://plus.unsplash.com/premium_photo-1686090448517-2f692cc45187?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fG5pY2UlMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D",
        numberOfRoom: 2,
        numberOfBath: 2,
        numberofGuest: 2,
        starOfListing: 4,
        priceOfRoom: 500,
    },
    {
        id: 8,
        title: "8 Apartment for rent in Da Nang Viet Nam",
        subtitle: "modern studio nearby beach with green spaces around, near downtown of Da Nang",
        src: "https://images.unsplash.com/photo-1494526585095-c41746248156?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fG5pY2UlMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D",
        numberOfRoom: 2,
        numberOfBath: 2,
        numberofGuest: 2,
        starOfListing: 4,
        priceOfRoom: 500,
    },
    {
        id: 9,
        title: "9 Apartment for rent in Da Nang Viet Nam",
        subtitle: "modern studio nearby beach with green spaces around, near downtown of Da Nang",
        src: "https://plus.unsplash.com/premium_photo-1682377521741-66b111791809?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fG5pY2UlMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D",
        numberOfRoom: 2,
        numberOfBath: 2,
        numberofGuest: 2,
        starOfListing: 4,
        priceOfRoom: 500,
    },
    {
        id: 10,
        title: "10 Apartment for rent in Da Nang Viet Nam",
        subtitle: "modern studio nearby beach with green spaces around, near downtown of Da Nang",
        src: "https://images.unsplash.com/photo-1592595896616-c37162298647?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fG5pY2UlMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D",
        numberOfRoom: 2,
        numberOfBath: 2,
        numberofGuest: 2,
        starOfListing: 4,
        priceOfRoom: 500,
    },
]


const ListingPage = () => {



    // Nếu có Data thì đặt hàm fetch ở component cha để lây data từ database

    return (
        <div className="container mx-auto px-2 md:px-0 lg:px-0">
            <Row className="items-center">
                <Col xs={12} sm={15} xl={18}>
                    <CategoryList />
                </Col>
                <Col xs={12} sm={9} xl={6}>
                    <CategoryFilter />
                </Col>
            </Row>

            {/* <div className="lg:flex flex-row justify-between items-center border-y-2 border-neutral-300 py-2">
                <CategoryList />
                <CategoryFilter />
            </div> */}
            <div className=" md:flex lg:flex flex-row justify-between items-center py-2">
                <CategoryInfo />
                <div className="flex flex-row justify-end md:justify-center lg:justify-center items-center gap-2 mt-2 md:mt-0 lg:mt-0">
                    <SortButton />
                    <DisplayListing />
                    {/* <MapView /> */}
                </div>
            </div>

            {/* rendering listing list */}

            <div className="flex flex-row flex-wrap justify-center md:justify-around lg:justify-between items-center gap-3">
                {listingData.map((listing, index) => {
                    return (
                        <div className="cursor-pointer hover:shadow-md hover:-translate-y-1 transition duration-500" key={index}>
                            <ListingList
                                key={index.id}
                                src={listing.src}
                                alt="something"
                                title={listing.title}
                                subtitle={listing.subtitle}
                                numberOfRoom={listing.numberOfRoom}
                                numberOfBath={listing.numberOfBath}
                                numberofGuest={listing.numberofGuest}
                                starOfListing={listing.starOfListing}
                                priceOfRoom={listing.priceOfRoom}

                            />

                        </div>
                    )
                })}
            </div>
            <div className="flex justify-center mt-7    ">
                <Pagination defaultCurrent={1} total={50} />
            </div>
            <Accommodation />

            {/* <ListingList 
        title="Apartment for rent in Da Nang Viet Nam"
        subtitle="modern studio nearby beach with green spaces around, near downtown of Da Nang"
        numberOfRoom="2"
        numberOfBath="2"
        numberofGuest="2"
        starOfListing="4.5"
        priceOfRoom="500"
        /> */}
        </div>
    );
};

export default ListingPage;
