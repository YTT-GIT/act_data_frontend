import router from './router'
import store from './store'
import getPageTitle from '@/utils/get-page-title'

import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'
import {getToken} from "@/utils/auth"; // progress bar style

NProgress.configure({showSpinner: false}) // NProgress Configuration

// 路由首位 ,每当有页面跳转都会到这里
router.beforeEach(async (to, from, next) => {
    // console.log("开始拦截");
    // start progress bar
    NProgress.start()
    // set page title
    document.title = getPageTitle(to.meta.title)
    // determine whether the user has logged in
    const hasToken = getToken();
    // 判断当前token是否为空,空的话跳转到登录页面
    if (hasToken) {
        if (to.path === '/') {
            // 登录，跳转首页
            next({path: '/Login'})
            NProgress.done()
        } else {
            // 获取用户信息
            // await store.dispatch('user/getInfo')
            next()
        }
    } else if (!to.meta.requireAuth)
    {
        next()
    }
    else {
        next('/Login')
    }
})

router.afterEach(() => {
    // finish progress bar
    NProgress.done()
})
