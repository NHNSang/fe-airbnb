import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import AdminRouter from '../../routes/admin.router';
import { Link } from 'react-router-dom';
const { Header, Sider, Content } = Layout;

export default function DefaultLayoutAdmin() {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return <Layout style={{ minHeight: "100vh" }}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="demo-logo-vertical" />
            <h1 className='my-5 text-white font-medium text-xl text-center underline'>Airbnb Admin</h1>
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
                items={[
                    {
                        key: 'user',
                        icon: <UserOutlined />,
                        label: <Link to={'/admin/user-manager'}>Quản lí người dùng</Link>,
                    },
                    {
                        key: '2',
                        icon: <VideoCameraOutlined />,
                        label: 'Quản lí phòng',
                    },
                    {
                        key: '3',
                        icon: <UploadOutlined />,
                        label: 'Quản lí vị trí',
                    },
                ]}
            />
        </Sider>
        <Layout>
            <Header
                style={{
                    padding: 0,
                    background: colorBgContainer,
                }}
            >
                <Button
                    type="text"
                    icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    onClick={() => setCollapsed(!collapsed)}
                    style={{
                        fontSize: '16px',
                        width: 64,
                        height: 64,
                    }}
                />
            </Header>
            <Content
                style={{
                    margin: '24px 16px',
                    padding: 24,
                    minHeight: 280,
                    background: colorBgContainer,
                    borderRadius: borderRadiusLG,
                }}
            >
                <AdminRouter/>
            </Content>
        </Layout>
    </Layout>;
}