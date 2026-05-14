import React from 'react';
import {  Layout, theme } from 'antd';
import { Outlet } from 'react-router-dom';
import CommonAside from './components/commonAside';
import CommonHeader from "./components/commonHeader";
import { useSelector } from 'react-redux';
const {  Content } = Layout;
const Main = () => {
    const collapsed = useSelector(state=>state.tab.isCollapse);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout className='main-container'>
            <CommonAside collapsed={collapsed}/>
            <Layout>
                <CommonHeader collapsed={collapsed}  />
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
}
export default Main;