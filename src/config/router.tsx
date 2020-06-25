import Home from '../pages/home'
import SystemConfig from '../pages/admin'
import UserConfig from '../pages/login'

interface MenuItem {
    path: string,
    title: string,
    icon?: string,
    component?: any,
    children?: MenuItem[]
}
const routes: MenuItem[] = [
    {
        path: '/home',
        title: '首页',
        component: Home
    },
    {
        path: '/config',
        title: '方向管理',
        children: [
            {
                path: '/config/system',
                title: '系统配置',
                component: SystemConfig
            },
            {
                path: '/config/user',
                title: '用户配置',
                component: UserConfig
            }
        ]
    },
    {
        path: '/config',
        title: '权限管理',
        children: [
            {
                path: '/config/system',
                title: '系统配置',
                component: SystemConfig
            },
            {
                path: '/config/user',
                title: '用户配置',
                component: UserConfig
            }
        ]
    },
    {
        path: '/config',
        title: '通知管理',
        children: [
            {
                path: '/config/system',
                title: '系统配置',
                component: SystemConfig
            },
            {
                path: '/config/user',
                title: '用户配置',
                component: UserConfig
            }
        ]
    },
    {
        path: '/config',
        title: '工作流管理',
        children: [
            {
                path: '/config/system',
                title: '系统配置',
                component: SystemConfig
            },
            {
                path: '/config/user',
                title: '用户配置',
                component: UserConfig
            }
        ]
    }
]

export default routes