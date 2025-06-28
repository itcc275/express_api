import { Layout, Typography, Row, Col, Divider } from 'antd';
import { MailOutlined, PhoneOutlined, EnvironmentOutlined, CarOutlined, SafetyCertificateOutlined, HeartOutlined, FireOutlined, CheckCircleOutlined } from '@ant-design/icons';

const { Footer: AntFooter } = Layout;
const { Title, Text } = Typography;

function Footer() {
    return (
        <AntFooter style={{ background: '#fff', padding: '2rem 1rem' }}>
            <Row gutter={[32, 24]} justify="space-between">
                <Col xs={24} md={8}>
                    <Title level={4} style={{ marginBottom: 12 }}>
                        <FireOutlined style={{ color: '#fa541c', marginRight: 8 }} />
                        Adhunik Radio
                    </Title>
                    <Text>
                        <MailOutlined style={{ marginRight: 8 }} />
                        Stay in Touch
                    </Text>
                    <br />
                    <Text type="secondary">
                        <CheckCircleOutlined style={{ marginRight: 8 }} />
                        Get Updated With Us
                    </Text>
                </Col>
                <Col xs={24} md={8}>
                    <Title level={5} style={{ marginBottom: 8 }}>
                        <SafetyCertificateOutlined style={{ color: '#52c41a', marginRight: 8 }} />
                        Our Services
                    </Title>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        <li>
                            <CarOutlined style={{ color: '#1890ff', marginRight: 8 }} />
                            Vehicle Insurance
                        </li>
                        <li>
                            <EnvironmentOutlined style={{ color: '#faad14', marginRight: 8 }} />
                            Pollution Check
                        </li>
                        <li>
                            <SafetyCertificateOutlined style={{ color: '#52c41a', marginRight: 8 }} />
                            LIC
                        </li>
                        <li>
                            <HeartOutlined style={{ color: '#eb2f96', marginRight: 8 }} />
                            Health Insurance
                        </li>
                        <li>
                            <FireOutlined style={{ color: '#fa541c', marginRight: 8 }} />
                            ONLY AYURVED UTPAD VIKRETA
                        </li>
                    </ul>
                </Col>
                <Col xs={24} md={8}>
                    <Title level={5} style={{ marginBottom: 8 }}>
                        <PhoneOutlined style={{ color: '#13c2c2', marginRight: 8 }} />
                        Contact Us
                    </Title>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        <li>
                            <PhoneOutlined style={{ marginRight: 8 }} />
                            +91 9771898989
                        </li>
                        <li>
                            <MailOutlined style={{ marginRight: 8 }} />
                            adhunikecs@gmail.com
                        </li>
                        <li>
                            <EnvironmentOutlined style={{ marginRight: 8 }} />
                            Imamganj, Gaya, Bihar, India
                        </li>
                    </ul>
                </Col>
            </Row>
            <Divider style={{ margin: '24px 0' }} />
            <Row justify="center">
                <Text type="secondary" style={{ textAlign: 'center', width: '100%' }}>
                    Copyright ©2025 All rights reserved Adhunik | Designed By Abhishek Kumar
                </Text>
            </Row>
        </AntFooter>
    );
}

export default Footer;