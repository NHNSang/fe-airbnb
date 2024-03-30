import { Rate } from 'antd'
import React, { useState } from 'react'

const ReviewGuest = () => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };
    return (
        <div>
            <div className={`text-container ${expanded ? 'expanded' : ''}`} style={{ maxHeight: expanded ? 'none' : '420px' }}>
                <div className="container flex justify-center mx-auto pt-16">
                </div>
                <div className="w-full px-10 pt-10">
                    <div className="container mx-auto">
                        <div role="list" aria-label="Behind the scenes People " className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
                            <div role="listitem" className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                <div className="rounded overflow-hidden shadow-md bg-white">
                                    <div className="absolute -mt-20 w-full flex justify-center">
                                        <div className="h-32 w-32">
                                            <img src="https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif" alt="Display Picture of Andres Berlin" role="img" className="rounded-full object-cover h-full w-full shadow-md" />
                                        </div>
                                    </div>
                                    <div className="px-6 mt-16 mb-10 ">
                                        <h1 className="font-bold text-3xl text-center mb-1">Andres Berlin</h1>
                                        <div className='flex justify-center my-2'>
                                        <Rate allowHalf defaultValue={4.5} />
                                        </div>
                                        <p className="text-gray-800 text-sm text-center">Feb 24/2024</p>
                                        <p className="text-center text-gray-600 text-base pt-3 font-normal">The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.</p>
                                        
                                    </div>
                                </div>
                            </div>
                            <div role="listitem" className="xl:w-1/3 lg:mx-3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                <div className="rounded overflow-hidden shadow-md bg-white">
                                    <div className="absolute -mt-20 w-full flex justify-center">
                                        <div className="h-32 w-32">
                                            <img src="https://cdn.tuk.dev/assets/photo-1530577197743-7adf14294584.jfif" alt="Display Picture of Silene Tokyo" role="img" className="rounded-full object-cover h-full w-full shadow-md" />
                                        </div>
                                    </div>
                                    <div className="px-6 mt-16 mb-10">
                                        <h1 className="font-bold text-3xl text-center mb-1">Silene Tokyo</h1>
                                        <div className='flex justify-center my-2'>
                                        <Rate allowHalf defaultValue={4.5} />
                                        </div>
                                        <p className="text-gray-800 text-sm text-center">Feb 24/2024</p>
                                        <p className="text-center text-gray-600 text-base pt-3 font-normal">The emphasis on innovation and technology in our companies has resulted in a few of them establishing global benchmarks in product design and development.</p>
                                    </div>
                                </div>
                            </div>
                            <div role="listitem" className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                <div className="rounded overflow-hidden shadow-md bg-white">
                                    <div className="absolute -mt-20 w-full flex justify-center">
                                        <div className="h-32 w-32">
                                            <img src="https://cdn.tuk.dev/assets/photo-1566753323558-f4e0952af115.jfif" alt="Display Picture of Johnson Stone" role="img" className="rounded-full object-cover h-full w-full shadow-md" />
                                        </div>
                                    </div>
                                    <div className="px-6 mt-16 mb-10">
                                        <h1 className="font-bold text-3xl text-center mb-1">Johnson Stone</h1>
                                        <div className='flex justify-center my-2'>
                                        <Rate allowHalf defaultValue={4.5} />
                                        </div>
                                        <p className="text-gray-800 text-sm text-center">Feb 24/2024</p>
                                        <p className="text-center text-gray-600 text-base pt-3 font-normal">Our services encompass the assessment and repair of property damage caused by water, fire, smoke, or mold. We can also be a part of the restoration.</p>
                                    </div>
                                </div>
                            </div>
                            <div role="listitem" className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                <div className="rounded overflow-hidden shadow-md bg-white">
                                    <div className="absolute -mt-20 w-full flex justify-center">
                                        <div className="h-32 w-32">
                                            <img src="https://cdn.tuk.dev/assets/boy-smiling_23-2148155640.jpg" alt="Display Picture of Dean Jones" role="img" className="rounded-full object-cover h-full w-full shadow-md" />
                                        </div>
                                    </div>
                                    <div className="px-6 mt-16 mb-10">
                                        <h1 className="font-bold text-3xl text-center mb-1">Dean Jones</h1>
                                        <div className='flex justify-center my-2'>
                                        <Rate allowHalf defaultValue={4.5} />
                                        </div>
                                        <p className="text-gray-800 text-sm text-center">Feb 24/2024</p>
                                        <p className="text-center text-gray-600 text-base pt-3 font-normal">An avid open-source developer who loves to be creative and inventive. I have 20 years of experience in the field.</p>
                                    </div>
                                </div>
                            </div>
                            <div role="listitem" className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                <div className="rounded overflow-hidden shadow-md bg-white">
                                    <div className="absolute -mt-20 w-full flex justify-center">
                                        <div className="h-32 w-32">
                                            <img src="https://cdn.tuk.dev/assets/blond-man-happy-expression_1194-2873.jpg" alt="Display Picture of Rachel Adams" role="img" className="rounded-full object-cover h-full w-full shadow-md" />
                                        </div>
                                    </div>
                                    <div className="px-6 mt-16 mb-10">
                                        <h1 className="font-bold text-3xl text-center mb-1">Rachel Adams</h1>
                                        <div className='flex justify-center my-2'>
                                        <Rate allowHalf defaultValue={4.5} />
                                        </div>
                                        <p className="text-gray-800 text-sm text-center">Feb 24/2024</p>
                                        <p className="text-center text-gray-600 text-base pt-3 font-normal">Product designer with interests in immersive computing and XR, political ventures, and emerging technologies. Able to take ideas and give them a life.</p>
                                    </div>
                                </div>
                            </div>
                            <div role="listitem" className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                <div className="rounded overflow-hidden shadow-md bg-white">
                                    <div className="absolute -mt-20 w-full flex justify-center">
                                        <div className="h-32 w-32">
                                            <img src="https://cdn.tuk.dev/assets/photo-1570211776045-af3a51026f4a.jfif" alt="Display Picture of Charles Keith" role="img" className="rounded-full object-cover h-full w-full shadow-md" />
                                        </div>
                                    </div>
                                    <div className="px-6 mt-16 mb-10">
                                        <h1 className="font-bold text-3xl text-center mb-1">Charles Keith</h1>
                                        <div className='flex justify-center my-2'>
                                        <Rate allowHalf defaultValue={4.5} />
                                        </div>
                                        <p className="text-gray-800 text-sm text-center">Feb 24/2024</p>
                                        <p className="text-center text-gray-600 text-base pt-3 font-normal">A UX designer is the voice of the customer. Our job is to look beyond the business goals. We don't just experience user interface but also questions it.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <button className="expand-button text-black" onClick={toggleExpand}>
                    {expanded ? 
                    <div className='flex gap-3 items-center text-black dark:text-white border border-black dark:border-white px-4 py-2 rounded-lg mt-4'>
                    <p>Close</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="m12 10.828l-4.95 4.95l-1.414-1.414L12 8l6.364 6.364l-1.414 1.414z"/></svg>
                    </div>
                     : <div className='flex gap-3 items-center text-black dark:text-white border border-black dark:border-white px-4 py-2 rounded-lg mt-4'>
                        <p>Show more reviews</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024"><path fill="currentColor" d="M831.872 340.864L512 652.672L192.128 340.864a30.59 30.59 0 0 0-42.752 0a29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728a30.59 30.59 0 0 0-42.752 0z"/></svg>
                        </div>}
                </button>
            </div>

        </div>
    )
}

export default ReviewGuest
