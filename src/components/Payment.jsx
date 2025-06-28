import Header from './Header';
import { Card, Typography, Row, Col, Divider } from 'antd';

const { Title, Paragraph, Text } = Typography;

// Place your images in the public folder or import them if using webpack
// Example: import gpayImg from '../assets/gpay.jpg';
const paymentImages = [
    {
        src: process.env.PUBLIC_URL + '/gpay.jpg',
        alt: 'Google Pay QR',
        label: 'Google Pay / UPI'
    },
    {
        src: process.env.PUBLIC_URL + '/sbi.jpg',
        alt: 'SBI Pay QR',
        label: 'SBI Pay'
    },
    {
        src: process.env.PUBLIC_URL + '/phonepe.jpg',
        alt: 'PhonePe QR',
        label: 'PhonePe'
    }
];

function Payment() {
    return (
        <Header>
            <Card
                style={{
                    margin: '1px auto',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                    borderRadius: 14,
                    background: '#fff',
                }}
                bodyStyle={{ padding: '2.5rem' }}
            >
                <Typography>
                    <Title level={2} style={{ textAlign: 'center', marginBottom: 0 }}>
                        Payment Options
                    </Title>
                    <Paragraph style={{ textAlign: 'center', fontSize: 18, marginBottom: 24 }}>
                        We accept all major UPI apps, credit cards, and cash payments.<br />
                        Scan any QR below to pay us instantly and securely.
                    </Paragraph>
                    <Divider />
                    <Row gutter={[24, 24]} justify="center">
                        {paymentImages.map((img, idx) => (
                            <Col xs={24} sm={12} md={8} key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <Card
                                    hoverable
                                    bordered={false}
                                    style={{
                                        borderRadius: 10,
                                        boxShadow: '0 1px 6px rgba(0,0,0,0.07)',
                                        padding: 12,
                                        textAlign: 'center',
                                        width: '100%',
                                        minHeight: 420,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                    bodyStyle={{ padding: 0 }}
                                >
                                    <img
                                        src={img.src}
                                        alt={img.alt}
                                        style={{
                                            width: '100%',
                                            maxWidth: 260,
                                            borderRadius: 8,
                                            marginBottom: 12,
                                            boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
                                        }}
                                    />
                                    <Text strong style={{ fontSize: 16 }}>{img.label}</Text>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                    <Divider />
                    <Paragraph style={{ textAlign: 'center', marginTop: 16 }}>
                        <Text type="secondary">
                            For any payment issues, please contact us at <Text copyable>+91 97718 98989</Text>
                        </Text>
                    </Paragraph>
                </Typography>
            </Card>
        </Header>
    );
}

export default Payment;
