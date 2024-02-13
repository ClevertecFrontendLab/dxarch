import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
const { Sider } = Layout;

import styles from './Sider.module.scss';
import { Logo, LogoCrop } from '../../icons';
import { getMenuItems } from '@components/Sider/config';

const Trigger: React.FC<any> = ({ isCollapsed, collapse }) => {
    return (
        <div className={styles.trigger} onClick={collapse}>
            {isCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </div>
    );
};

const SiderMenu: React.FC<any> = ({ itemIds }) => {
    const items = getMenuItems(itemIds);

    return <Menu theme='light' mode='inline' items={items} inlineIndent={16} />;
};

export const PageSider = () => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    return (
        <Sider
            className={styles.sider}
            theme='light'
            width={208}
            collapsedWidth={64}
            collapsible
            collapsed={collapsed}
            trigger={null}
            onCollapse={toggleCollapsed}
        >
            <div>
                <div className={styles.logo}>
                    {collapsed ? <LogoCrop /> : <Logo />}
                </div>
                <SiderMenu itemIds={['1', '2', '3', '4']} />
            </div>
            <SiderMenu itemIds={['5']} className={styles.exit}/>
            <Trigger isCollapsed={collapsed} collapse={toggleCollapsed} />
        </Sider>
    );
};
