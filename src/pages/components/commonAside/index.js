import React from 'react';
import { Menu, Layout } from 'antd';
import * as Icon from '@ant-design/icons';
import MenuConfig from '../../../config';

const { Sider } = Layout;

//动态获取icon
const iconToElement = (name)=>React.createElement(Icon[name]);

//递归构建items
const createItems = (config)=>{
    const child = {
        key:config.path,
        label:config.label,
        icon:iconToElement(config.icon)
    }
    if(config.children){
        child.children = config.children.map((v)=>createItems(v));
    }
    return child;
}

const items = MenuConfig.map((v)=>createItems(v));


const CommonAside = ({collapsed}) => {
    return (
        <Sider trigger={null} collapsed={collapsed}>
            <h3 className='app-name'>{collapsed?"后台":"通用后台管理系统"}</h3>
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
                items={items}
                style={{
                    height: '100%'
                }}
                // inlineCollapsed = {collapsed}
            />
        </Sider>
    )
}
export default CommonAside;
