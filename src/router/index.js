import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/HelloWorld'
import Navbar from '@/layout/Navbar'



Vue.use(Router)
export default new Router({
  routes: [
    {
      path: "/home",
      name: "HelloWorld",
      components: {
         Navbar,
         HelloWorld,
        // footer: AppFooter
      }
    },
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: Navbar,
    //   component: HelloWorld
    //   // component: {
    //   //   Navbar,
    //   //   HelloWorld
    //   // }
    // }
  ]
})
