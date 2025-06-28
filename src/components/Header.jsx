import { Layout, Menu, Typography } from 'antd';
import Footer from './Footer';
import {
    HomeOutlined,
    InfoCircleOutlined,
    CreditCardOutlined,
    PhoneOutlined,
} from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import { Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { useMediaQuery } from 'react-responsive';

const { Header: AntHeader } = Layout;
const { Title } = Typography;

function Header({ children }) {
    const location = useLocation()
    console.log(location.pathname);
    // Responsive Header with Drawer for mobile

    const menuItems = [
        {
            key: '/',
            icon: <HomeOutlined />,
            label: <Link to="/" style={{ color: '#222' }}>Home</Link>,
        },
        {
            key: '/about',
            icon: <InfoCircleOutlined />,
            label: <Link to="/about" style={{ color: '#222' }}>About Us</Link>,
        },
        {
            key: '/payment',
            icon: <CreditCardOutlined />,
            label: <Link to="/payment" style={{ color: '#222' }}>Payment</Link>,
        },
        {
            key: '/contact',
            icon: <PhoneOutlined />,
            label: <Link to="/contact" style={{ color: '#222' }}>Contact Us</Link>,
        },
    ];

    const isMobile = useMediaQuery({ maxWidth: 767 });
    const [drawerVisible, setDrawerVisible] = useState(false);

    return (
        <Layout style={{ minHeight: '100vh', background: '#f4f4f4' }}>
            <AntHeader
                style={{
                    background: '#fff',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                    padding: '0 2rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    position: 'sticky',
                    top: 0,
                    zIndex: 100,
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <img src={process.env.PUBLIC_URL + '/logo.jpg'} alt="Logo" style={{ height: 40 }} />
                    <Title level={3} style={{ margin: 0, color: '#222', letterSpacing: 1, fontSize: 22 }}>
                        Adhunik Radio
                    </Title>
                </div>
                {isMobile ? (
                    <>
                        <Button
                            type="text"
                            icon={<MenuOutlined style={{ fontSize: 24 }} />}
                            onClick={() => setDrawerVisible(true)}
                        />
                        <Drawer
                            title="Menu"
                            placement="right"
                            onClose={() => setDrawerVisible(false)}
                            visible={drawerVisible}
                            bodyStyle={{ padding: 0 }}
                        >
                            <Menu
                                mode="vertical"
                                selectedKeys={[location.pathname]}
                                style={{ border: 'none' }}
                                onClick={() => setDrawerVisible(false)}
                                items={menuItems}
                            />
                        </Drawer>
                    </>
                ) : (
                    <Menu
                        mode="horizontal"
                        selectedKeys={[location.pathname]}
                        style={{
                            flex: 1,
                            justifyContent: 'flex-end',
                            background: 'transparent',
                            borderBottom: 'none',
                        }}
                        items={menuItems}
                    />
                )}
            </AntHeader>
            <Layout.Content style={{ padding: '2rem 1rem', margin: '0 auto', width: '100%' }}>
                {children}
            </Layout.Content>
            <Footer />
        </Layout>
    );
}

export default Header;
