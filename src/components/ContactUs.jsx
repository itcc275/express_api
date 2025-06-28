import Header from './Header';
import { Card, Typography, Row, Col, Divider, Button } from 'antd';
import { PhoneOutlined, MailOutlined, EnvironmentOutlined } from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

function ContactUs() {
    return (
        <Header>
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
                        Contact Us
                    </Title>
                    <Paragraph style={{ textAlign: 'center', fontSize: 18, marginBottom: 24 }}>
                        We are here to help you. Reach out to us through any of the following ways.
                    </Paragraph>
                    <Divider />
                    <Row gutter={[24, 24]}>
                        <Col xs={24} sm={12}>
                            <Card bordered={false} style={{ background: '#f6ffed', borderRadius: 10 }}>
                                <Title level={5} style={{ marginBottom: 8 }}>
                                    <PhoneOutlined style={{ color: '#52c41a', marginRight: 8 }} />
                                    Phone
                                </Title>
                                <Paragraph style={{ marginBottom: 0 }}>
                                    <Text copyable>+91 9771898989</Text><br />
                                    <Text copyable>+91 9931222791</Text><br />
                                    <Text copyable>06331 250650</Text>
                                </Paragraph>
                            </Card>
                        </Col>
                        <Col xs={24} sm={12}>
                            <Card bordered={false} style={{ background: '#e6f7ff', borderRadius: 10 }}>
                                <Title level={5} style={{ marginBottom: 8 }}>
                                    <MailOutlined style={{ color: '#1890ff', marginRight: 8 }} />
                                    Email
                                </Title>
                                <Paragraph style={{ marginBottom: 0 }}>
                                    <Text copyable>adhunikecs@gmail.com</Text><br />
                                    <Text copyable>adhunikdcs@gmail.com</Text>
                                </Paragraph>
                            </Card>
                        </Col>
                    </Row>
                    <Divider />
                    <Card bordered={false} style={{ background: '#fffbe6', borderRadius: 10, marginBottom: 16 }}>
                        <Title level={5} style={{ marginBottom: 8 }}>
                            <EnvironmentOutlined style={{ color: '#faad14', marginRight: 8 }} />
                            Address
                        </Title>
                        <Paragraph style={{ marginBottom: 0 }}>
                            Dangi Bhawan Main Road Imamganj,<br />
                            Gaya, Bihar, 824206
                        </Paragraph>
                        <Button
                            type="primary"
                            href="https://maps.app.goo.gl/BYDjhAKnaFMd2UWH9"
                            target="_blank"
                            icon={<EnvironmentOutlined />}
                            style={{ marginTop: 8 }}
                        >
                            View on Google Maps
                        </Button>
                    </Card>
                </Typography>
            </Card>
        </Header>
    );
}

export default ContactUs;
