import Header from './Header';
import { Card, Typography, Divider, List } from 'antd';

const { Title, Paragraph, Text } = Typography;

function AboutUs() {
    return (
        <Header>
            <div style={{ maxWidth: 900, margin: '2rem auto' }}>
                <Title level={2} style={{ textAlign: 'center', marginBottom: 0 }}>About Us</Title>
                <Paragraph style={{ textAlign: 'center', marginBottom: 24 }}>
                    <Text strong style={{ fontSize: 18 }}>
                        Regularly Growing since 1996 with Pride and Trust
                    </Text>
                </Paragraph>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center' }}>
                    <Card
                        title="Our Journey"
                        style={{ flex: '1 1 260px', minWidth: 260, maxWidth: 350, borderRadius: 12 }}
                        bodyStyle={{ minHeight: 140 }}
                    >
                        <Paragraph>
                            Adhunik Radio has been at the forefront of the electronics industry since 1996, evolving with the times and always putting our customers first. From the radio era to the digital age, we have continuously adapted to meet the changing needs of our customers.
                        </Paragraph>
                    </Card>
                    <Card
                        title="Digital India Support"
                        style={{ flex: '1 1 260px', minWidth: 260, maxWidth: 350, borderRadius: 12 }}
                        bodyStyle={{ minHeight: 140 }}
                    >
                        <Paragraph>
                            We proudly support the <Text strong>Digital India</Text> campaign, an initiative by the Government of India to make government services easily accessible to citizens. We contribute by enhancing online infrastructure and increasing internet connectivity, especially in rural areas, to help bridge the digital divide.
                        </Paragraph>
                    </Card>
                    <Card
                        title="Innovation & Growth"
                        style={{ flex: '1 1 260px', minWidth: 260, maxWidth: 350, borderRadius: 12 }}
                        bodyStyle={{ minHeight: 140 }}
                    >
                        <Paragraph>
                            Our journey has been marked by rapid growth and a commitment to innovation. We believe in staying ahead of the market, ensuring that our products and services are always relevant and valuable to our customers.
                        </Paragraph>
                    </Card>
                </div>
                <Divider />
                <Card
                    title="Our Beliefs"
                    style={{ margin: '1.5rem auto', borderRadius: 12, maxWidth: 500 }}
                    bodyStyle={{ padding: '1.5rem' }}
                >
                    <List
                        dataSource={[
                            'Customer Satisfaction',
                            'Customer Trust',
                            'Regular Growth',
                            'Quality Products',
                            'Affordable Prices',
                            'Understanding Customer Needs',
                            'Valuing Customer Feedback',
                        ]}
                        renderItem={item => (
                            <List.Item style={{ border: 'none', padding: '4px 0' }}>
                                <Text>- {item}</Text>
                            </List.Item>
                        )}
                    />
                </Card>
                <Divider />
                <Card
                    style={{ margin: '1.5rem auto', borderRadius: 12, maxWidth: 600 }}
                    bodyStyle={{ padding: '1.5rem' }}
                >
                    <Paragraph style={{ textAlign: 'center', margin: 0 }}>
                        At Adhunik Radio, we are committed to delivering quality, affordability, and trust—today and always.
                    </Paragraph>
                </Card>
            </div>
        </Header>
    );
}

export default AboutUs;