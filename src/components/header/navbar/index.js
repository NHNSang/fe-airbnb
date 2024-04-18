import { Button, Col, Image, Radio, Row, Space } from 'antd'
import React, { useEffect, useState } from 'react'
import Logo from '../../../assets/img/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import ThemeToggle from '../theme-tonggle'
import DropDownHeader from '../dropDownHeader'
import { useDevice } from '../../../hook/useDevice'
import Drawer from 'rc-drawer'

const Header = () => {
  const navigate = useNavigate();
  const { isMobile, isTablet, isHeader } = useDevice();
  const [isVisible, setIsVisible] = useState(false);

  const togglePopup = () => {
    setIsVisible(!isVisible);
  };
  const routes = [
    {
      name: "How it works",
      pathNames: ["/news"],
      path: "/news",
    },
    {
      name: "Pricing",
      pathNames: ["/pricing"],
      path: "pricing",
    },
    {
      name: "Help",
      pathNames: ["/help"],
      path: "help",
    },
    {
      name: "Blog",
      pathNames: ["/blog"],
      path: "/blog",
    },
  ];
  return (
    <>
      <div className='sticky z-50 left-0 right-0 top-0 max-w-[1920px] mx-auto w-full xl:px-20 px-4 py-4 bg-white'>
        {isHeader ?
          <>
            <div className='flex justify-between items-center relative'>
              <div className="relative flex items-center gap-2">
                {/* Icon */}
                <button onClick={togglePopup} className='border border-black rounded-lg p-[3px]'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="black" d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z" /></svg>
                </button>
                {/* Popup */}
                {isVisible && (
                  <div className="fixed top-20 left-0 right-0 z-10 bg-white shadow-md rounded-md p-4 mt-2 popup">
                    <ul
                      className=''
                    >
                      {routes.map((x) => (
                        <li
                          onClick={() => {
                            navigate(x.path);
                          }}
                          key={x.path}
                          className={`group relative cursor-pointer font-sans text-lg leading-[24px] tracking-wider transition duration-300 lg:text-base lg:leading-5 xl:text-[20px] xl:leading-[22px] text-black flex justify-between items-center mt-3`}
                        >
                          {(x.name)}
                          <span className="block h-1 max-w-0 bg-[#FF385C] transition-all duration-700 group-hover:max-w-full"></span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 24 24"><path fill="black" d="m13.172 12l-4.95-4.95l1.414-1.413L16 12l-6.364 6.364l-1.414-1.415z" /></svg>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 32 32"><path fill="black" d="M3.384 7.13c2.972-4.17 9.167-4.174 12.146-.008l.465.65l.417-.593c2.955-4.195 9.16-4.236 12.17-.081A7.48 7.48 0 0 1 28 16.583L16.732 28.681a1 1 0 0 1-1.464 0L3.992 16.54a7.46 7.46 0 0 1-.608-9.41m10.52 1.155c-2.181-3.05-6.716-3.046-8.892.007a5.46 5.46 0 0 0 .446 6.887L16.002 26.53l10.534-11.31a5.48 5.48 0 0 0 .427-6.95c-2.205-3.044-6.751-3.013-8.916.06l-1.229 1.744a1 1 0 0 1-1.63.006z" /></svg>
              </div>
              {/*  */}
              <Link to={'/'}>
                <div className="flex justify-center items-center cursor-pointer ml-[60px]">
                  <img src={Logo} alt="logo" width='40' height='40' />
                </div>
              </Link>
              <div className="relative flex items-center gap-2">
                <DropDownHeader />
                <ThemeToggle />


              </div>
            </div>
          </> :
          <>
            <Row className="flex items-center">
              {/*  */}
              <Col xs={24} xl={4}>
                <Link to={'/'}>
                  <div className="flex justify-center items-center cursor-pointer">
                    <img src={Logo} alt="logo" width='50' height='50' />
                  </div>
                </Link>
              </Col>


              {/*  */}
              <Col xs={24} xl={14}>
                <div className='flex justify-center'>
                  <ul
                    className={`relative text-black hidden items-start space-x-0 space-y-10 lg:flex lg:items-center lg:space-x-[2.75rem] lg:space-y-0 2xl:space-x-8 3xl:space-x-[60px]`}
                  >
                    {routes.map((x) => (
                      <li
                        onClick={() => {
                          navigate(x.path);
                        }}
                        key={x.path}
                        className={`group relative cursor-pointer font-sans text-lg leading-[24px] tracking-wider transition duration-300 lg:text-base lg:leading-5 xl:text-[20px] xl:leading-[22px]`}
                      >
                        {(x.name)}
                        <span className="block h-1 max-w-0 bg-[#FF385C] transition-all duration-700 group-hover:max-w-full"></span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>

              {/*  */}
              <Col xs={24} xl={6}>
                <div className='flex items-center justify-center gap-3'>
                  <div className='border bg-[#007882] px-4 py-[9px] rounded-lg 	'>
                    <Link to={''} >
                      <p className='font-sans text-white dark:text-gray-200 duration-100 font-bold'>Add Listing</p>
                    </Link>
                  </div>
                  <ThemeToggle />
                  <DropDownHeader />
                </div>

              </Col>
            </Row>
          </>}
      </div>
    </>
  )
}

export default Header
