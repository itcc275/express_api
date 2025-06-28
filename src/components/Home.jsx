import Header from './Header';
import { Card, Typography, Row, Col, Divider, List, Carousel } from 'antd';
import {
    IdcardOutlined,
    FileSearchOutlined,
    CreditCardOutlined,
    CarOutlined,
    BankOutlined,
    SolutionOutlined,
    GlobalOutlined,
    ThunderboltOutlined
} from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

const services = [
    {
        title: 'Exam Results & Forms',
        description: 'Get your results, fill forms online and also get your admit card.',
        icon: <FileSearchOutlined style={{ fontSize: 32, color: '#1890ff' }} />,
    },
    {
        title: 'Air & Railway Tickets',
        description: 'Easily get your online railway and air tickets.',
        icon: <GlobalOutlined style={{ fontSize: 32, color: '#52c41a' }} />,
    },
    {
        title: 'Bill Payments',
        description: 'Get all your online bill payments done easily.',
        icon: <CreditCardOutlined style={{ fontSize: 32, color: '#faad14' }} />,
    },
    {
        title: 'General Insurance',
        description: 'HDFC ERGO, BAJAJ ALLIANZ, IFFCO TOKIO, UNITED INDIA, RELIANCE, NEW INDIA, UNIVERSAL SOMPO available here.',
        icon: <BankOutlined style={{ fontSize: 32, color: '#722ed1' }} />,
    },
    {
        title: 'Aadhar Services',
        description: 'Enrollment and correction available here.',
        icon: <IdcardOutlined style={{ fontSize: 32, color: '#eb2f96' }} />,
    },
    {
        title: 'Pan Services',
        description: 'New PAN and correction available here.',
        icon: <SolutionOutlined style={{ fontSize: 32, color: '#13c2c2' }} />,
    },
    {
        title: 'Passport Seva',
        description: 'New passport apply and renewal services available.',
        icon: <ThunderboltOutlined style={{ fontSize: 32, color: '#f5222d' }} />,
    },
    {
        title: 'Fasttag Service',
        description: 'SBI Fasttag service available here.',
        icon: <CarOutlined style={{ fontSize: 32, color: '#fa8c16' }} />,
    },
];

// Carousel for services
const bannerImages = [
    '/banner1.jpg',
    '/banner2.jpg',
    '/banner3.jpg',
    '/banner4.jpg',
    '/banner5.jpg',
];

const ServicesCarousel = () => (
    <Carousel
        dots
        autoplay
        style={{ marginBottom: 32 }}
    >
        {bannerImages.map((src, idx) => (
            <div key={idx}>
                <img
                    src={src}
                    alt={`Banner ${idx + 1}`}
                    style={{
                        width: '100%',
                        maxHeight: 320,
                        objectFit: 'cover',
                        borderRadius: 12,
                        margin: '0 auto',
                        display: 'block',
                    }}
                />
            </div>
        ))}
    </Carousel>
);

function Home() {
    return (
        <Header>
            <ServicesCarousel />
            <Card
                style={{
                    margin: '2rem auto',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                    borderRadius: 14,
                    background: '#fff',
                }}
                bodyStyle={{ padding: '2.5rem' }}
            >
                <Typography>
                    <Title level={2} style={{ textAlign: 'center', marginBottom: 0 }}>
                        We provide services on <Text type="success">Digital Literacy</Text> with pride!
                    </Title>
                    <Paragraph style={{ textAlign: 'center', fontSize: 18, marginBottom: 24 }}>
                        Digital Literacy has become one of the most important needs for our daily life. It includes the use of Aadhaar card and other online services.
                    </Paragraph>
                    <Divider />
                    <Title level={4}>We are regularly supporting in:</Title>
                    <List
                        size="small"
                        dataSource={[
                            'Encouraging Digital Campaign',
                            'Making Services available to citizens',
                            'Connecting rural areas with high-speed internet networks',
                            'Growth in areas of electronic services',
                        ]}
                        renderItem={item => (
                            <List.Item style={{ border: 'none', padding: '2px 0' }}>
                                <Text>- {item}</Text>
                            </List.Item>
                        )}
                    />
                    <Divider />
                    <Title level={3} style={{ textAlign: 'center', margin: '2rem 0 1rem' }}>Our Services</Title>
                    <Row gutter={[24, 24]}>
                        {services.map((service, idx) => (
                            <Col xs={24} sm={12} md={12} lg={8} key={idx}>
                                <Card
                                    hoverable
                                    bordered={false}
                                    style={{
                                        minHeight: 180,
                                        borderRadius: 10,
                                        boxShadow: '0 1px 6px rgba(0,0,0,0.07)',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        textAlign: 'center',
                                    }}
                                >
                                    <div style={{ marginBottom: 12 }}>{service.icon}</div>
                                    <Title level={5} style={{ marginBottom: 6 }}>{service.title}</Title>
                                    <Text type="secondary">{service.description}</Text>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Typography>
            </Card>
        </Header>
    );
}

export default Home;