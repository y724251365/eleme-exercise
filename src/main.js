// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
// 引入三个路由文件
import goods from './components/goods/goods.vue';
import seller from './components/seller/seller.vue';
import ratings from './components/ratings/ratings.vue';

// 引入VueRouter这个变量
Vue.use(VueRouter);

Vue.config.productionTip = false;
/* eslint-disable no-new */
//  轻易创建Vue项目的时候，轻易不要打开ESLint，太坑了，全是坑，太严格了。。。
// 路由模块2.0完全不支持1.0的方法
new Vue({
  el: '#app',
  router: new VueRouter({
    routes:[
      {path:'/',redirect:'/goods'},
      {path:'/goods',component:goods},
      {path:'/seller',component:seller},
      {path:'/ratings',component:ratings}
    ]
  }),
  components: { App },
  template: '<App/>'
})
