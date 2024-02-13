import React from "react";
import {Breadcrumb, Button, Layout, Space, Typography} from "antd";


const { Header } = Layout;

import styles from './Header.module.scss'
import {SettingOutlined} from "@ant-design/icons";

export const PageHeader: React.FC = () => {
    return (
        <Header className={styles.header}>
            <Space direction="vertical" className={styles.wrapper}>
                <Breadcrumb>
                    <Breadcrumb.Item>Главная</Breadcrumb.Item>
                </Breadcrumb>
                <div className={styles.container}>
                    <Typography.Title level={1}>Приветствуем тебя в CleverFit — приложении, <br/> которое поможет тебе добиться своей мечты!</Typography.Title>
                    <Button className={styles.settings} icon={<SettingOutlined />}>Настройки</Button>
                </div>
            </Space>
        </Header>
    );
}
