import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import Chat from '@/components/Chat'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat,
      // Welcomeから変数受取のため
      props: true,
      // Route Guards
      beforeEnter: (to, from, next) => {
        // console.log(to.params.name)
        // ページ元にname変数があれば
        if (to.params.name) {
          // 次の指定したコンポーネントへ
          next()
        } else {
          next({
            // リダイレクトしたいページ先のコンポーネント
            name: 'Welcome'
          })
        }
      }
    }
  ]
})
