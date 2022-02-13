import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Login',
  component: () => import('@/views/auth/Login')
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('@/views/auth/Login')
  },
  {
    path: '/Home',
    name: 'Home',
    children: [
      // 指标
      {
        path: '/Target/TransactionData',
        name: 'TransactionData',
        component: () => import('@/views/Target/TransactionData'),
        meta: {
          title: '交易数据',requireAuth: true
        }
      },
      {
        path: '/Target/OnChainIndicators',
        name: 'OnChainIndicators',
        component: () => import('@/views/Target/OnChainIndicators'),
        meta: {
          title: '链上数据',requireAuth: true
        }
      },
      {
        path: '/Target/StrategyJudgment',
        name: 'StrategyJudgment',
        component: () => import('@/views/Target/StrategyJudgment'),
        meta: {
          title: '策略判断',requireAuth: true
        }
      },
      // 授权
      {
        path: '/Authorization/Binance',
        name: 'Binance',
        component: () => import('@/views/Authorization/Binance'),
        meta: {
          title: '币安',requireAuth: true
        }
      },
      {
        path: '/Authorization/Ftx',
        name: 'Ftx',
        component: () => import('@/views/Authorization/Ftx'),
        meta: {
          title: 'Ftx',requireAuth: true
        }
      },
      {
        path: '/Authorization/Huobi',
        name: 'Huobi',
        component: () => import('@/views/Authorization/Huobi'),
        meta: {
          title: 'Huobi',requireAuth: true
        }
      },
      {
        path: '/Authorization/Okex',
        name: 'Okex',
        component: () => import('@/views/Authorization/Okex'),
        meta: {
          title: 'Okex',requireAuth: true
        }
      },
      // 资产
      {
        path: '/Assets/Okex',
        name: 'Okex',
        component: () => import('@/views/Assets/Okex'),
        meta: {
          title: 'Okex',requireAuth: true
        }
      },
      {
        path: '/Assets/Binance',
        name: 'Binance',
        component: () => import('@/views/Assets/Binance'),
        meta: {
          title: '币安',requireAuth: true
        }
      },
      {
        path: '/Assets/Huobi',
        name: 'Huobi',
        component: () => import('@/views/Assets/Huobi'),
        meta: {
          title: 'Huobi',requireAuth: true
        }
      },
      {
        path: '/Assets/TotalAssets',
        name: 'TotalAssets',
        component: () => import('@/views/Assets/TotalAssets'),
        meta: {
          title: '总资产',requireAuth: true
        }
      },
      // 设置
      {
        path: '/account',
        name: 'account',
        component: () => import('@/views/setting/account'),
        meta: {
          title: '账号管理',requireAuth: true
        }
      },
      {
        path: '/Setting/account',
        name: 'account',
        component: () => import('@/views/setting/account'),
        meta: {
          title: '账号管理',requireAuth: true
        }
      },
      {
        path: '/Setting/user',
        name: 'user',
        component: () => import('@/views/setting/user'),
        meta: {
          title: '角色管理',requireAuth: true
        }
      }
    ],
    component: () => import('@/views/Home'),
    meta: {title: 'Home',requireAuth: true}
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/error/404"),
    meta: { title: "404-NotFound" },
  },
  {
    path: "*",
    redirect: "/404",
    hidden: true,
  },

]

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

const router = new VueRouter({
  routes
})

export default router