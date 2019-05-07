import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if false, the item will hidden in breadcrumb(default is true)
  }
**/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },

  {
    path: '',
    component: Layout,
    redirect: '/dashboard',
    name: 'dashboard',
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index'),
      name: 'Dashboard',
      meta: { title: '首页', icon: 'dashboard', noCache: true }
    }]
  },

  {
    path: '/form1',
    component: Layout,
    children: [
      {
        path: 'index',
        name: '基础组件(暂定)',
        component: () => import('@/views/update/index'),
        meta: { title: '基础组件(暂定)', icon: 'form' }
      }
    ]
  },

  {
    path: '/form6',
    component: Layout,
    children: [
      {
        path: 'index',
        name: '常用业务组件(暂定)',
        component: () => import('@/views/update/index'),
        meta: { title: '常用业务组件(暂定)', icon: 'form' }
      }
    ]
  },

  {
    path: '/everycss',
    component: Layout,
    redirect: '/everycss/2019',
    name: 'Example',
    meta: { title: 'week-css', icon: 'example' },
    children: [
      {
        path: '2019',
        name: '2019',
        meta: { title: '2019' },
        component: () => import('@/views/everycss/2019/index'),
        children: [
          {
            path: 'timeline',
            name: 'timeline',
            component: () => import('@/views/everycss/2019/timeline/index'),
            meta: { title: '1周：垂直时间轴代码' }
          }
        ]
      }
    ]
  },

  {
    path: '/echarts',
    component: Layout,
    redirect: '/echarts/bar',
    name: 'echarts',
    meta: { title: 'Echarts图表', icon: 'chart' },
    children: [
      {
        path: 'line',
        name: 'line',
        meta: { title: '折线图' },
        component: () => import('@/views/echarts/line/index')
      },
      {
        path: 'bar',
        name: 'bar',
        meta: { title: '柱状图' },
        component: () => import('@/views/echarts/bar/index')
      },
      {
        path: 'pie',
        name: 'pie',
        meta: { title: '饼图' },
        component: () => import('@/views/echarts/pie/index')
      }
    ]
  },

  // {
  //   path: '/nested',
  //   component: Layout,
  //   redirect: '/nested/menu1',
  //   name: 'Nested',
  //   meta: {
  //     title: 'Nested',
  //     icon: 'nested'
  //   },
  //   children: [
  //     {
  //       path: 'menu1',
  //       component: () => import('@/views/nested/menu1/index'), // Parent router-view
  //       name: 'Menu1',
  //       meta: { title: 'Menu1' },
  //       children: [
  //         {
  //           path: 'menu1-1',
  //           component: () => import('@/views/nested/menu1/menu1-1'),
  //           name: 'Menu1-1',
  //           meta: { title: 'Menu1-1' }
  //         },
  //         {
  //           path: 'menu1-2',
  //           component: () => import('@/views/nested/menu1/menu1-2'),
  //           name: 'Menu1-2',
  //           meta: { title: 'Menu1-2' },
  //           children: [
  //             {
  //               path: 'menu1-2-1',
  //               component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
  //               name: 'Menu1-2-1',
  //               meta: { title: 'Menu1-2-1' }
  //             },
  //             {
  //               path: 'menu1-2-2',
  //               component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
  //               name: 'Menu1-2-2',
  //               meta: { title: 'Menu1-2-2' }
  //             }
  //           ]
  //         },
  //         {
  //           path: 'menu1-3',
  //           component: () => import('@/views/nested/menu1/menu1-3'),
  //           name: 'Menu1-3',
  //           meta: { title: 'Menu1-3' }
  //         }
  //       ]
  //     },
  //     {
  //       path: 'menu2',
  //       component: () => import('@/views/nested/menu2/index'),
  //       meta: { title: 'menu2' }
  //     }
  //   ]
  // },

  // {
  //   path: 'external-link',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
  //       meta: { title: 'External Link', icon: 'link' }
  //     }
  //   ]
  // },

  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
