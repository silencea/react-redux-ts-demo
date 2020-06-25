import React from 'react'
import { Layout } from 'antd'
import Header from '../../components/header-nav'
import Navside from '../../components/navside'
import { Route, Switch, Redirect } from 'react-router-dom'
import routes from '../../config/router'

export default class Base extends React.Component<object, object> {
  render() {
    return (
      <Layout className="main">
        <Layout.Header className="main-header"><Header /></Layout.Header>
        <Layout className="main-content">
          <Layout.Sider width={200} className="site-layout-background">
            <Navside />
          </Layout.Sider>
          <Layout.Content>
            <Switch>
              <Redirect from='/' exact to='/home'/>
              {routes.map(item => {
                const renderRouter = (item: any) => {
                  return <Route key={item.path} path={item.path} component={item.component} />
                }
                return item.component ? renderRouter(item) : item.children && item.children.map(e => renderRouter(e))
              })}
            </Switch>
          </Layout.Content>
          <Layout.Footer style={{textAlign: 'center', color: '#cccccc'}}>推荐使用谷歌浏览器，可以获得更佳页面操作体验</Layout.Footer>
        </Layout>
      </Layout>
    )
  }
}
