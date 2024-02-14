import React from 'react';
import { Button, Card, Layout } from 'antd';
const { Footer } = Layout;

import styles from './Footer.module.scss';
import { AndroidFilled, AppleFilled } from '@ant-design/icons';

export const PageFooter: React.FC<any> = () => {
    return (
        <Footer className={styles.footer}>
            <Button type='link' size='large' className={styles.reviews}>
                Смотреть отзывы
            </Button>
            <Card
                actions={[
                    <Button key='android' type='text' icon={<AndroidFilled />} href='#'>
                        Android OS
                    </Button>,
                    <Button key='apple' type='text' icon={<AppleFilled />} href='#'>
                        Apple OS
                    </Button>,
                ]}
            >
                <Card.Meta title='Скачать на телефон' description='Доступно в PRO-тарифе' />
            </Card>
        </Footer>
    );
};
