import React, { useEffect, useState } from 'react';
import { Layout, Menu } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
const { Sider } = Layout;

import styles from './Sider.module.scss';
import { Logo, LogoCrop } from '../../icons';
import { getMenuItems } from '@components/Sider/config';

const Trigger: React.FC<any> = ({ isCollapsed, collapse, isMobile }) => {
    if (isMobile) {
        return (
            <div className={styles.trigger} onClick={collapse} data-test-id='sider-switch-mobile'>
                {isCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </div>
        );
    }
    return (
        <div className={styles.trigger} onClick={collapse} data-test-id='sider-switch'>
            {isCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </div>
    );
};

const SiderMenu: React.FC<any> = ({ itemIds, isMobile }) => {
    const items = getMenuItems(itemIds);

    return (
        <Menu theme='light' mode='inline' items={items} inlineIndent={isMobile ? 0 : 16} className={styles.menu} />
    );
};

export const PageSider: React.FC<any> = ({collapsed, setCollapsed}) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 360);

    const handleWindowSizeChange = () => {
        window.innerWidth <= 360 ? setIsMobile(true) : setIsMobile(false);
    }

    useEffect(() => {
        window.innerWidth <= 360 && setIsMobile(true);
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        };
    }, []);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
        console.log("collapsed", collapsed);
        console.log("is mobile", isMobile);
    };

    return (
        <Sider
            className={styles.sider}
            theme='light'
            width={isMobile ? 106 : 208}
            collapsedWidth={isMobile && collapsed ? 0 : 64}
            collapsible
            collapsed={collapsed}
            trigger={null}
            onCollapse={toggleCollapsed}
        >
            <div>
                <div className={styles.logo}>{collapsed ? <LogoCrop /> : <Logo />}</div>
                <SiderMenu itemIds={['1', '2', '3', '4']} isMobile={isMobile} />
            </div>
            <SiderMenu itemIds={['5']} className={styles.exit} isMobile={isMobile} />
            <Trigger isCollapsed={collapsed} collapse={toggleCollapsed} isMobile={isMobile} />
        </Sider>
    );
};
