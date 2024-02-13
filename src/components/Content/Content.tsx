import React from 'react';
import {Layout, Card, Row, Col, Typography, Space, Button} from 'antd';
const { Content } = Layout;

import styles from './Content.module.scss';
import { CalendarOutlined, HeartFilled, IdcardOutlined } from '@ant-design/icons';

const data = [
    'планировать свои тренировки на календаре, выбирая тип и уровень нагрузки;',
    'отслеживать свои достижения в разделе статистики, сравнивая свои результаты с нормами и рекордами;',
    'создавать свой профиль, где ты можешь загружать свои фото, видео и отзывы о тренировках;',
    'выполнять расписанные тренировки для разных частей тела, следуя подробным инструкциям и советам профессиональных тренеров.',
];

const cardsData = [
    {
        title: 'Расписать тренировки',
        actions: <Button type="link" icon={<HeartFilled />}>Тренировки</Button>,
    },
    {
        title: 'Назначить календарь',
        actions: <Button type="link" icon={<CalendarOutlined />}>Календарь</Button>,
    },
    {
        title: 'Заполнить профиль',
        actions: <Button type="link" icon={<IdcardOutlined />}>Профиль</Button>,
    },
];

export const PageContent: React.FC = () => {
    return (
        <Content className={styles.content}>
            <Space direction="vertical" size="large" className={styles.wrapper}>
                <Card>
                    <ul className={styles.list}>
                        С CleverFit ты сможешь:
                        {data.map((item) => (
                            <li>{item}</li>
                        ))}
                    </ul>
                </Card>
                <Space direction='vertical' size="middle">
                    <Card>
                        <Typography.Title level={4} className={styles.titleCard}>
                            CleverFit — это не просто приложение, а твой личный помощник в мире фитнеса.
                            Не откладывай на завтра — начни тренироваться уже сегодня!
                        </Typography.Title>
                    </Card>
                    <Row gutter={16}>
                        {cardsData.map((item) => (
                            <Col span={8} className={styles.card}>
                                <Card title={item.title} size="small">{item.actions}</Card>
                            </Col>
                        ))}
                    </Row>
                </Space>
            </Space>
        </Content>
    );
};
