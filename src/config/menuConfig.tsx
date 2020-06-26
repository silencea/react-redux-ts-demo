import Home from '../pages/home'
import Direction from '../pages/direction';
import Role from '../pages/permission/role';
import Admin from '../pages/permission/admin';
import Permission from '../pages/permission/permission';
import Notice from '../pages/notice';
import Workflow from '../pages/workflow';

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
        path: '/direction',
        title: '方向管理',
        component: Direction
    },
    {
        path: '/auth',
        title: '权限管理',
        children: [
            {
                path: '/auth/admin',
                title: '管理员配置',
                component: Admin
            },
            {
                path: '/auth/role',
                title: '角色配置',
                component: Role
            }
            ,
            {
                path: '/auth/permission',
                title: '权限码管理',
                component: Permission
            }
        ]
    },
    {
        path: '/notice',
        title: '通知管理',
        component: Notice
    },
    {
        path: '/workflow',
        title: '工作流管理',
        component: Workflow
    }
]

export default routes