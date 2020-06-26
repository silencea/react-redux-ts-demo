import React from 'react'
import { Layout } from 'antd'
import HeaderNav from '../../components/header-nav'
import LeftNav from '../../components/left-nav'
import { Route, Switch, Redirect } from 'react-router-dom'
import routes from '../../config/menuConfig'
import './index.less';

const { Footer, Sider, Content, Header } = Layout

export default class Base extends React.Component<object, object> {
  render() {
    return (
      <Layout >
        <Sider  >
            <LeftNav />
          </Sider>
        <Layout >
          <Header><HeaderNav /></Header>
          <Content className="main-content">
            <Switch>
              <Redirect from='/' exact to='/home' />
              {routes.map(item => {
                const renderRouter = (item: any) => {
                  return <Route key={item.path} path={item.path} component={item.component} />
                }
                return item.component ? renderRouter(item) : item.children && item.children.map(e => renderRouter(e))
              })}
            </Switch>
          </Content>
          <Footer style={{ textAlign: 'center', color: '#cccccc' }}>推荐使用谷歌浏览器，可以获得更佳页面操作体验</Footer>
        </Layout>
       
      </Layout>
    )
  }
}
