require('./bootstrap');

import Vue from 'vue'

import App from './App.vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter);

import categoreis from './pages/categoreis/index'
import create_category from './pages/categoreis/create'
import products from './pages/products/index'
import create_product from './pages/products/create'

const router = new VueRouter({
    routes:[ {
        path: '/products',
        name: 'products',
        component: products
      },{ 
        path: '/categoreis',
        name: 'categoreis',
        component: categoreis
      },{ 
        path: '/category/create',
        name: 'create_category',
        component: create_category
      },{ 
        path: '/product/create',
        name: 'create_product',
        component: create_product
      }]
})

const app = new Vue({
    el:'#app',
    router: router,
    components:{App}
})