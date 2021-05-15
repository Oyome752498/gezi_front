import Vue from 'vue'
import Router from 'vue-router'
import {LoginShow,LoginHidden} from '../js/userInfo'
import ProcessingCenter from '@/components/processing-center/processing-center'
import test from '@/components/test/test'
import MessageCenter from '@/components/message-center/message-center'
import Login from '@/components/login/login'


Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/',
      redirect: 'ProcessingCenter',
    },
    {
      path: '/ProcessingCenter',
      name: 'ProcessingCenter',
      component: ProcessingCenter,
      meta:{
        requireAuth: true    // 添加该字段，表示进入这个路由是需要登录的
      },//路由元
      children: [
       
       
        {
          path: '/test',
          component: test,
        }
      ]
    },
    {
      path: '/MessageCenter',
      name: 'MessageCenter',
      component: MessageCenter,
    },
    {
      path: '/login',
      // name: 'login',
      component:Login,
    }
  ]
  
})
router.beforeEach((to, from, next) => {
 
  if (to.matched.some(res => res.meta.requireAuth)) {// 判断是否需要登录权限
    if (1 ==1) {// 判断是否登录
      next()
      LoginShow();
    } else {// 没登录则跳转到登录界面
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
      LoginHidden();
    }
  } else {
    next()
    if(to.fullPath == "/login"){
      LoginHidden();
    }
  }
})
router.onError((error) => {
  const pattern = /Loading chunk (\d)+ failed/g;
  const isChunkLoadFailed = error.message.match(pattern);
  const targetPath = router.history.pending.fullPath;
  if (isChunkLoadFailed) {
  router.replace(targetPath);
  }
  });

export default router
