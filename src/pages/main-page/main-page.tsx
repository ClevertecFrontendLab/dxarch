import React from 'react';
import {Layout, Space} from 'antd';

import { PageHeader } from '@components/Header';
import { PageContent } from '@components/Content';
import { PageFooter } from '@components/Footer';
import { PageSider } from '@components/Sider';

import styles from './main-page.module.scss';

export const MainPage: React.FC = () => {
    return (
        <Layout>
            <PageSider />
            <Layout>
                <PageHeader />
                <Space className={styles.wrapper} size="large" direction="vertical">
                    <PageContent />
                    <PageFooter />
                </Space>
            </Layout>
        </Layout>
    );
};
