import { Col, Image, Row } from 'antd'
import React from 'react'
import Logo from '../../../assets/img/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import ThemeToggle from '../theme-tonggle'
import DropDownHeader from '../dropDownHeader'

const Header = () => {
    const navigate = useNavigate();
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
    <div className='sticky z-50 left-0 right-0 top-0 max-w-[1920px] mx-auto w-full xl:px-20 px-4 py-4 bg-white'>
        <Row className="flex items-center">
            {/*  */}
            <Col xs={24} xl={4}>
            <div className="flex justify-center items-center cursor-pointer">
                <img  src={Logo} alt="logo" width='50' height='50'/>
            </div>
            </Col>


            {/*  */}
            <Col xs={24} xl={14}>
            <div className='flex justify-center'>
            <ul
            className={`relative hidden items-start space-x-0 space-y-10 lg:flex lg:items-center lg:space-x-[2.75rem] lg:space-y-0 2xl:space-x-8 3xl:space-x-[60px]`}
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
                <span className="block h-1 max-w-0 bg-[#FA4613] transition-all duration-700 group-hover:max-w-full"></span>
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
                <ThemeToggle/>
                <DropDownHeader/>
                </div>
                
            </Col>
        </Row>
    </div>
  )
}

export default Header
