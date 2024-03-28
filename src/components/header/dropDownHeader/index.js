import { MenuOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Dropdown, Space } from 'antd';
import React from 'react'
import { Link } from 'react-router-dom';
import IconPerson from '../../../assets/icon/person.svg'

const DropDownHeader = () => {
  const theme = localStorage.setItem('theme', 'dark');
  const items = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          Login
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          Register
        </a>
      ),
    },
  ];
  return (
    <div className='border px-4 py-[7px] rounded-2xl	border-black'>
      <Dropdown menu={{ items }} placement="bottom" arrow>
        <Link onClick={(e) => e.preventDefault()}>
          <Space>
            <MenuOutlined className='text-black '/>
            <UserOutlined className='text-black ' style={{fontSize: '25px'}}/>
           
          </Space>
        </Link>
      </Dropdown>
    </div>
  )
}

export default DropDownHeader
