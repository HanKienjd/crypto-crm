'use client'
import { menuList } from '@/app/utils/menu';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { useRouter } from 'next/navigation';
import React from 'react';
const { Header, Content, Sider } = Layout;

type Props = {
  children: React.ReactNode
}


const MainLayout = ({ children }: Props) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const router = useRouter()
  const handleClickMenu = (key: string) => {
    router.push(`/${key}`)
  }
  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
      </Header>
      <Layout>
        <Sider width={200}>

          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            items={menuList}
            onClick={(e) => handleClickMenu(e.key)}
          />
        </Sider>
        <Layout style={{ padding: '24px' }}>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default MainLayout