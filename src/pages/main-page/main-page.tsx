import React, { useState } from 'react';
import { Layout } from 'antd';

import { PageHeader } from '@components/Header';
import { PageContent } from '@components/Content';
import { PageFooter } from '@components/Footer';
import { PageSider } from '@components/Sider';

import styles from './main-page.module.scss';

export const MainPage: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Layout>
            <PageSider collapsed={collapsed} setCollapsed={setCollapsed}/>
            <Layout>
                <PageHeader />
                <div className={styles.wrapper}>
                    <PageContent collapsed={collapsed}/>
                    <PageFooter/>
                </div>
            </Layout>
        </Layout>
    );
};
