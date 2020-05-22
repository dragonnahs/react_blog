import React from 'react';
import { withRouter } from 'react-router-dom'
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';


const { SubMenu } = Menu;


function LeftNav(props){
  console.log(props)
  const { pathname: defaultKey='cms/home' } = props.location
  const handleClick = e => {
    console.log('click ', e);
    console.log(props)
    const { history } = props
    history.push({
      pathname: e.key
    })
  }
  return (
    <>
      <Menu
        onClick={handleClick}
        style={{ width: 200 }}
        defaultSelectedKeys={defaultKey}
        defaultOpenKeys={['sub1']}
        mode="inline"
        className='left-nav'
      >
        <Menu.Item key="/cms/home">首页</Menu.Item>
        <SubMenu key="sub1" icon={<MailOutlined />} title="用户管理">
          <Menu.Item key="/mine">访问用户</Menu.Item>
          <Menu.Item key="2">注册用户</Menu.Item>
        </SubMenu>
        <Menu.Item key="/cms/add_ad">新增广告</Menu.Item>
        <SubMenu key="sub2" icon={<AppstoreOutlined />} title="其他">
          <Menu.Item key="/cms/ad_list">广告</Menu.Item>
          <Menu.Item key="6">图表</Menu.Item>
          <SubMenu key="sub3" title="权限">
            <Menu.Item key="7">权限列表</Menu.Item>
            <Menu.Item key="8">增加权限</Menu.Item>
          </SubMenu>
        </SubMenu>

       
      </Menu>
    </>
  )
}

export default withRouter(LeftNav)